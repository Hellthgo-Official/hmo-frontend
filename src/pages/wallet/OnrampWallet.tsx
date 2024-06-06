import React, { useEffect, useState } from 'react';
import InputBox from '../../components/InputBox';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { useMutation } from '@tanstack/react-query';
import { onrampFn, transferFundsFn } from '../../api/wallet/index';
import useWalletStore from '../../store/wallet';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../store/auth';

type Inputs = {
  toAddress: string;
  amount: string;
};

type Props = {};

const OnrampWallet = (props: Props) => {
  const wallet = useWalletStore((state) => state.wallet);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues: { toAddress: wallet.name } });

  const user = useAuthStore((state) => state.user);
  const storePaymentData = useWalletStore((state) => state.setPaymentData);

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const onrampMutation = useMutation({
    mutationFn: onrampFn,
    onSuccess: (data) => {
      storePaymentData(data.response);
      navigate('/fund-wallet');
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setError('');

    setError('');
    if (Number(data.amount) < 1000) {
      setError('Minimum onramp amount is ₦1000');
    } else {
      const formData = {
        userId: user._id,
        amount: data.amount,
      };

      onrampMutation.mutate(formData);
    }
  };

  return (
    <div className="p-5">
      <p className="font-bold text-center my-2">Top up Funds</p>
      <p className="font-bold text-sm text-center">
        How much do you want to onramp?
      </p>

      <form className="pt-10 space-y-5">
        <div className="w-full flex flex-col">
          <p className="text-xs lg:text-lg font-light">
            Receiver's wallet address
          </p>
          <input
            disabled
            className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
            {...register('toAddress', { required: true })}
          />
        </div>
        {errors.toAddress && (
          <span className="text-sm text-red-500 my-2">
            Please input receiver's wallet address
          </span>
        )}

        <div className="w-full flex flex-col">
          <p className="text-xs lg:text-lg font-light">Amount (₦)</p>
          <input
            className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
            {...register('amount', {
              required: true,
            })}
          />
        </div>
        {errors.amount && (
          <span className="text-sm text-red-500 my-2">Please input amount</span>
        )}
        <CustomButton
          extraClassNames="mt-8"
          buttonFn="submit"
          linkTitle="Send"
          loading={onrampMutation.isPending}
          buttonType="full"
          onClick={handleSubmit(onSubmit)}
        />

        {error && <span className="text-sm text-red-500 my-2">{error}</span>}
      </form>
    </div>
  );
};

export default OnrampWallet;

