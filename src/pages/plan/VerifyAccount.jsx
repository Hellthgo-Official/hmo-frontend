import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { createWalletFn, verifyBvnFn, verifyNinFn } from '../../api/wallet';
import CustomButton from '../../components/CustomButton';
import InputBox from '../../components/InputBox';
import useAuthStore from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import { updateUserRecordFn } from '../../api/auth';

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
  const [errorNinMsg, setErrorNinMsg] = useState('');
  const [errorUserMsg, setErrorUserMsg] = useState('');
  const [successBvnMsg, setSuccessBvnMsg] = useState('');
  const [successNinMsg, setSuccessNinMsg] = useState('');
  const [successUserMsg, setSuccessUserMsg] = useState('');

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

  const bvnMutation = useMutation({
    mutationFn: verifyBvnFn,
    onSuccess: (data) => {
      setSuccessBvnMsg(data.message);
      storeLogin(data.user);
    },
    onError: (error) => {
      setErrorBvnMsg(error.message);
    },
  });

  const ninMutation = useMutation({
    mutationFn: verifyNinFn,
    onSuccess: (data) => {
      setSuccessNinMsg(data.message);
      storeLogin(data.user);
    },
    onError: (error) => {
      setErrorNinMsg(error.message);
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

    !user.ninVerified &&
      ninMutation.mutate({
        userId: user._id,
        firstname: formData.firstname,
        lastname: formData.lastname,
        nin: formData.nin,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateUserRecordMutation.mutate({
      streetAddress: formData.streetAddress,
      phone: formData.phone,
      state: formData.state,
      zipCode: formData.zipCode,
      city: formData.city,
      country: formData.country,
      userId: user._id,
    });
  };

  const navigate = useNavigate();

  const createWalletMutation = useMutation({
    mutationFn: createWalletFn,
    onSuccess: (data) => {
      storeWallet(data.data);
      navigate('/');
    },
    onError: (error) => {
      console.log(error.message);
      setError(error.message);
    },
  });

  const finalizeVerification = () => {
    createWalletMutation.mutate({ userId: user._id });
  };

  useEffect(() => {
    ninMutation.isSuccess && bvnMutation.isSuccess && finalizeVerification();
  }, [ninMutation.status, bvnMutation.status]);

  useEffect(() => {
    user.ninVerified && user.bvnVerified && navigate('/');
  }, [user]);

  useEffect(() => {
    createWalletMutation.isSuccess && navigate('/');
  }, [createWalletMutation.status]);

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
        <InputBox
          title={'State'}
          onChange={(e) => handleInputChange('state', e.target.value)}
        />
        <InputBox
          title={'Country'}
          onChange={(e) => handleInputChange('country', e.target.value)}
        />
        <InputBox
          title={'Zip Code'}
          onChange={(e) => handleInputChange('zipCode', e.target.value)}
        />
        <InputBox
          maxLength={11}
          title={'NIN'}
          onChange={(e) => handleInputChange('nin', e.target.value)}
          value={formData.nin}
        />
        {user.ninVerified && (
          <p className="text-sm text-green-600">Nin Verified</p>
        )}
        {ninMutation.isSuccess && (
          <p className="text-sm text-green-600">{successNinMsg}</p>
        )}
        {ninMutation.isError && (
          <p className="text-sm text-red-600">{errorNinMsg}</p>
        )}
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
        {createWalletMutation.isPending && (
          <p className="text-sm text-green-600">Creating Wallet...</p>
        )}
        {bvnMutation.isError && (
          <p className="text-sm text-red-600">{errorBvnMsg}</p>
        )}

        {updateUserRecordMutation.isSuccess && (
          <p className="text-sm text-green-600">{successUserMsg}</p>
        )}
        <CustomButton
          buttonType="full"
          linkTitle="Next"
          buttonFn="submit"
          onClick={handleSubmit}
          // loading={bvnMutation.isPending}
          loading={
            updateUserRecordMutation.isPending ||
            bvnMutation.isPending ||
            ninMutation.isPending
          }
          disabled={
            updateUserRecordMutation.isPending ||
            bvnMutation.isPending ||
            ninMutation.isPending
          }
        />

        <p className="text-sm text-healthgoGreen font-semibold text-center">
          Save and continue later
        </p>
      </form>
    </div>
  );
};

export default VerifyAccount;

