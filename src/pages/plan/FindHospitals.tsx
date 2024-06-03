import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getHospitalsFn } from '../../api/wallet';
import useAuthStore from '../../store/auth';
import NaijaStates from 'naija-state-local-government';
import Select from 'react-dropdown-select';
import { fetchPlans } from '../../api/plan';
import CustomButton from '../../components/CustomButton';

type Props = {};

interface Hospital {
  address1: string;
  categoryname: string;
  contactemail1: string;
  contactfirstname: string;
  contactlastname: string;
  contactothername: string;
  contactphone1: string;
  provcatid: string;
  provideremail1: string;
  providerid: number;
  providerkey: number;
  providername: string;
  providerphone1: string;
  providertin: string;
  rcnumber: number;
  region: string;
  stateid: number;
  statename: string;
}

interface Item {
  value: string;
  label: string;
}

const FindHospitals = (props: Props) => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]);
  const [selectedState, setSelectedState] = useState<Item[]>([]);
  const [selectedHospitals, setSelectedHospitals] = useState<Hospital[]>([]);

  const user = useAuthStore((state) => state.user);
  const currentPlan = user.currentPlan;

  if (!currentPlan) {
    return null;
  }

  const getHosiptalsMutation = useMutation({
    mutationFn: getHospitalsFn,
    onSuccess: (data) => {
      const result = data.response;
      setHospitals(result);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const stateList = NaijaStates.states();

  const stateOptions = stateList.map((item) => {
    return { value: item, label: item };
  });

  const filterHospitalsByState = () => {
    const filteredData =
      selectedState.length > 0
        ? hospitals.filter((item) => {
            return (
              item.statename.toLowerCase() ===
              selectedState[0].value.toLowerCase()
            );
          })
        : [];

    setFilteredHospitals(filteredData);
  };

  const [planData, setPlanData] = useState<any>(null);

  const fetchPlanMutation = useMutation({
    mutationFn: fetchPlans,
    onSuccess: (data) => {
      setPlanData(data.response);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    currentPlan.paymentID && fetchPlanMutation.mutate(currentPlan.paymentID);
  }, []);

  const fetchHospitalFn = () => {
    if (planData) {
      getHosiptalsMutation.mutate({ planName: planData.planCode });
    }
  };

  useEffect(() => {
    fetchHospitalFn();
  }, [planData]);

  const handleSelect = (item: Hospital) => {
    const itemId = item.providerid;
    if (!itemId) {
      throw new Error("Item must have an 'id' field");
    }

    const duplicate =
      selectedHospitals &&
      selectedHospitals.find(
        (existingItem) => existingItem.providerid === itemId,
      );
    if (duplicate) {
      return false; // Duplicate found
    }

    setSelectedHospitals([...selectedHospitals, item]);
    return true;
  };

  useEffect(() => {
    filterHospitalsByState();
  }, [selectedState]);

  return (
    <div className="p-5">
      {getHosiptalsMutation.isPending && (
        <p className="text-center font-semibold my-10">Getting Hospitals...</p>
      )}
      {!getHosiptalsMutation.isPending && (
        <div>
          <p className="text-center font-semibold">Select Hospital</p>
          <p className="text-center text-sm">Select hospitals nearest to you</p>
          <div className="py-5">
            <p className="text-xs lg:text-lg font-light mb-1">Select State</p>
            <Select
              options={stateOptions}
              onChange={(values) => {
                setSelectedState(values);
              }}
              values={selectedState}
              className="w-full text-sm bg-blandGreen outline-green-700"
              searchBy="value"
              style={{
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #B8E5CA',
              }}
            />
          </div>
        </div>
      )}

      <div>
        {selectedState.length > 0 && (
          <p className="font-semibold text-lg mb-3 text-center">
            List of hospitals in {selectedState[0].value}
          </p>
        )}

        {filteredHospitals &&
          filteredHospitals.length > 0 &&
          filteredHospitals.map((item, index) => {
            return (
              <button
                key={index}
                className="w-full py-4 my-2 px-3 flex items-center justify-between bg-white rounded-lg"
                onClick={() => {
                  handleSelect(item);
                }}
              >
                <div className="w-4/5 text-left">
                  <p className="font-semibold">{item.providername}</p>
                  <p className="text-sm">{item.address1}</p>
                </div>

                {selectedHospitals.includes(item) && (
                  <div className="">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4822_7504)">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                          fill="#07A53D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4822_7504">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
              </button>
            );
          })}

        {selectedHospitals.length >= 5 && (
          <CustomButton
            buttonType="full"
            linkTitle="Select Hospital"
            extraClassNames="my-7"
          />
        )}
      </div>
    </div>
  );
};

export default FindHospitals;

