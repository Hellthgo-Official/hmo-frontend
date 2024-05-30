import { useMutation } from '@tanstack/react-query';
import NaijaStates from 'naija-state-local-government';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getHospitalsFn } from '../../api/wallet';
import CustomButton from '../../components/CustomButton';
import useAuthStore from '../../store/auth';
import usePlanStore from '../../store/plan';
import Select from 'react-dropdown-select';

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

const PaymentPlanSpan = (props: Props) => {
  const { planSpan, planType } = useParams();

  const user = useAuthStore((state) => state.user);

  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>([]);
  const [selectedState, setSelectedState] = useState<Item[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(
    null,
  );

  let planSpanIndex = 0;
  let planDate = '';
  let planDuration = '';

  const plans = usePlanStore((state) => state.plans);
  const specificPlan = plans.find((plan) => plan.id === planType);

  if (!specificPlan || !planSpan || !planType) {
    return <p>No plan found</p>;
  }

  const planSpanData = specificPlan.payment[planSpan];

  switch (planSpan) {
    case 'daily':
      planSpanIndex = 0;
      planDate = 'day';
      planDuration = planSpanData.duration_days;
      break;

    case 'weekly':
      planSpanIndex = 1;
      planDate = 'week';
      planDuration = planSpanData.duration_weeks;

      break;

    case 'monthly':
      planSpanIndex = 2;
      planDate = 'month';
      planDuration = planSpanData.duration_months;

      break;

    default:
      planSpanIndex = 0;
      break;
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

  const fetchHospitalFn = () => {
    getHosiptalsMutation.mutate({ planName: specificPlan.planCode });
  };

  useEffect(() => {
    fetchHospitalFn();
  }, []);

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
          <p className="text-center text-sm">
            Select a hospital nearest to you
          </p>
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
                  setSelectedHospital(item);
                }}
              >
                <div className="w-4/5 text-left">
                  <p className="font-semibold">{item.providername}</p>
                  <p className="text-sm">{item.address1}</p>
                </div>

                {item.providerid === selectedHospital?.providerid && (
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
      </div>

      <p className="text-center font-semibold my-5">
        How much would you Pay {planSpan}?
      </p>

      <div className="grid grid-cols-1 py-5 gap-5">
        {/* Daily */}
        <div className="border border-primary px-3 pt-5 pb-2 rounded-lg">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-semibold">
              ₦{planSpanData.amount.toLocaleString()} per {planDate}
            </p>
          </div>

          <div className="flex justify-between mb-5">
            <p className="text-xs font-light">Finish paying after:</p>
            <p className="text-xs font-light">
              {planDuration} {planDate}s ~{' '}
              {planType.includes('MAXI') ? '6' : '3'} months
            </p>
          </div>

          {selectedHospital && (
            <CustomButton
              linkRoute={`/payment-checkout/${specificPlan.id}/${planSpan}/${selectedHospital?.providerid}`}
              linkTitle="Next"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanSpan;

