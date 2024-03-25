import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import google from '../../assets/images/Google.svg';
import ios from '../../assets/images/ios.svg';
import arrowRight from '../../assets/images/arrow-right.svg';
import eye from '../../assets/images/eyes-open.svg';
import { Link } from 'react-router-dom';

const Signup = () => {
  const initialFormData = {
    email: '',
    fullName: '',
    phoneNumber: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
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
            <div className="hidden md:flex md:flex-col lg:flex-row justify-between gap-[12px]">
              <a className="o-auth-btn py-[11px]">
                Continue with <img src={google} alt="Google" />
              </a>
              <a className="o-auth-btn py-[8px]">
                Continue with <img src={ios} alt="Ios" />
              </a>
            </div>
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
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  className="auth-input"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange('fullName', e.target.value)
                  }
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
                    pswInputFocus ? 'border-black-100' : 'border-blue-200'
                  }  bg-blue-100 rounded-[8px] h-[3rem] w-full px-[0.5rem]`}
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
                  className="bg-secondary w-full font-barlow font-semibold text-[14px] leading-[21px] tracking-[2%} text-white px-[1rem] py-[0.5rem] rounded-[4px] flex justify-center items-center gap-[8px] h-[3rem]"
                >
                  Create Account <img src={arrowRight} alt="arrow-right" />
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
