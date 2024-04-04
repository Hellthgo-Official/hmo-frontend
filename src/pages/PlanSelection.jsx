import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

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

        <CustomButton
          linkTitle={'Verify Account'}
          linkRoute={'/verify-account'}
        />

        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Started since:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Enrollee ID:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Deposit Amount:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Instalment amount:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Amount paid:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Balance left to pay:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Mode of payment:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
          <div className="border rounded-lg p-3 border-primary space-y-3">
            <p className="text-sm font-light">Date for next payment:</p>
            <p className="text-healthgoBlack">N/A</p>
          </div>
        </div>

        <div className="py-8 text-center">
          <p className="text-sm text-healthgoBlack font-semibold">
            HealthGO Plan:
          </p>
          <p className="font-light">Unavailable</p>
        </div>

        <div className="flex items-center justify-center gap-y-3 flex-col">
          <CustomButton
            buttonType="outlined"
            linkRoute="/available-packages"
            linkTitle="See Available Packages"
          />

          <CustomButton
            buttonType="inactive"
            linkRoute="/"
            linkTitle="Verify Account"
          />
        </div>
      </div>
    </div>
  );
};

export default PlanSelection;

