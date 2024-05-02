import React from 'react';
import CustomButton from '../../components/CustomButton';
import { PlanList } from '../../utils/data/Plans';

const AvailablePackages = () => {
  return (
    <div className="p-5">
      <p className="text-center font-semibold">Available Packages</p>

      <div className="grid grid-cols-1 py-5 gap-5">
        {PlanList.map((plan) => {
          const { icon, planCoverage, planDeposit, planDuration, planType } =
            plan;

          return (
            <div
              key={planType}
              className="border border-primary p-3 rounded-lg"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-x-3">
                  {icon}
                  <p className="text-sm font-semibold">{planType}</p>
                </div>
                <p className="text-sm font-light">{planDuration} per year</p>
              </div>
              <p className="text-xs my-3">THIS PLAN COVERS:</p>

              <ol className="w-full list-decimal text-xs font-light px-5">
                {planCoverage.map((item) => {
                  return <li key={item}>{item}</li>;
                })}
              </ol>

              <p className="text-xs font-semibold text-healthgoGreen my-3">
                See All Benefits of This Plan
              </p>

              <div className="flex justify-between">
                <div className="flex items-center gap-x-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2897 0.304044C15.2432 0.188307 15.1539 0.0949406 15.0403 0.04337C14.9268 -0.0082006 14.7977 -0.0140052 14.68 0.0271636C14.5623 0.0683325 14.4649 0.153305 14.4083 0.264404C14.3516 0.375503 14.3399 0.504175 14.3757 0.623651C15.1199 2.76237 13.6428 4.35961 12.5165 5.2151L12.0616 4.56307C11.9086 4.34439 11.5665 4.16256 11.3006 4.15935L8.74694 4.17057C8.43499 4.17999 8.13138 4.27353 7.86822 4.44131L0.343441 9.71763C0.168414 9.8408 0.049322 10.0283 0.0122398 10.2391C-0.0248425 10.4499 0.0231068 10.6668 0.145589 10.8423L3.56514 15.7349C3.82147 16.0994 4.23079 16.0553 4.59606 15.8006L12.1208 10.5235C12.3371 10.3705 12.587 10.0404 12.6751 9.78812L13.4746 7.26891C13.5627 7.01739 13.509 6.6337 13.356 6.41503L13.0789 6.01772C14.5912 4.85864 16.1612 2.81044 15.2897 0.304044ZM11.7884 7.79999C11.6498 7.89702 11.4934 7.9658 11.3282 8.00237C11.163 8.03895 10.9922 8.04261 10.8255 8.01315C10.6589 7.98369 10.4997 7.92169 10.3571 7.83069C10.2144 7.73969 10.0911 7.62147 9.99413 7.48278C9.79782 7.20215 9.72088 6.8551 9.7802 6.51779C9.83952 6.18049 10.0303 5.88051 10.3105 5.68369C10.5303 5.52975 10.7926 5.44831 11.0609 5.45075C11.3291 5.45319 11.5899 5.53939 11.8068 5.69731C11.589 5.82868 11.4392 5.90558 11.4111 5.91759C11.3118 5.96494 11.2316 6.0446 11.1835 6.14354C11.1354 6.24247 11.1223 6.35481 11.1464 6.46214C11.1705 6.56947 11.2304 6.66543 11.3162 6.73429C11.402 6.80315 11.5086 6.84084 11.6186 6.84117C11.6875 6.84117 11.758 6.82515 11.8245 6.79391C11.9799 6.72021 12.1465 6.6329 12.3203 6.52957C12.3603 6.76993 12.3316 7.01669 12.2375 7.24144C12.1434 7.4662 11.9877 7.65981 11.7884 7.79999Z"
                      fill="#07A53D"
                    />
                  </svg>
                  <p className="text-sm font-medium">Deposit: {planDeposit}</p>
                </div>
                <CustomButton linkRoute="/payment-plan" linkTitle="Next" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePackages;

