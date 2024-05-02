import React from 'react';
import CustomButton from '../../components/CustomButton';

type Props = {};

const PaymentCheckout = (props: Props) => {
  return (
    <div className="p-5">
      <div className="text-center pb-10">
        <p className="font-semibold mb-5">Make Payment</p>
        <p className="text-sm">Important Notice:</p>
        <p className="text-sm">
          You will first pay the deposit amount{' '}
          <span className="font-semibold">(₦5,000)</span> for now. Are you ready
          to pay the deposit now?
        </p>
      </div>
      <p className="text-sm text-center my-5">
        Yes, I am ready to pay the deposit amount now.
      </p>

      <CustomButton
        linkRoute=""
        linkTitle="Pay with ATM Card"
        buttonType="full"
        extraClassNames="my-5"
      />
      <CustomButton
        linkRoute=""
        linkTitle="Pay with Wallet Balance"
        buttonType="outlined"
        extraClassNames="w-full items-center justify-center"
      />

      <p className="text-sm text-center mt-10 mb-5">
        Not yet, I am not ready to pay the deposit amount now.
      </p>

      <p className="text-sm text-healthgoGreen font-semibold text-center">
        No, I’d Continue Later
      </p>
    </div>
  );
};

export default PaymentCheckout;

