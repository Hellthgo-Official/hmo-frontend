import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { makeFirstPayment } from '../../api/plan';
import CustomButton from '../../components/CustomButton';
import useAuthStore from '../../store/auth';
import usePlanStore from '../../store/plan';
import { useForm } from 'react-hook-form';

type Props = {};

const PaymentCheckout = (props: Props) => {
  const { planSpan, planType, providerId } = useParams();

  type Inputs = {
    couponCode?: string;
  };

  const {
    register,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const user = useAuthStore((state) => state.user);
  const plans = usePlanStore((state) => state.plans);

  const specificPlan = plans.find((plan) => plan.id === planType);

  if (!specificPlan || !planSpan || !planType) {
    return <p>No plan found</p>;
  }

  const initialDeposit = specificPlan.payment.initial_deposit;

  const couponCode = watch('couponCode');

  const formData = {
    paymentFrequency: planSpan,
    planId: specificPlan.id,
    userId: user._id,
    providerId: `${providerId}`,
    couponCode,
  };

  const navigate = useNavigate();

  const makeFirstPaymentMutation = useMutation({
    mutationFn: makeFirstPayment,
    onSuccess: (data) => {
      console.log(data.response);
      // navigate('/');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const makeFullPaymentMutation = useMutation({
    mutationFn: makeFirstPayment,
    onSuccess: (data) => {
      console.log(data.response);
      // navigate('/');
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onMakePayment = () => {
    makeFirstPaymentMutation.mutate(formData);
  };

  const onMakeFullPayment = () => {
    makeFullPaymentMutation.mutate({
      ...formData,
      ...{ paymentFrequency: 'full' },
    });
  };

  const support = () => {
    window.location.href = 'https://wa.me/message/ZTDQYDCGVITIH1';
  };

  return (
    <div className="p-5">
      {makeFirstPaymentMutation.isError && (
        <div
          onClick={() => {
            support();
          }}
          className="bg-secondary mb-5 w-2/3 p-3 ml-auto rounded-lg"
        >
          <p className="font-semibold text-white">
            Something went wrong? Contact Support
          </p>
        </div>
      )}
      <div className="text-center pb-5">
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
      <p className="text-sm text-center mb-5">
        Yes, I am ready to pay the deposit amount now.
      </p>

      <div>
        <p className="text-sm mb-2">Got a coupon code?</p>
        <input
          className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mb-2 outline-green-700"
          {...register('couponCode', { required: true })}
          placeholder="Input coupon code"
        />
      </div>

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

      <CustomButton
        linkRoute=""
        linkTitle="Pay in full with Wallet Balance"
        buttonType="outlined"
        extraClassNames="my-5 w-full flex items-center justify-center"
        loading={makeFullPaymentMutation.isPending}
        onClick={() => {
          onMakeFullPayment();
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

      {/* <p className="text-sm text-center mt-10 mb-5">
        Not yet, I am not ready to pay the deposit amount now.
      </p> */}

      <p
        className="text-sm text-healthgoGreen font-semibold text-center"
        onClick={() => {
          navigate('/');
        }}
      >
        No, I’d Continue Later
      </p>
    </div>
  );
};

export default PaymentCheckout;

