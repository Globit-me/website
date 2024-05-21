import React, { ChangeEvent, FC } from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = ({ type, id, label, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer block w-full border border-custom-blue rounded px-3 py-3 leading-tight focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300"
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-0 px-1 text-xs bg-white text-custom-black -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
