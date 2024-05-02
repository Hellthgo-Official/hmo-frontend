type Props = {};
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import useWalletStore from '../../store/wallet';
import useAuthStore from '../../store/auth';
import { confirmPaymentFn } from '../../api/plan';
import { useMutation } from '@tanstack/react-query';
import CustomButton from '../../components/CustomButton';

const ProcessingWallet = (props: Props) => {
  const paymentData = useWalletStore((state) => state.paymentData);
  const user = useAuthStore((state) => state.user);
  const [error, setError] = useState('');

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span></span>;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  const confirmPaymentMutation = useMutation({
    mutationFn: confirmPaymentFn,
    onSuccess: (response) => {
      console.log(response);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const confirmPayment = () => {
    setError('');
    confirmPaymentMutation.mutate({ txId: paymentData.accountnumber });
  };

  return (
    <div className="p-3">
      <p className="font-bold text-center my-3">Processing Funds</p>
      <p className="font-semibold text-xs text-center my-3">
        Please wait while we confirm your payment
      </p>
      <p className="font-light text-center my-3">
        <Countdown
          onComplete={() => {
            confirmPayment();
          }}
          date={Date.now() + 130000}
          //   date={Date.now() + 5000}
          renderer={renderer}
        />
      </p>

      {confirmPaymentMutation.isPending && (
        <span className="text-sm text-green-500 my-2">Loading...</span>
      )}
      {error && <span className="text-sm text-red-500 my-2">{error}</span>}

      {confirmPaymentMutation.isSuccess && (
        <CustomButton
          linkTitle="Proceed"
          linkRoute="/wallet"
          buttonType="full"
        />
      )}
    </div>
  );
};

export default ProcessingWallet;
