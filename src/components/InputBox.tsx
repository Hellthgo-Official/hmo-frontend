import React from 'react';

type Props = {
  title: string;
  value?: string;
  disabled?: boolean;
  type?: string;
  maxLength?: number;
  onChange?: () => void;
  [key: string]: any;
};

const InputBox = ({
  title,
  value,
  disabled,
  type,
  maxLength,
  onChange,
  ...props
}: Props) => {
  return (
    <div className="w-full flex flex-col">
      <p className="text-xs lg:text-lg font-light">{title}</p>
      <input
        type={type ?? 'text'}
        className="w-full rounded-lg text-sm border border-primary bg-blandGreen p-3 mt-2 outline-green-700"
        value={value}
        disabled={disabled}
        maxLength={maxLength}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default InputBox;

