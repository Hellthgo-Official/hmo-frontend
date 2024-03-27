import React from 'react';
import CustomButton from '../components/CustomButton';

type Props = {};

const PaymentPlanSpan = (props: Props) => {
  return (
    <div className="p-5">
      <p className="text-center font-semibold">How much would you Pay Daily?</p>

      <div className="grid grid-cols-1 py-5 gap-5">
        {/* Daily */}
        <div className="border border-primary px-3 pt-5 pb-2 rounded-lg">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-semibold">₦300 per day</p>
          </div>

          <div className="flex justify-between mb-5">
            <p className="text-xs font-light">Finish paying after:</p>
            <p className="text-xs font-light">100 days; ~3 months</p>
          </div>

          <CustomButton linkRoute="/payment-plan/daily" linkTitle="Next" />
        </div>

        {/* Daily */}
        <div className="border border-primary px-3 pt-5 pb-2 rounded-lg">
          <div className="flex justify-between mb-2">
            <p className="text-sm font-semibold">₦500 per day</p>
          </div>

          <div className="flex justify-between mb-5">
            <p className="text-xs font-light">Finish paying after:</p>
            <p className="text-xs font-light">60 days; ~2 months</p>
          </div>

          <CustomButton linkRoute="/payment-plan/daily" linkTitle="Next" />
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanSpan;

