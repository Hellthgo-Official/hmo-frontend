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
      <div></div>
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
      <button
        onClick={() => {
          handleNavigate('/package-benefits');
        }}
        className={`${pathName === '/package-benefits' ? 'bg-secondaryBG text-white font-bold' : 'text-black-200 font-light'} w-full rounded-lg h-16 flex items-center px-5 space-x-3`}
      >
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
              className={`${pathName === '/package-benefits' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4179">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-xl group-hover:text-white group-hover:font-bold">
          Package Benefits
        </p>
      </button>

      <button
        onClick={() => {
          handleNavigate('/find-hospitals');
        }}
        className={`${pathName === '/find-hospitals' ? 'bg-secondaryBG text-white font-bold' : 'text-black-200 font-light'} w-full rounded-lg h-16 flex items-center px-5 space-x-3`}
      >
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
              className={`${pathName === '/find-hospitals' ? 'fill-white' : 'fill-[#ACB4B0]'}  group-hover:fill-white`}
            />
          </g>
          <defs>
            <clipPath id="clip0_4537_4195">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <p className="text-xl group-hover:text-white group-hover:font-bold">
          Find Hospitals
        </p>
      </button>
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

