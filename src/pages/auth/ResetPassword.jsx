import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { resetPasswordFn } from '../../api/auth';

const ResetPassword = () => {
  const navigate = useNavigate();

  const initialFormData = {
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const ResetPasswordMutation = useMutation({
    mutationFn: resetPasswordFn,
    onSuccess: () => {
      setFormData(initialFormData);
      navigate('/signin', { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    ResetPasswordMutation.mutate(formData);
  };

  return (
    <div className="bg-sectionBg">
      <div className="wrapper">
        <div className="my-[62px] flex flex-col md:flex-row w-full lg:w-[90%] justify-between items-center gap-[40px] md:gap-[101px] lg:gap-[201px]">
          <div className="w-[80%] md:w-[50%] text-center md:text-left">
            <h2 className="text-[28px] text-healthgoBlack font-bold leading-[30.8px] tracking-[-2%]">
              Reset Password
            </h2>
            <p className="font-light text-[1rem] leading-[20.8px] tracking-[-2%] text-black-200 mt-2">
              You can now reset your password!
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="auth-input"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">New Password</label>
                <input
                  type="password"
                  id="password"
                  className="auth-input"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                />
              </div>

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  className="primary-btn"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
