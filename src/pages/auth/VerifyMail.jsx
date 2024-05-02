import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import { useMutation } from '@tanstack/react-query';
import { verifyEmailFn } from '../../api/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuthStore from '../../store/auth/index';

const VerifyMail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [otp, setOtp] = useState('');

  const VerifyEmailMutation = useMutation({
    mutationFn: verifyEmailFn,
    onSuccess: () => {
      navigate('/signin', { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    VerifyEmailMutation.mutate(state.email, { otp });
  };

  return (
    <div className="bg-sectionBg">
      <div className="wrapper">
        <div className="my-[62px] flex flex-col md:flex-row w-full lg:w-[90%] justify-between items-center gap-[40px] md:gap-[101px] lg:gap-[201px]">
          <div className="w-[80%] md:w-[50%] text-center md:text-left">
            <h2 className="text-[28px] text-healthgoBlack font-bold leading-[30.8px] tracking-[-2%]">
              Verify Email
            </h2>
            <p className="font-light text-[1rem] leading-[20.8px] tracking-[-2%] text-black-200 mt-2">
              Enter the OTP sent to your email
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
                <label htmlFor="otp">OTP</label>
                <input
                  type="text"
                  id="otp"
                  className="auth-input"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>

              <div className="text-secondary text-right mt-4 cursor-pointer">
                <p>Resend OTP</p>
              </div>

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  disabled={otp === '' || VerifyEmailMutation.isLoading}
                  className="primary-btn"
                >
                  Verify Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;

