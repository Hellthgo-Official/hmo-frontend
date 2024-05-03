import React from 'react';
import Avatar from '../../assets/images/avatar.png';
import CustomButton from '../../components/CustomButton';
import InputBox from '../../components/InputBox';
import useAuthStore from '../../store/auth';

type Props = {};

const Profile = (props: Props) => {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <p className="font-bold my-5">Profile Settings</p>

      <div className="w-28 h-28 relative mb-10">
        <img src={Avatar} className="w-28 h-28 rounded-full" alt="" />
        <div className="absolute bottom-0 right-0 flex items-center justify-center bg-secondary w-10 h-10 rounded-full">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2 5.43126C19.2007 5.30492 19.1765 5.17968 19.1287 5.06271C19.081 4.94575 19.0106 4.83937 18.9216 4.74966L14.8512 0.679264C14.7615 0.59029 14.6551 0.519898 14.5382 0.472124C14.4212 0.42435 14.2959 0.400134 14.1696 0.400864C14.0433 0.400134 13.918 0.42435 13.8011 0.472124C13.6841 0.519898 13.5777 0.59029 13.488 0.679264L10.7712 3.39606L0.278416 13.8889C0.189442 13.9786 0.11905 14.0849 0.0712756 14.2019C0.0235016 14.3189 -0.000714411 14.4441 1.60457e-05 14.5705V18.6409C1.60457e-05 18.8955 0.101158 19.1397 0.281193 19.3197C0.461228 19.4997 0.705408 19.6009 0.960015 19.6009H5.03041C5.16474 19.6082 5.29911 19.5872 5.4248 19.5392C5.55049 19.4912 5.66469 19.4174 5.76001 19.3225L16.1952 8.82966L18.9216 6.16086C19.0092 6.06782 19.0806 5.96074 19.1328 5.84406C19.1421 5.76754 19.1421 5.69019 19.1328 5.61366C19.1373 5.56898 19.1373 5.52395 19.1328 5.47926L19.2 5.43126ZM4.63681 17.6809H1.92001V14.9641L11.4528 5.43126L14.1696 8.14806L4.63681 17.6809ZM15.5232 6.79446L12.8064 4.07766L14.1696 2.72406L16.8768 5.43126L15.5232 6.79446Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <form className="w-full">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:space-y-0 lg:gap-5 space-y-5">
          <InputBox title={'First name'} value={user.firstName} />
          <InputBox title={'Last name'} value={user.lastName} />
          <InputBox title={'Email address'} type="email" value={user.email} />
          <InputBox title={'Phone number'} type="number" value={user.phone} />
          <InputBox title={'House address'} value={user.streetAddress} />
        </div>

        <CustomButton
          linkRoute="/"
          linkTitle="Save changes"
          buttonType="full"
          extraClassNames="mt-10 lg:w-1/2 lg:mx-auto"
        />
      </form>
    </div>
  );
};

export default Profile;

