import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeFirstPayment } from '../../api/plan';
import CustomButton from '../../components/CustomButton';
import useAuthStore from '../../store/auth';
import usePlanStore from '../../store/plan';

type Props = {};

const PayNextAmount = (props: Props) => {
  const user = useAuthStore((state) => state.user);
  const plans = usePlanStore((state) => state.plans);

  const specificPlan = plans.find((plan) => plan.id === '');

  const navigate = useNavigate();

  return (
    <div className="p-5">
      {/* {makeFirstPaymentMutation.isError && (
        <div className="bg-secondary mb-5 w-2/3 p-3 ml-auto rounded-lg">
          <p className="font-semibold text-white">
            Something went wrong? Contact Support
          </p>
        </div>
      )} */}
      <div className="text-center pb-10">
        <p className="font-semibold mb-5">Make Payment</p>
        <p className="text-sm">Important Notice:</p>
        <p className="text-sm">
          You will pay the weekly due of{' '}
          <span className="font-semibold">
            {/* (₦{initialDeposit.toLocaleString()}) */}
          </span>{' '}
          plus service fees for now. Are you ready to pay now?
        </p>
      </div>
      <p className="text-sm text-center my-5">
        Yes, I am ready to pay the deposit amount now.
      </p>

      <CustomButton
        linkRoute=""
        linkTitle="Pay with Wallet Balance"
        buttonType="full"
        extraClassNames="my-5"
        // loading={makeFirstPaymentMutation.isPending}
        onClick={() => {
          //   onMakePayment();
        }}
      />

      {/* {makeFirstPaymentMutation.isSuccess && (
        <p className="lg:text-lg text-green-600 mt-2">{''}</p>
      )} */}
      {/* {makeFirstPaymentMutation.isError && (
        <p className="lg:text-lg text-red-600 mt-2">
          {makeFirstPaymentMutation.error.message.includes('Insufficient')
            ? 'Insufficient wallet balance'
            : makeFirstPaymentMutation.error.message}
        </p>
      )} */}

      <p className="text-sm text-center mt-10 mb-5">
        Not yet, I am not ready to pay the deposit amount now.
      </p>

      <p className="text-sm text-healthgoGreen font-semibold text-center">
        No, I’d Continue Later
      </p>
    </div>
  );
};

export default PayNextAmount;

