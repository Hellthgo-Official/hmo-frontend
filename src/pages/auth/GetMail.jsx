import { useState } from 'react';
import accountVerificationImg from '../../assets/images/Account verification with password and 3d padlock.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { recoverPasswordByMailFn } from '../../api/auth';

const GetMail = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [type, setType] = useState(null);

  const GetMailMutation = useMutation({
    mutationFn: recoverPasswordByMailFn,
    onSuccess: () => {
      // console.log(data);
      setType('success');
      setMessage('OTP sent successfully.')
      navigate('/verify-otp', { state: { email }, replace: true });
      setEmail('');
    },
    onError: (error) => {

      // console.log(error);
      setType('error');
      setMessage(error)
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setError('Invalid email address');
    } else {
      GetMailMutation.mutate(email);
    }
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
              Request for an OTP to reset the password will be sent to your mail
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
              <div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    // type="email"
                    id="email"
                    className={`auth-input`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {error && <p className="text-red-500 text-[14px]">{error}</p>}
              </div>

              <div className="mt-[30px] flex flex-col gap-[20px]">
                <button
                  type="submit"
                  disabled={email === '' || GetMailMutation.isLoading}
                  className="primary-btn"
                >
                  Get OTP
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

export default GetMail;
