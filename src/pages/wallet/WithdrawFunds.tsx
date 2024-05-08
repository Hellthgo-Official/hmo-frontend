import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Select from 'react-dropdown-select';
import { SubmitHandler, useForm } from 'react-hook-form';
import { getBanksFn, resolveBankFn } from '../../api/wallet';
import CustomButton from '../../components/CustomButton';
import useWalletStore from '../../store/wallet';

type Props = {};

type Inputs = {
  toAddress: string;
  amount: string;
  description: string;
  accountnumber: string;
};

interface BankType {
  bankCode: string;
  bankCode2: string;
  bankIdentifyCode: string;
  bankName: string;
  bankShortName: string;
}

const WithdrawFunds = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const accountNumber = watch('accountnumber');
  const balance = useWalletStore((state) => state.balance);
  const [bankList, setBankList] = useState<any>([]);

  const [error, setError] = useState('');

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setError('');
    if (Number(data.amount) > Number(balance)) {
      setError('Insufficient Balance');
    } else {
    }
  };

  const [values, setValues] = useState<BankType[]>([]);

  const sortBanksByName = (banks: any) => {
    const sortedBanks = [...banks].sort((a, b) => {
      return a.bankName.localeCompare(b.bankName);
    });
    return sortedBanks;
  };

  const getBanksMutation = useMutation({
    mutationFn: getBanksFn,
    onSuccess: (response) => {
      const sortedBanks = sortBanksByName(response.data);
      setBankList(sortedBanks);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const resolveBankMutation = useMutation({
    mutationFn: resolveBankFn,
    onSuccess: (response) => {},
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    getBanksMutation.mutate();
  }, []);

  useEffect(() => {
    if (values && accountNumber && accountNumber.length === 10) {
      resolveBankMutation.mutate({
        // bankCode: '090267', Error checks
        bankCode: values[0].bankIdentifyCode,
        accountNumber,
      });
    }
  }, [values, accountNumber]);

  return (
    <div className="p-5">
      <p className="font-bold text-center my-2">Withdraw Money to Local Bank</p>
      <p className="font-bold text-sm text-center">
        How much do you want to withdraw?
      </p>

      <form className="pt-10 space-y-5">
        <Select
          options={bankList}
          onChange={(values) => setValues(values)}
          values={values}
          className="w-full text-sm bg-blandGreen mt-2 outline-green-700"
          valueField="bankCode"
          labelField="bankName"
          searchBy="bankName"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #B8E5CA',
          }}
        />
        <div className="w-full flex flex-col">
          <p className="text-xs lg:text-lg font-light">Account Number</p>
          <input
            className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
            placeholder="Enter 10 digits Account Number"
            maxLength={10}
            {...register('accountnumber', {
              required: true,
            })}
          />
          {resolveBankMutation.isPending && (
            <p className="text-xs lg:text-lg text-green-600 font-light mt-2">
              Resolving bank details...
            </p>
          )}
          {resolveBankMutation.isSuccess && (
            <p className="lg:text-lg text-green-600 mt-2">
              {resolveBankMutation.data.accountName}
            </p>
          )}
          {resolveBankMutation.isError && (
            <p className="lg:text-lg text-red-600 mt-2">
              {resolveBankMutation.error.message}
            </p>
          )}
        </div>
        {errors.accountnumber && (
          <span className="text-sm text-red-500 my-2">
            Please input account number
          </span>
        )}
        <div className="w-full flex flex-col">
          <p className="text-xs lg:text-lg font-light">Amount to send (NGN)</p>
          <input
            className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
            placeholder="0.00"
            {...register('amount', {
              required: true,
            })}
          />
        </div>
        {errors.amount && (
          <span className="text-sm text-red-500 my-2">Please input amount</span>
        )}
        <div className="w-full flex flex-col">
          <p className="text-xs lg:text-lg font-light">Description</p>
          <input
            className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
            placeholder="Narration(e.g deposit for health)"
            {...register('description', {
              required: true,
            })}
          />
        </div>
        {errors.description && (
          <span className="text-sm text-red-500 my-2">
            Please input description
          </span>
        )}
        <CustomButton
          extraClassNames="mt-8"
          buttonFn="submit"
          linkTitle="Send"
          buttonType="full"
          onClick={handleSubmit(onSubmit)}
        />
        {error && <span className="text-sm text-red-500 my-2">{error}</span>}
      </form>
    </div>
  );
};

export default WithdrawFunds;
