import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import { Link } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query';

const ForgotPassword = () => {
  const initialFormData = {
    email: '',
    phoneNumber: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  // const forgotPasswordMutation = useMutation({
  //   mutationFn: forgo
  // })

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

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  className="bg-secondary w-full font-barlow font-semibold text-[14px] leading-[21px] tracking-[2%} text-white px-[1rem] py-[0.5rem] rounded-[4px] flex justify-center items-center gap-[8px] h-[3rem]"
                >
                  Reset Password
                </button>
                <Link to="/signin">
                  <button className="bg-transparent border border-secondary w-full font-barlow font-semibold px-[1rem] py-[0.5rem] h-[48px] rounded-[4px]">
                    Back
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

export default ForgotPassword;
