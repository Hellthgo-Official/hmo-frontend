import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import { useMutation } from '@tanstack/react-query';
import { confirmPaymentFn, onrampFn } from '../../api/plan/index';
import useAuthStore from '../../store/auth';
import useWalletStore from '../../store/wallet';

const FundWallet = () => {
  const [bttnText, setBttnText] = useState<'Copy' | 'Copied'>('Copy');

  const copyCode = (address: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setBttnText('Copied');
        setTimeout(function () {
          setBttnText('Copy');
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const paymentData = useWalletStore((state) => state.paymentData);

  return (
    <div className="w-full flex flex-col space-y-3 p-5">
      <p className="font-bold text-center">Fund Wallet with Bank Transfer</p>
      <p className="font-semibold text-xs text-center">
        Paying with Bank Transfer
      </p>
      <p className="font-light text-xs text-center">
        To pay with Bank Transfer, Transfer funds to the bank account whose
        details are shown below
      </p>

      <div className="flex justify-between py-3">
        <div className="flex flex-col items-start">
          <p className="text-xs font-light">Account Number</p>
          <p className="text-sm">{paymentData.accountnumber}</p>
        </div>
        <div>
          <div className="flex space-x-2">
            {bttnText === 'Copy' && (
              <button
                onClick={() => {
                  copyCode(paymentData.accountnumber);
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_4064_17110)">
                    <path
                      d="M13.3327 0.833313H3.33268C2.41602 0.833313 1.66602 1.58331 1.66602 2.49998V14.1666H3.33268V2.49998H13.3327V0.833313ZM15.8327 4.16665H6.66602C5.74935 4.16665 4.99935 4.91665 4.99935 5.83331V17.5C4.99935 18.4166 5.74935 19.1666 6.66602 19.1666H15.8327C16.7493 19.1666 17.4993 18.4166 17.4993 17.5V5.83331C17.4993 4.91665 16.7493 4.16665 15.8327 4.16665ZM15.8327 17.5H6.66602V5.83331H15.8327V17.5Z"
                      fill="#07A53D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_4064_17110">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            )}

            <p className="text-sm text-healthgoGreen">{`${bttnText} Account Number`}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-xs font-light">Account Name</p>
        <p className="text-sm">{paymentData.accountname}</p>
      </div>

      <div className="flex flex-col items-start">
        <p className="text-xs font-light">Bank</p>
        <p className="text-sm">{paymentData.bankname}</p>
      </div>

      <p className="text-sm font-light">
        After making Payment, it will automatically reflect on your dashboard
        once confirmed.
      </p>

      <CustomButton
        linkRoute="/processing-funds"
        linkTitle="I've made the payment"
        buttonType="full"
      />
    </div>
  );
};

export default FundWallet;

