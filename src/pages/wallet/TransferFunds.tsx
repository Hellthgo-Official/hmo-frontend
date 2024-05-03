import React, { useEffect, useState } from 'react';
import InputBox from '../../components/InputBox';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import { useMutation } from '@tanstack/react-query';
import { transferFundsFn } from '../../api/wallet/index';
import useWalletStore from '../../store/wallet';
import { useNavigate } from 'react-router-dom';

type Inputs = {
  toAddress: string;
  amount: string;
};

type Props = {};

const TransferFunds = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const wallet = useWalletStore((state) => state.wallet);
  const balance = useWalletStore((state) => state.balance);

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const transferFundMutation = useMutation({
    mutationFn: transferFundsFn,
    onSuccess: (response) => {
      const result = response.data.result;

      if (result === true) {
        alert('Transaction successful');
        navigate('/wallet');
      }
      if (result === false) {
        setError(response.data.error);
      }
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setError('');
    if (Number(data.amount) > Number(balance)) {
      setError('Insuffiecient Balance');
    } else {
      const formData = {
        ...data,
        ...{
          address: wallet.walletAddress,
          userId: wallet.createdBy,
        },
      };
      transferFundMutation.mutate(formData);
    }
  };

  return (
    <div className="p-5">
      <p className="font-bold text-center my-2">Transfer Funds</p>
      <p className="font-bold text-sm text-center">
        How much do you want to send?
      </p>

      <form className="pt-10 space-y-5">
        <div className="w-full flex flex-col">
          <p className="text-xs lg:text-lg font-light">
            Receiver's wallet address
          </p>
          <input
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
          loading={transferFundMutation.isPending}
          buttonType="full"
          onClick={handleSubmit(onSubmit)}
        />

        {error && <span className="text-sm text-red-500 my-2">{error}</span>}
      </form>
    </div>
  );
};

export default TransferFunds;

