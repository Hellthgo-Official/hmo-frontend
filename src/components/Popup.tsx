import React from 'react';
import CustomButton from './CustomButton';
import SuccessGif from '../assets/gif/success.gif';

type Props = {};

const Popup = (props: Props) => {
  return (
    <div className="w-screen h-screen bg-[rgba(0,0,0,0.6)] fixed top-0 z-20 flex items-center justify-center">
      <div className="w-4/5 bg-white rounded-lg px-3 py-5 flex flex-col text-center items-center justify-center">
        <img src={SuccessGif} className="mb-3" alt="SuccessGif" />

        <p className="text-xl font-semibold">Submitted Successfully!</p>
        <p className="text-sm font-light">
          Your details have been submitted for verification. It takes about 2
          minutes for it to reflect when verified.
        </p>
        <CustomButton
          buttonType="outlined"
          linkRoute="/available-packages"
          linkTitle="Done"
        />
      </div>
    </div>
  );
};

export default Popup;

