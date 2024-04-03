import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import eye from '../../assets/images/eyes-open.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signinUserFn } from '../../api/auth';
import useAuthStore from '../../store/auth';

const Signin = () => {
  const navigate = useNavigate();
  const initialFormData = {
    login: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const [pswInputFocus, setPswInputFocus] = useState(false);

  const handlePswInputFocus = () => {
    setPswInputFocus(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const storeLogin = useAuthStore((state) => state.setLogin);

  const signinMutation = useMutation({
    mutationFn: signinUserFn,
    onSuccess: (data) => {
      console.log(data);
      setFormData(initialFormData);
      storeLogin(data);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    signinMutation.mutate(formData);
  };

  return (
    <div className="bg-sectionBg">
      <div className="wrapper">
        <div className="my-[62px] flex flex-col md:flex-row w-full lg:w-[90%] justify-between items-center gap-[40px] md:gap-[101px] lg:gap-[201px]">
          <div className="w-[80%] md:w-[50%] text-center md:text-left">
            <h2 className="text-[28px] text-healthgoBlack font-bold leading-[30.8px] tracking-[-2%]">
              Log in
            </h2>
            <p className="font-light text-[1rem] leading-[20.8px] tracking-[-2%] text-black-200 mt-2">
              Log in to your HealthGO account to start enjoying affordable
              Healthcare.
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
            >
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="auth-input"
                  value={formData.login}
                  onChange={(e) => handleInputChange('login', e.target.value)}
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
                    src={eye}
                    onClick={toggleShowPassword}
                    className="w-[25px] h-[24px]"
                    alt="eye"
                  />
                </div>
              </div>

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={signinMutation.isLoading}
                  className="bg-secondary w-full font-barlow font-semibold text-[14px] leading-[21px] tracking-[2%} text-white px-[1rem] py-[0.5rem] rounded-[4px] flex justify-center items-center gap-[8px] h-[3rem]"
                >
                  Log in <img src={arrowRight} alt="arrow-right" />
                </button>
                <Link to="/signup">
                  <button className="bg-transparent border border-secondary w-full font-barlow font-semibold px-[1rem] py-[0.5rem] h-[48px] rounded-[4px]">
                    Create An Account
                  </button>
                </Link>

                <Link to='/forgot-password'>
                  <div className="font-barlow font-semibold text-[12px] text-secondary text-center leading-[18px] tracking-[2%]">
                    Forgot password?
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
