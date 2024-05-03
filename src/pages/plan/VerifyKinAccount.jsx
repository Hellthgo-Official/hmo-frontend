import InputBox from '../../components/InputBox';
import CustomButton from '../../components/CustomButton';
import Popup from '../../components/Popup';

const VerifyKinAccount = () => {
  return (
    <>
      <Popup />
      <div className="flex flex-col p-5">
        <div className="text-center">
          <p className="font-semibold">Account Verification</p>
          <p className="text-xs">Next of Kin Details</p>
          <p className="text-xs font-light">
            Kindly complete the details of your Next of Kin
          </p>
        </div>

        <form className="grid grid-cols-1 gap-5 py-5">
          <InputBox title={'Full name of next of kin'} />
          <InputBox title={'Email address of next of kin'} />
          <InputBox title={'Phone number of next of kin'} />
          <InputBox title={'NIN of next of kin'} />
          <InputBox title={'BVN of next of kin'} />
          <InputBox title={'House address of next of kin'} />
          <InputBox title={'Relationship with next of kin'} />
          <CustomButton
            buttonType="full"
            linkRoute="/verify-account/next-of-kin"
            linkTitle="Verify Account"
          />

          <p className="text-sm text-healthgoGreen font-semibold text-center">
            Save and continue later
          </p>
        </form>
      </div>
    </>
  );
};

export default VerifyKinAccount;

