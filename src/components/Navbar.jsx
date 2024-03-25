import Logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <div className='bg-secondaryBG w-full'>
      <div className="bg-secondaryBG container px-4 py-5 mx-auto flex justify-between items-center">
        <div className="flex space-x-3">
          <img src={Logo} className="w-10 h-10" alt="Logo" />
          <div className="text-white">
            <p className="text-lg font-semibold">HealthGO</p>
            <p className="text-xs">...quality healthcare for all...</p>
          </div>
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
