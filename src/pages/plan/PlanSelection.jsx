import { useMutation } from '@tanstack/react-query';
import { fetchPlans } from '../../api/plan';
import CustomButton from '../../components/CustomButton';
import useAuthStore from '../../store/auth';
import { useEffect } from 'react';
import useFormatDate from '../../utils/hooks/useFormatDate';

const PlanSelection = () => {
  const user = useAuthStore((state) => state.user);

  const currentPlan = user.currentPlan;

  const fetchPlanMutation = useMutation({
    mutationFn: fetchPlans,
    onSuccess: (data) => {
      console.log(data.response);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    currentPlan.paymentID && fetchPlanMutation.mutate(currentPlan.paymentID);
  }, []);

  const nextPayDay =
    currentPlan && currentPlan.paymentFrequency === 'weekly'
      ? 604800000
      : 2629776000;

  return (
    <div className="px-3 py-5">
      <div className="shadow-lg px-3 py-5 rounded-lg">
        <p className="text-healthgoBlack mb-3 lg:mb-5 lg:text-lg">
          Hi {user.firstName}.
        </p>

        {!user.ninVerified && !user.bvnVerified ? (
          <>
            <div className="border border-primary rounded-lg p-3">
              <p className="text-healthgoGreen text-sm lg:text-xl mb-5 font-semibold">
                What to do next
              </p>
              <p className="text-xs lg:text-lg font-semibold mb-1">
                Get Verified
              </p>
              <p className="text-xs lg:text-lg">
                You need to get your HealthGO account verified to be able to
                access the various benefits of your HealthGO account.
              </p>
            </div>

            <CustomButton
              extraClassNames="lg:my-7"
              linkTitle={'Verify Account'}
              linkRoute={'/verify-account'}
            />
          </>
        ) : (
          <>
            <div className="border border-primary rounded-lg p-3 my-7">
              <p className="text-healthgoGreen text-sm lg:text-xl mb-5 font-semibold">
                What to do next
              </p>
              <p className="text-xs lg:text-lg font-semibold mb-1">
                Choose a package
              </p>
              <p className="text-xs lg:text-lg">
                Choose an healthcare package you can easily afford and start
                enjoying the benefits.
              </p>
              <CustomButton
                extraClassNames="my-4 lg:my-7"
                linkTitle={'See Available Packages'}
                linkRoute={'/available-packages'}
              />
            </div>
          </>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">Started since:</p>
            <p className="text-healthgoBlack">
              {currentPlan.initialPaymentDate
                ? useFormatDate(currentPlan.initialPaymentDate)
                : 'N/A'}
            </p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">Enrollee ID:</p>
            <p className="text-healthgoBlack">
              {user.enroleeId ? user.enroleeId : 'N/A'}
            </p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">Deposit Amount:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">Instalment amount:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">Amount paid:</p>
            <p className="text-healthgoBlack">
              {currentPlan.totalPaid ? currentPlan.totalPaid : 'N/A'}
            </p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">
              Balance left to pay:
            </p>
            <p className="text-healthgoBlack">
              {currentPlan.price && currentPlan.totalPaid
                ? Number(currentPlan.price) - Number(currentPlan.totalPaid)
                : 'N/A'}
            </p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">Mode of payment:</p>
            <p className="text-healthgoBlack">Wallet Balance</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm lg:text-xl font-light">
              Date for next payment:
            </p>
            <p className="text-healthgoBlack">
              {currentPlan.lastPaymentDate
                ? useFormatDate(currentPlan.lastPaymentDate + nextPayDay)
                : 'N/A'}
            </p>
          </div>
        </div>

        <div className="py-8 text-center">
          <p className="text-sm lg:text-xl text-healthgoBlack font-semibold">
            HealthCare Plan:
          </p>
          <p className="font-light">Unavailable</p>
        </div>

        <div className="flex items-center justify-center gap-y-3 flex-col">
          <CustomButton
            buttonType="outlined"
            linkRoute="/available-packages"
            linkTitle="See Available Packages"
          />
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;

