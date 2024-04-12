import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className="w-full bg-secondaryBG fixed top-0 z-10 px-7 py-4 flex">
      <div className="flex space-x-3 items-center">
        <img src={Logo} className="w-10 h-10" alt="Logo" />
        <div className="text-white">
          <p className="text-lg font-semibold leading-5">HealthGO</p>
          <p className="text-xs">...quality healthcare for all...</p>
        </div>

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
      </div>
    </div>
  );
};

export default Navbar;

