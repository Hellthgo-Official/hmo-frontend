import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserRecordFn } from '../../api/auth';
import { createWalletFn, verifyBvnFn } from '../../api/wallet';
import CustomButton from '../../components/CustomButton';
import InputBox from '../../components/InputBox';
import useAuthStore from '../../store/auth';
import NaijaStates from 'naija-state-local-government';
import Select from 'react-dropdown-select';

const VerifyAccount = () => {
  // const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);

  const initialFormData = {
    firstname: user.firstName,
    lastname: user.lastName,
    email: user.email,
    number: user.number,
    nin: '',
    bvn: '',
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    phone: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorBvnMsg, setErrorBvnMsg] = useState('');
  const [errorUserMsg, setErrorUserMsg] = useState('');
  const [successBvnMsg, setSuccessBvnMsg] = useState('');
  const [successUserMsg, setSuccessUserMsg] = useState('');
  const stateList = NaijaStates.states();

  const stateOptions = stateList.map((item) => {
    return { value: item, label: item };
  });

  const [values, setValues] = useState([]);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const storeLogin = useAuthStore((state) => state.setLogin);

  const updateUserRecordMutation = useMutation({
    mutationFn: updateUserRecordFn,
    onSuccess: (data) => {
      setSuccessUserMsg('Successfully updated KYC');
      storeLogin(data.user);
      verification();
    },
    onError: (error) => {
      setErrorUserMsg(error.message);
    },
  });

  const createWalletMutation = useMutation({
    mutationFn: createWalletFn,
    onSuccess: (data) => {},
    onError: (error) => {
      console.log(error.message);
    },
  });

  const userData = {
    userId: user._id,
  };

  const bvnMutation = useMutation({
    mutationFn: verifyBvnFn,
    onSuccess: (data) => {
      setSuccessBvnMsg(data.message);
      createWalletMutation.mutate(userData);
    },
    onError: (error) => {
      setErrorBvnMsg(error.message);
    },
  });

  const verification = () => {
    !user.bvnVerified &&
      bvnMutation.mutate({
        userId: user._id,
        firstname: formData.firstname,
        lastname: formData.lastname,
        bvn: formData.bvn,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserRecordMutation.mutate({
      streetAddress: formData.streetAddress,
      phone: formData.phone,
      state: values[0].value,
      zipCode: formData.zipCode,
      city: formData.city,
      country: formData.country,
      userId: user._id,
    });
  };

  useEffect(() => {
    createWalletMutation.isSuccess && storeLogin(bvnMutation.data.user);
  }, [createWalletMutation.status]);

  const navigate = useNavigate();

  useEffect(() => {
    user.bvnVerified && navigate('/');
  }, [user]);

  return (
    <div className="flex flex-col p-5">
      <div className="text-center lg:space-y-3">
        <p className="font-semibold lg:text-lg">Account Verification</p>
        <p className="text-xs lg:text-lg">Personal Details</p>
        <p className="text-xs lg:text-lg font-light">
          Kindly complete the following details to verify your account
        </p>
      </div>

      <form className="grid grid-cols-1 gap-5 py-5">
        <InputBox
          title={'First name'}
          onChange={(e) => handleInputChange('firstname', e.target.value)}
        />
        <InputBox
          title={'Last name'}
          onChange={(e) => handleInputChange('lastname', e.target.value)}
        />
        <InputBox
          disabled
          title={'Email address'}
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <InputBox
          title={'Phone number'}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        <InputBox
          title={'Street Address'}
          onChange={(e) => handleInputChange('streetAddress', e.target.value)}
        />
        <InputBox
          title={'City'}
          onChange={(e) => handleInputChange('city', e.target.value)}
        />
        <p className="text-xs lg:text-lg font-light">State</p>
        <Select
          options={stateOptions}
          onChange={(values) => {
            setValues(values);
          }}
          values={values}
          className="w-full text-sm bg-blandGreen outline-green-700"
          searchBy="value"
          style={{
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #B8E5CA',
          }}
        />
        <InputBox
          title={'Country'}
          onChange={(e) => handleInputChange('country', e.target.value)}
          value="Nigeria"
          disabled
        />
        <InputBox
          title={'Zip Code'}
          onChange={(e) => handleInputChange('zipCode', e.target.value)}
        />

        <InputBox
          maxLength={11}
          title={'BVN'}
          onChange={(e) => handleInputChange('bvn', e.target.value)}
          value={formData.bvn}
        />
        {user.bvnVerified && (
          <p className="text-sm text-green-600">Bvn Verified</p>
        )}

        {bvnMutation.isSuccess && (
          <p className="text-sm text-green-600">{successBvnMsg}</p>
        )}

        {bvnMutation.isError && (
          <p className="text-sm text-red-600">{errorBvnMsg}</p>
        )}

        {updateUserRecordMutation.isSuccess && (
          <p className="text-sm text-green-600">{successUserMsg}</p>
        )}

        {createWalletMutation.isPending && (
          <p className="text-sm text-green-600">Creating Wallet...</p>
        )}
        <CustomButton
          buttonType="full"
          linkTitle="Next"
          buttonFn="submit"
          onClick={handleSubmit}
          loading={updateUserRecordMutation.isPending || bvnMutation.isPending}
          disabled={updateUserRecordMutation.isPending || bvnMutation.isPending}
        />

        <p className="text-sm text-healthgoGreen font-semibold text-center">
          Save and continue later
        </p>
      </form>
    </div>
  );
};

export default VerifyAccount;

