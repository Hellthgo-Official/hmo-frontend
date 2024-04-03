import React from 'react';
import { Link } from 'react-router-dom';

const Wallet = () => {
  return (
    <div className="p-5">
      <div className="shadow-lg rounded-lg px-3 py-4">
        <div className="flex justify-between">
          <p className="font-semibold">Hello Jerome.</p>
          <div className="flex space-x-2">
            <p className="text-textGrey text-xs font-thin">
              Wallet ID:{' '}
              <span className="text-healthgoGreen text-sm font-medium">
                21A3423RD
              </span>
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4064_17110)">
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
          </div>
        </div>

        <div className="my-5 bg-white border-l-4 border-l-green px-5 pt-5 pb-10 rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto"
          >
            <g clip-path="url(#clip0_4038_16380)">
              <path
                d="M6.59935 2.82664C7.05824 2.71923 7.52806 2.66554 7.99935 2.66664C12.666 2.66664 15.3327 7.99998 15.3327 7.99998C14.928 8.75705 14.4454 9.4698 13.8927 10.1266M9.41268 9.41331C9.22958 9.60981 9.00878 9.76741 8.76345 9.87673C8.51812 9.98604 8.25328 10.0448 7.98474 10.0496C7.7162 10.0543 7.44946 10.0049 7.20042 9.9043C6.95139 9.80371 6.72516 9.654 6.53525 9.46408C6.34533 9.27416 6.19561 9.04794 6.09502 8.7989C5.99443 8.54987 5.94503 8.28312 5.94977 8.01458C5.95451 7.74604 6.01329 7.48121 6.1226 7.23587C6.23191 6.99054 6.38952 6.76974 6.58602 6.58664M11.9594 11.96C10.8197 12.8286 9.43209 13.3099 7.99935 13.3333C3.33268 13.3333 0.666016 7.99998 0.666016 7.99998C1.49528 6.45457 2.64544 5.10438 4.03935 4.03998L11.9594 11.96Z"
                stroke="#07A53D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.666016 0.666687L15.3327 15.3334"
                stroke="#07A53D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_4038_16380">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <p className="text-center text-textGrey text-sm font-thin mt-3">
            Available Balance:
          </p>

          <p className="text-healthgoGreen text-2xl text-center my-3">
            ₦ <span className="text-4xl">00</span>.00
          </p>

          <div className="flex items-center justify-center space-x-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16602 4.83335H9.83268V6.50002H8.16602V4.83335ZM8.99935 13.1667C9.45768 13.1667 9.83268 12.7917 9.83268 12.3334V9.00002C9.83268 8.54169 9.45768 8.16669 8.99935 8.16669C8.54102 8.16669 8.16602 8.54169 8.16602 9.00002V12.3334C8.16602 12.7917 8.54102 13.1667 8.99935 13.1667ZM8.99935 0.666687C4.39935 0.666687 0.666016 4.40002 0.666016 9.00002C0.666016 13.6 4.39935 17.3334 8.99935 17.3334C13.5993 17.3334 17.3327 13.6 17.3327 9.00002C17.3327 4.40002 13.5993 0.666687 8.99935 0.666687ZM8.99935 15.6667C5.32435 15.6667 2.33268 12.675 2.33268 9.00002C2.33268 5.32502 5.32435 2.33335 8.99935 2.33335C12.6743 2.33335 15.666 5.32502 15.666 9.00002C15.666 12.675 12.6743 15.6667 8.99935 15.6667Z"
                fill="#07A53D"
              />
            </svg>
            <div className="border border-primary px-2 py-1 flex items-center space-x-2 rounded-full">
              <p className="text-textGrey text-[10px] font-thin">
                HealthGO Points:
              </p>
              <p className="text-sm text-healthgoGreen">0.01 points</p>
            </div>
          </div>
        </div>

        <Link to={'/'}>
          <button className="flex bg-secondaryBG w-3/4 py-2 space-x-3 items-center justify-center rounded-lg ml-auto mr-auto">
            <p className="text-white text-sm font-semibold">Top-Up Wallet</p>
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4444_8356)">
                <path
                  d="M11.3327 6.33332H9.66602V9.66666H6.33268V11.3333H9.66602V14.6667H11.3327V11.3333H14.666V9.66666H11.3327V6.33332ZM10.4993 2.16666C5.89935 2.16666 2.16602 5.89999 2.16602 10.5C2.16602 15.1 5.89935 18.8333 10.4993 18.8333C15.0993 18.8333 18.8327 15.1 18.8327 10.5C18.8327 5.89999 15.0993 2.16666 10.4993 2.16666ZM10.4993 17.1667C6.82435 17.1667 3.83268 14.175 3.83268 10.5C3.83268 6.82499 6.82435 3.83332 10.4993 3.83332C14.1743 3.83332 17.166 6.82499 17.166 10.5C17.166 14.175 14.1743 17.1667 10.4993 17.1667Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4444_8356">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Link>

        <div className="w-3/4 flex ml-auto mr-auto">
          <Link to={'/'}>
            <button className="flex border border-primary w-full py-2 space-x-3 items-center justify-center rounded-lg ml-auto mr-auto">
              <p className="text-white text-sm font-semibold">Transfer</p>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4444_8356)">
                  <path
                    d="M11.3327 6.33332H9.66602V9.66666H6.33268V11.3333H9.66602V14.6667H11.3327V11.3333H14.666V9.66666H11.3327V6.33332ZM10.4993 2.16666C5.89935 2.16666 2.16602 5.89999 2.16602 10.5C2.16602 15.1 5.89935 18.8333 10.4993 18.8333C15.0993 18.8333 18.8327 15.1 18.8327 10.5C18.8327 5.89999 15.0993 2.16666 10.4993 2.16666ZM10.4993 17.1667C6.82435 17.1667 3.83268 14.175 3.83268 10.5C3.83268 6.82499 6.82435 3.83332 10.4993 3.83332C14.1743 3.83332 17.166 6.82499 17.166 10.5C17.166 14.175 14.1743 17.1667 10.4993 17.1667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4444_8356">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Link>
          <Link to={'/'}>
            <button className="flex border border-primary w-full py-2 space-x-3 items-center justify-center rounded-lg ml-auto mr-auto">
              <p className="text-textGrey text-sm font-semibold">Withdraw</p>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_4444_8356)">
                  <path
                    d="M11.3327 6.33332H9.66602V9.66666H6.33268V11.3333H9.66602V14.6667H11.3327V11.3333H14.666V9.66666H11.3327V6.33332ZM10.4993 2.16666C5.89935 2.16666 2.16602 5.89999 2.16602 10.5C2.16602 15.1 5.89935 18.8333 10.4993 18.8333C15.0993 18.8333 18.8327 15.1 18.8327 10.5C18.8327 5.89999 15.0993 2.16666 10.4993 2.16666ZM10.4993 17.1667C6.82435 17.1667 3.83268 14.175 3.83268 10.5C3.83268 6.82499 6.82435 3.83332 10.4993 3.83332C14.1743 3.83332 17.166 6.82499 17.166 10.5C17.166 14.175 14.1743 17.1667 10.4993 17.1667Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4444_8356">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
