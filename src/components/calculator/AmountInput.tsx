import React, { ChangeEvent } from "react";

interface AmountInputProps {
  label: string;
  amount: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = ({ label, amount, onChange, readOnly = false }) => (
  <div className="relative flex-grow mb-4 md:mb-0">
    <input
      id={label}
      type="text"
      value={amount}
      onChange={onChange}
      readOnly={readOnly}
      placeholder=" "
      aria-label={label}
      className="text-xl md:text-2xl peer block w-full border border-custom-blue rounded py-4 px-4 leading-tight focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300"
    />
    <label
      htmlFor={label}
      className="absolute left-4 top-0 px-1 bg-white text-custom-black text-xs -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
    >
      {label}
    </label>
  </div>
);

export default AmountInput;