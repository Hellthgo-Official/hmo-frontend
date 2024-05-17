import React from 'react';
import CustomButton from '../../components/CustomButton';
import { useParams } from 'react-router-dom';
import { planInstallments } from '../../utils/data/Plans';
import usePlanStore from '../../store/plan';

type Props = {};

const PaymentPlanSpan = (props: Props) => {
  const { planSpan, planType } = useParams();

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

  return (
    <div className="p-5">
      <p className="text-center font-semibold">
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

          <CustomButton
            linkRoute={`/payment-checkout/${specificPlan.id}/${planSpan}`}
            linkTitle="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanSpan;

