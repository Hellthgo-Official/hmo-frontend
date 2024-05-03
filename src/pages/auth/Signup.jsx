import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import eye from '../../assets/images/eyes-open.svg';
import eyeClosed from '../../assets/images/eyes-closed.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signupUserFn } from '../../api/auth';
import useAuthStore from '../../store/auth';

const Signup = () => {
  const navigate = useNavigate();

  const initialFormData = {
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [pswInputFocus, setPswInputFocus] = useState(false);
  const [confirmPswInputFocus, setConfirmPswInputFocus] = useState(false);

  const passwordIcon = showPassword ? eye : eyeClosed;
  const confirmPasswordIcon = showConfirmPassword ? eye : eyeClosed;

  const handlePswInputFocus = () => {
    setPswInputFocus(true);
  };

  const handleConfirmPswInputFocus = () => {
    setConfirmPswInputFocus(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const storeData = useAuthStore((state) => state.setRegisterData);

  const signupMutation = useMutation({
    mutationFn: signupUserFn,
    onSuccess: (data) => {
      storeData(data);
      setFormData(initialFormData);
      navigate('/verify-email');
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    const input = event.target.value.replace(/[^a-zA-Z0-9]/g, ''); // Allow only alphanumeric characters
    setUsername(input.slice(0, 12)); // Limit to maximum 12 characters
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mainData = {
      ...formData,
      username,
    };

    signupMutation.mutate(mainData);
  };

  return (
    <div className="bg-sectionBg">
      <div className="wrapper">
        <div className="my-[62px] flex flex-col md:flex-row w-full lg:w-[90%] justify-between items-center gap-[40px] md:gap-[101px] lg:gap-[201px]">
          <div className="w-[80%] md:w-[50%] text-center md:text-left">
            <h2 className="text-[28px] text-healthgoBlack font-bold leading-[30.8px] tracking-[-2%]">
              Create an Account
            </h2>
            <p className="font-light text-[1rem] leading-[20.8px] tracking-[-2%] text-black-200 mt-2">
              Create your HealthGO account to start enjoying affordable
              Healthcare.
            </p>
            <img
              src={accountVerificationImg}
              className="hidden md:block mt-[60px]"
              alt="Account verification with password"
            />
          </div>

          <div className="w-full md:w-[50%] shadow-authFormContainer p-[30px] rounded-[1.25rem] md:rounded-[0.75rem]">
            <form className="mt-[30px] flex flex-col gap-[20px]">
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
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="auth-input"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange('firstName', e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="auth-input"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange('lastName', e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  className="auth-input"
                  value={username}
                  onChange={handleUsernameChange}
                  maxLength={12} // Limit input to 12 characters
                  pattern="[a-zA-Z0-9]+" // Allow only alphanumeric characters
                  title="Username must be alphanumeric and maximum 12 characters"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="auth-input"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange('phoneNumber', e.target.value)
                  }
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div
                  className={`flex flex-row justify-between items-center ${
                    pswInputFocus ? 'border-[2px]' : 'border'
                  } ${
                    pswInputFocus ? 'border-green-300' : 'border-green-200'
                  }  bg-green-100 rounded-[8px] h-[3rem] w-full px-[0.5rem]`}
                >
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="auth-psw-input"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange('password', e.target.value)
                    }
                    onFocus={handlePswInputFocus}
                    onBlur={() => setPswInputFocus(false)}
                  />
                  <img
                    src={passwordIcon}
                    onClick={toggleShowPassword}
                    className="w-[25px] h-[24px] cursor-pointer"
                    alt="eye"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div
                  className={`flex flex-row justify-between items-center ${
                    confirmPswInputFocus ? 'border-[2px]' : 'border'
                  } ${
                    confirmPswInputFocus
                      ? 'border-green-300'
                      : 'border-green-200'
                  }  bg-green-100 rounded-[8px] h-[3rem] w-full px-[0.5rem]`}
                >
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    className="auth-psw-input"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange('confirmPassword', e.target.value)
                    }
                    onFocus={handleConfirmPswInputFocus}
                    onBlur={() => setPswInputFocus(false)}
                  />
                  <img
                    src={confirmPasswordIcon}
                    onClick={toggleShowConfirmPassword}
                    className="w-[25px] h-[24px] cursor-pointer"
                    alt="eye"
                  />
                </div>
              </div>

              {signupMutation.isError && (
                <p className="text-red-600 text-sm">
                  {signupMutation.error.message}
                </p>
              )}

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={signupMutation.isPending}
                  className="bg-secondary w-full font-barlow font-semibold text-[14px] leading-[21px] tracking-[2%} text-white px-[1rem] py-[0.5rem] rounded-[4px] flex justify-center items-center gap-[8px] h-[3rem]"
                >
                  {signupMutation.isPending ? (
                    <>Loading...</>
                  ) : (
                    <>
                      Create Account <img src={arrowRight} alt="arrow-right" />
                    </>
                  )}
                </button>
                <Link to="/signin">
                  <button className="bg-transparent border border-secondary w-full font-barlow font-semibold px-[1rem] py-[0.5rem] h-[48px] rounded-[4px]">
                    Log in to an existing account
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

