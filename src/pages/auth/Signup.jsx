import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-dropdown-select';
import { Link, useNavigate } from 'react-router-dom';
import { signupUserFn } from '../../api/auth';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import arrowBack from '../../assets/images/arrow-back.png';
import arrowRight from '../../assets/images/arrow-right.svg';
import eyeClosed from '../../assets/images/eyes-closed.svg';
import eye from '../../assets/images/eyes-open.svg';
import useAuthStore from '../../store/auth';
import { getHospitalsFn } from '../../api/wallet';

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
    dob: '',
    otherName: '',
  };

  const genders = [
    {
      key: '1',
      value: 'Male',
    },
    {
      key: '2',
      value: 'Female',
    },
  ];

  const [firstForm, setFirstForm] = useState(true);
  const [secondForm, setSecondForm] = useState(false);

  const [formData, setFormData] = useState(initialFormData);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [values, setValues] = useState([]);

  const [pswInputFocus, setPswInputFocus] = useState(false);
  const [confirmPswInputFocus, setConfirmPswInputFocus] = useState(false);

  const passwordIcon = showPassword ? eye : eyeClosed;
  const confirmPasswordIcon = showConfirmPassword ? eye : eyeClosed;

  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

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

  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    const input = event.target.value.replace(/[^a-zA-Z0-9]/g, ''); // Allow only alphanumeric characters
    setUsername(input.slice(0, 12)); // Limit to maximum 12 characters
  };

  const firstFormCheck =
    formData.email && formData.firstName && formData.lastName && username;

  const showSecondForm = (e) => {
    e.preventDefault();
    setFirstForm(false);
    setSecondForm(true);
  };

  const showFirstForm = (e) => {
    e.preventDefault();
    setFirstForm(true);
    setSecondForm(false);
  };

  const storeData = useAuthStore((state) => state.setRegisterData);

  const getHospitalsMutation = useMutation({
    mutationFn: getHospitalsFn,
    onSuccess: (result) => {
      console.log(result.response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    getHospitalsMutation.mutate();
  }, []);

  const signupMutation = useMutation({
    mutationFn: signupUserFn,
    onSuccess: (data) => {
      setType('success');
      setMessage('Signup successful');
      storeData(data);
      setFormData(initialFormData);
      navigate('/verify-email');
    },
    onError: (error) => {
      // console.log(error);
      setType('error');
      setMessage(error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mainData = {
      ...formData,
      username,
    };

    signupMutation.mutate(mainData);
  };

  // console.log(signupMutation);phoneNumber, dob --> yyyy-mm-dd, otherName, providerId, streetAddress, gender --> 1 or 2 ( 1 -male) or (2 - female),

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
              {message && (
                <div
                  className={`px-2 py-[10px] text-[14px] rounded-[8px] ${
                    type === 'error'
                      ? 'bg-red-200 text-red-600'
                      : 'bg-green-200 text-green-600'
                  }`}
                >
                  {message}
                </div>
              )}

              {secondForm && (
                <div
                  className="flex items-center gap-[5px] mb-[20px] cursor-pointer"
                  onClick={showFirstForm}
                >
                  <img
                    src={arrowBack}
                    className="w-[20px] h-[20px]"
                    alt="arrow-back"
                  />
                  <p>Back</p>
                </div>
              )}

              <div className={`${firstForm ? 'block' : 'hidden'}`}>
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
                  <label htmlFor="otherName">Middle Name</label>
                  <input
                    type="text"
                    id="otherName"
                    className="auth-input"
                    value={formData.otherName}
                    onChange={(e) =>
                      handleInputChange('otherName', e.target.value)
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

                {/* Gender */}
                <div className="form-group">
                  <label htmlFor="lastName">Gender</label>
                  <Select
                    options={genders}
                    onChange={(values) => setValues(values)}
                    values={values}
                    className="w-full text-sm bg-blandGreen outline-green-700"
                    valueField="key"
                    labelField="value"
                    style={{
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #B8E5CA',
                    }}
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

                <div className="mt-[30px] flex flex-col gap-[20px]">
                  <button
                    type="submit"
                    onClick={showSecondForm}
                    disabled={!firstFormCheck}
                    className="bg-secondary w-full font-barlow font-semibold text-[14px] leading-[21px] tracking-[2%} text-white px-[1rem] py-[0.5rem] rounded-[4px] flex justify-center items-center gap-[8px] h-[3rem]"
                  >
                    Proceed
                  </button>
                </div>
              </div>

              <div className={`${secondForm ? 'block' : 'hidden'}`}>
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
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    className="auth-input"
                    value={formData.dob}
                    onChange={(e) => handleInputChange('dob', e.target.value)}
                    aria-label="Date"
                    name="dob"
                    id="dob"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="streetAddress">Address</label>
                  <input
                    type="tel"
                    id="streetAddress"
                    className="auth-input"
                    value={formData.streetAddress}
                    onChange={(e) =>
                      handleInputChange('streetAddress', e.target.value)
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
                        Create Account{' '}
                        <img src={arrowRight} alt="arrow-right" />
                      </>
                    )}
                  </button>
                  <Link to="/signin">
                    <button className="bg-transparent border border-secondary w-full font-barlow font-semibold px-[1rem] py-[0.5rem] h-[48px] rounded-[4px]">
                      Log in to an existing account
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

