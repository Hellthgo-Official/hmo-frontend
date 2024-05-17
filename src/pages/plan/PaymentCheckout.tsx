import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeFirstPayment } from '../../api/plan';
import CustomButton from '../../components/CustomButton';
import useAuthStore from '../../store/auth';
import usePlanStore from '../../store/plan';

type Props = {};

const PaymentCheckout = (props: Props) => {
  const { planSpan, planType } = useParams();

  const user = useAuthStore((state) => state.user);
  const plans = usePlanStore((state) => state.plans);

  const specificPlan = plans.find((plan) => plan.id === planType);

  if (!specificPlan || !planSpan || !planType) {
    return <p>No plan found</p>;
  }

  const initialDeposit = specificPlan.payment.initial_deposit;

  const formData = {
    paymentFrequency: planSpan,
    planId: specificPlan.id,
    userId: user._id,
  };

  const navigate = useNavigate();

  const makeFirstPaymentMutation = useMutation({
    mutationFn: makeFirstPayment,
    onSuccess: (data) => {
      console.log(data.response);
      navigate('/');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onMakePayment = () => {
    makeFirstPaymentMutation.mutate(formData);
  };

  return (
    <div className="p-5">
      <div className="text-center pb-10">
        <p className="font-semibold mb-5">Make Payment</p>
        <p className="text-sm">Important Notice:</p>
        <p className="text-sm">
          You will first pay the deposit amount{' '}
          <span className="font-semibold">
            (₦{initialDeposit.toLocaleString()})
          </span>{' '}
          plus service fees for now. Are you ready to pay the deposit now?
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
        loading={makeFirstPaymentMutation.isPending}
        onClick={() => {
          onMakePayment();
        }}
      />

      {makeFirstPaymentMutation.isSuccess && (
        <p className="lg:text-lg text-green-600 mt-2">{''}</p>
      )}
      {makeFirstPaymentMutation.isError && (
        <p className="lg:text-lg text-red-600 mt-2">
          {makeFirstPaymentMutation.error.message.includes('Insufficient')
            ? 'Insufficient wallet balance'
            : makeFirstPaymentMutation.error.message}
        </p>
      )}
      {/* <CustomButton
        linkRoute="/wallet"
        linkTitle="Pay with Wallet Balance"
        buttonType="outlined"
        extraClassNames="w-full items-center justify-center"
      /> */}

      <p className="text-sm text-center mt-10 mb-5">
        Not yet, I am not ready to pay the deposit amount now.
      </p>

      <p className="text-sm text-healthgoGreen font-semibold text-center">
        No, I’d Continue Later
      </p>
    </div>
  );
};

export default PaymentCheckout;

