import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSidebarStore } from './Navbar';
import useAuthStore from '../store/auth';
import useWalletStore from '../store/wallet';

const Sidebar = () => {
  const location = useLocation();

  const [pathName, setPathName] = useState('/');

  const tabLinks = ['/', '/wallet'];

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  const showSidebar = useSidebarStore((state) => state.showSidebar);
  const setShowSidebar = useSidebarStore((state) => state.setShowSidebar);

  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(page);
    setShowSidebar(!showSidebar);
  };

  const storeLogout = useAuthStore((state) => state.setLogout);
  const storeWalletLogout = useWalletStore((state) => state.setWallet);

  const handleLogout = () => {
    navigate('/signin');
    storeLogout();
    storeWalletLogout();
  };

  return (
    <div
      className={`bg-primaryBG z-50 lg:z-0 lg:bg-transparent ${showSidebar ? 'fixed' : 'hidden'} lg:fixed lg:flex flex-col space-y-5 px-5 py-10 w-4/5 lg:w-80 h-screen shadow-[0px_2px_18px_3px_#e2e8f0]`}
    >
      <div>

      </div>
      <button
        onClick={() => {
          handleNavigate('/');
        }}
        className={`${pathName === '/' ? 'bg-secondaryBG text-white font-bold' : 'text-black-200 font-light'} w-full rounded-lg h-16 flex items-center px-5 space-x-3`}
      >
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${pathName === '/' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            d="M10 2.69L15 7.19V15H13V9H7V15H5V7.19L10 2.69ZM10 0L0 9H3V17H9V11H11V17H17V9H20L10 0Z"
            fill="white"
          />
        </svg>

        <p className="text-xl">Home</p>
      </button>
      <button
        onClick={() => {
          handleNavigate('/wallet');
        }}
        className={`${pathName === '/wallet' ? 'bg-secondaryBG text-white font-bold' : 'text-black-200 font-light'} w-full rounded-lg h-16 flex items-center px-5 space-x-3`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4537_4167)">
            <path
              d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z"
              className={`${pathName === '/wallet' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
              fill="#ACB4B0"
            />
            <path
              d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z"
              className={`${pathName === '/wallet' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
              fill="#ACB4B0"
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4167">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-xl group-hover:text-white group-hover:font-bold">
          Wallet
        </p>
      </button>
      <div className="w-full rounded-lg group hover:bg-secondaryBG h-16 md:h-14 xl:h-16 flex items-center px-5 space-x-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4537_4173)">
            <path
              d="M19 14V6C19 4.9 18.1 4 17 4H3C1.9 4 1 4.9 1 6V14C1 15.1 1.9 16 3 16H17C18.1 16 19 15.1 19 14ZM17 14H3V6H17V14ZM10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7ZM23 7V18C23 19.1 22.1 20 21 20H4C4 19 4 19.1 4 18H21V7C22.1 7 22 7 23 7Z"
              fill="#ACB4B0"
              className={`${pathName === '/pay-dues' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4173">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-black-200 text-xl font-light group-hover:text-white group-hover:font-bold">
          Pay next due amount
        </p>
      </div>
      <div className="w-full rounded-lg group hover:bg-secondaryBG h-16 flex items-center px-5 space-x-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4537_4179)">
            <path
              d="M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM3 3V21H21V3H3ZM19 19H5V5H19V19Z"
              fill="#ACB4B0"
              className={`${pathName === '/packages' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4179">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-black-200 text-xl font-light group-hover:text-white group-hover:font-bold">
          Package Benefits
        </p>
      </div>
      <div className="w-full rounded-lg group hover:bg-secondaryBG h-16 flex items-center px-5 space-x-3">
        <svg
          width="24"
          height="12"
          viewBox="0 0 24 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 7C5.1 7 6 6.1 6 5C6 3.9 5.1 3 4 3C2.9 3 2 3.9 2 5C2 6.1 2.9 7 4 7ZM5.13 8.1C4.76 8.04 4.39 8 4 8C3.01 8 2.07 8.21 1.22 8.58C0.48 8.9 0 9.62 0 10.43V12H4.5V10.39C4.5 9.56 4.73 8.78 5.13 8.1ZM20 7C21.1 7 22 6.1 22 5C22 3.9 21.1 3 20 3C18.9 3 18 3.9 18 5C18 6.1 18.9 7 20 7ZM24 10.43C24 9.62 23.52 8.9 22.78 8.58C21.93 8.21 20.99 8 20 8C19.61 8 19.24 8.04 18.87 8.1C19.27 8.78 19.5 9.56 19.5 10.39V12H24V10.43ZM16.24 7.65C15.07 7.13 13.63 6.75 12 6.75C10.37 6.75 8.93 7.14 7.76 7.65C6.68 8.13 6 9.21 6 10.39V12H18V10.39C18 9.21 17.32 8.13 16.24 7.65ZM8.07 10C8.16 9.77 8.2 9.61 8.98 9.31C9.95 8.93 10.97 8.75 12 8.75C13.03 8.75 14.05 8.93 15.02 9.31C15.79 9.61 15.83 9.77 15.93 10H8.07ZM12 2C12.55 2 13 2.45 13 3C13 3.55 12.55 4 12 4C11.45 4 11 3.55 11 3C11 2.45 11.45 2 12 2ZM12 0C10.34 0 9 1.34 9 3C9 4.66 10.34 6 12 6C13.66 6 15 4.66 15 3C15 1.34 13.66 0 12 0Z"
            fill="#ACB4B0"
            className={`${pathName === '/referrals' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
          />
        </svg>

        <p className="text-black-200 text-xl font-light group-hover:text-white group-hover:font-bold">
          Referrals
        </p>
      </div>
      <div className="w-full rounded-lg group hover:bg-secondaryBG h-16 flex items-center px-5 space-x-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4537_4190)">
            <path
              d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM19 11C19 15.52 16.02 19.69 12 20.93C7.98 19.69 5 15.52 5 11V6.3L12 3.19L19 6.3V11ZM7.41 11.59L6 13L10 17L18 9L16.59 7.58L10 14.17L7.41 11.59Z"
              fill="#ACB4B0"
              className={`${pathName === '/verify-account' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4190">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-black-200 text-xl font-light group-hover:text-white group-hover:font-bold">
          Account Verification
        </p>
      </div>
      <div className="w-full rounded-lg group hover:bg-secondaryBG h-16 flex items-center px-5 space-x-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4537_4195)">
            <path
              d="M19 3H5C3.9 3 3.01 3.9 3.01 5L3 19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM10.5 17H13.5V13.5H17V10.5H13.5V7H10.5V10.5H7V13.5H10.5V17Z"
              fill="#ACB4B0"
              className={`${pathName === '/connected-hospitals' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4195">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-black-200 text-xl font-light group-hover:text-white group-hover:font-bold">
          Connected Hospitals
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="w-full rounded-lg h-16 flex items-center px-5 space-x-3"
      >
        <p className="text-black-200 text-xl font-light group-hover:text-white group-hover:font-bold">
          Log out
        </p>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4630_12940)">
            <path
              d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
              fill="#323232"
            />
          </g>
          <defs>
            <clipPath id="clip0_4630_12940">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;

