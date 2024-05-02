import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import LogoGreen from '../assets/images/logo-green.png';
import useAuthStore from '../store/auth';
import Avatar from '../assets/images/avatar.png';
import moment from 'moment/moment';
import { create } from 'zustand';
import useWalletStore from '../store/wallet';

const Navbar = () => {
  const navigate = useNavigate();
  const storeLogout = useAuthStore((state) => state.setLogout);
  const storeWalletLogout = useWalletStore((state) => state.setWallet);

  const handleLogout = () => {
    navigate('/signin');
    storeLogout();
    storeWalletLogout();
  };

  const date = moment().format('dddd; MMMM Do, YYYY');
  const time = moment().format('h:mm a');

  const showSidebar = useSidebarStore((state) => state.showSidebar);
  const setShowSidebar = useSidebarStore((state) => state.setShowSidebar);

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="w-full bg-secondaryBG fixed flex justify-between top-0 z-10 px-7 py-4 lg:hidden">
        <div className="flex space-x-3 items-center">
          <img src={Logo} className="w-10 h-10" alt="Logo" />
          <div className="text-white">
            <p className="text-lg font-semibold leading-5">HealthGO</p>
            <p className="text-xs">...quality healthcare for all...</p>
          </div>
        </div>

        <div className="flex space-x-3">
          <button onClick={handleLogout}>Logout</button>
          <button onClick={handleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full px-10 fixed top-0 z-10 py-5 bg-primaryBG hidden lg:flex items-center justify-between border-b-2 border-primary">
        <div className="flex py-3">
          <div className="flex space-x-5 items-center">
            <img src={LogoGreen} className="w-10 h-10" alt="Logo" />
            <div className="text-healthgoBlack">
              <p className="text-xl font-bold leading-5">HealthGO</p>
            </div>
          </div>
        </div>

        <div className="border border-primary rounded-lg p-2 flex items-center">
          <p className="text-sm">{time}</p>

          <div className="border-l-2 border-primary ml-3 pl-3">
            <p className="text-sm">{date}</p>
          </div>
        </div>

        <Link to={'/profile'}>
          <div className="bg-secondary rounded-full flex py-2 pl-3 pr-6 space-x-3 items-center">
            <img src={Avatar} className="w-12 h-12 rounded-full" alt="" />
            <p className="text-white font-semibold">Profile Settings</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export const useSidebarStore = create((set) => ({
  showSidebar: false,
  setShowSidebar: (value) => set({ showSidebar: value }),
}));

export default Navbar;

