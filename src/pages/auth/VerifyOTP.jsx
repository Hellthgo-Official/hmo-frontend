import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { confirmPasswordTokenFn } from '../../api/auth';

const VerifyOTP = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // console.log(state.email);

  const initialFormData = {
    email: state.email,
    token: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const VerifyOTPMutation = useMutation({
    mutationFn: confirmPasswordTokenFn,
    onSuccess: () => {
      // console.log(data);
      navigate('/reset-password', { replace: true });
      setFormData(initialFormData);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    VerifyOTPMutation.mutate(formData);
  };

  return (
    <div className="bg-sectionBg">
      <div className="wrapper">
        <div className="my-[62px] flex flex-col md:flex-row w-full lg:w-[90%] justify-between items-center gap-[40px] md:gap-[101px] lg:gap-[201px]">
          <div className="w-[80%] md:w-[50%] text-center md:text-left">
            <h2 className="text-[28px] text-healthgoBlack font-bold leading-[30.8px] tracking-[-2%]">
              Forgot Password
            </h2>
            <p className="font-light text-[1rem] leading-[20.8px] tracking-[-2%] text-black-200 mt-2">
              A link to reset the password will be sent to your mail
            </p>
            <img
              src={accountVerificationImg}
              className="hidden md:block mt-[60px]"
              alt="Account verification with password"
            />
          </div>

          <div className="w-full md:w-[50%] shadow-authFormContainer p-[30px] rounded-[1.25rem] md:rounded-[0.75rem]">
            <form
              className="mt-[30px] flex flex-col gap-[20px]"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="token">Token</label>
                <input
                  type="text"
                  id="token"
                  className="auth-input"
                  value={formData.token}
                  onChange={(e) => handleInputChange('token', e.target.value)}
                />
              </div>

              <div className="text-secondary text-right mt-4 cursor-pointer">
                <p>Resend OTP</p>
              </div>

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  disabled={
                    formData.token === '' || VerifyOTPMutation.isLoading
                  }
                  className="primary-btn"
                >
                  Verify OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
