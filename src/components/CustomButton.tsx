import React from 'react';
import { Link } from 'react-router-dom';

const OutlinedButtonStyle = `px-5 py-3 lg:text-xl my-2 gap-x-2 rounded-md flex border-green border text-healthgoGreen`;
const MainButtonStyle = `px-5 py-3 lg:text-xl my-2 gap-x-2 rounded-md flex bg-secondaryBG text-white`;
const InactiveButtonStyle = `px-5 py-3 lg:text-xl mb-5 gap-x-2 rounded-md flex bg-grey text-white`;
const FullButtonStyle = `w-full my-2 lg:text-xl py-3 gap-x-2 rounded-md flex items-center justify-center bg-secondaryBG text-white`;

type Props = {
  linkRoute?: string;
  linkTitle: string;
  buttonType?: 'main' | 'outlined' | 'inactive' | 'full';
  extraClassNames?: string;
  buttonFn?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

const CustomButton = ({
  linkRoute,
  linkTitle,
  buttonType,
  extraClassNames,
  buttonFn,
  onClick,
  disabled,
  loading,
}: Props) => {
  let buttonStyle = '';

  switch (buttonType) {
    case 'main':
      buttonStyle = MainButtonStyle;
      break;
    case 'outlined':
      buttonStyle = OutlinedButtonStyle;
      break;
    case 'inactive':
      buttonStyle = InactiveButtonStyle;
      break;

    case 'full':
      buttonStyle = FullButtonStyle;
      break;

    default:
      buttonStyle = MainButtonStyle;
      break;
  }
  return (
    <Link to={linkRoute ?? '#'}>
      <button
        className={`${buttonStyle} ${extraClassNames}`}
        onClick={onClick}
        type={buttonFn}
        disabled={disabled}
      >
        {loading ? 'Loading...' : linkTitle}
        {!loading && (
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
        )}
      </button>
    </Link>
  );
};

export default CustomButton;

