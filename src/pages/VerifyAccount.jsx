import InputBox from '../components/InputBox';
import CustomButton from '../components/CustomButton';

const VerifyAccount = () => {
  return (
    <div className="flex flex-col p-5">
      <div className="text-center">
        <p className="font-semibold">Account Verification</p>
        <p className="text-xs">Personal Details</p>
        <p className="text-xs font-light">
          Kindly complete the following details to verify your account
        </p>
      </div>

      <form className="grid grid-cols-1 gap-5 py-5">
        <InputBox title={'Full name'} />
        <InputBox title={'Email address'} />
        <InputBox title={'Phone number'} />
        <InputBox title={'NIN'} />
        <InputBox title={'BVN'} />
        <InputBox title={'House address'} />
        <CustomButton
          buttonType="full"
          linkRoute="/verify-account/next-of-kin"
          linkTitle="Next"
        />

        <p className="text-sm text-healthgoGreen font-semibold text-center">
          Save and continue later
        </p>
      </form>
    </div>
  );
};

export default VerifyAccount;

