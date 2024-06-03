import React, { useEffect } from 'react';
import usePlanStore from '../../store/plan';
import { useMutation } from '@tanstack/react-query';
import { fetchPlans } from '../../api/plan';
import CustomButton from '../../components/CustomButton';

type Props = {};

const PackageBenefits = (props: Props) => {
  const generateParams = (value: string) => {
    const link = '/available-packages#' + value;
    return link;
  };

  const plans = usePlanStore((state) => state.plans);
  const storePlans = usePlanStore((state) => state.setPlans);

  const fetchPlansMutation = useMutation({
    mutationFn: fetchPlans,
    onSuccess: (data) => {
      storePlans(data.response);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    fetchPlansMutation.mutate('');
  }, []);
  return (
    <div className="p-5">
      <p className="text-center font-semibold">Package Benefits</p>

      {fetchPlansMutation.isPending && (
        <p className="text-center font-semibold my-10">Getting Packages...</p>
      )}

      {fetchPlansMutation.isError && (
        <p className="lg:text-lg text-red-600 mt-2">
          {fetchPlansMutation.error.message}
        </p>
      )}

      {fetchPlansMutation.isSuccess && (
        <div className="flex flex-wrap w-full gap-5 pt-7">
          {plans.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full rounded-lg border border-slate-200 p-5"
              >
                <p className="text-xl font-bold text-center">{item.name}</p>
                <p className="text-sm my-2 font-light text-textGrey text-center">
                  This plan goes for
                </p>
                <p className="text-sm font-light text-textGrey text-center">
                  ₦
                  <span className="text-2xl font-bold text-center">
                    {item.price ? item.price.toLocaleString() : 0}{' '}
                  </span>
                  per year
                </p>

                <div className="py-2">
                  <p>This plan covers:</p>

                  {item.features.map((feature) => {
                    return (
                      <p key={feature}>
                        <span>&#10003;</span> {feature}
                      </p>
                    );
                  })}
                </div>
                <CustomButton
                  linkRoute={generateParams(item.id)}
                  linkTitle="Get Started"
                  buttonType="full"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PackageBenefits;

