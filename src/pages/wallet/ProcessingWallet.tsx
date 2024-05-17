type Props = {};
import React, { useState } from 'react';
import Countdown from 'react-countdown';
import useWalletStore from '../../store/wallet';
import useAuthStore from '../../store/auth';
import { useMutation } from '@tanstack/react-query';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import CustomButton from '../../components/CustomButton';
import { confirmPaymentFn } from '../../api/wallet';

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

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="p-3">
      <p className="font-bold text-center my-3">Processing Funds</p>
      <p className="font-semibold text-xs text-center my-3">
        Please wait while we confirm your payment
      </p>

      <div className="w-full flex items-center justify-center my-5">
        <CountdownCircleTimer
          isPlaying
          duration={150}
          colors={['#07A53D', '#1EAE4F', '#F5FFF8']}
          colorsTime={[150, 75, 0]}
          size={100}
          onComplete={() => {
            confirmPayment();
          }}
        >
          {({ remainingTime }) => children({ remainingTime })}
        </CountdownCircleTimer>
      </div>

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

