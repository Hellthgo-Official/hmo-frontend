import { Link } from 'react-router-dom';

const PlanSelection = () => {
  return (
    <div className="px-3 py-5">
      <div className="shadow-lg px-3 py-5 rounded-lg">
        <p className="text-healthgoBlack mb-3">Hi Jerome.</p>
        <div className="border border-primary rounded-lg p-3">
          <p className="text-healthgoGreen text-sm mb-5 font-semibold">
            What to do next
          </p>
          <p className="text-xs font-semibold mb-1">Get Verified</p>
          <p className="text-xs">
            You need to get your HealthGO account verified to be able to access
            the various benefits of your HealthGO account.
          </p>
        </div>
        <Link to={'/'}>
          <button className="px-5 py-2 my-5 gap-x-2 rounded-md flex bg-secondaryBG text-white">
            Verify Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>

        <div className="py-8 text-center">
          <p className="text-sm text-healthgoBlack font-semibold">
            {' '}
            HealthGO Plan:
          </p>
          <p className="font-light">Unavailable</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;

