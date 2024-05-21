import React, { ChangeEvent, FC } from 'react';

interface InputFieldProps {
  type: string;
  id: string;
  label: string;
  register: any;
  error: string | undefined;
  disabled?: boolean;
}

const InputField: FC<InputFieldProps> = ({ type, id, label, register, error, disabled }) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
       {...register}
        disabled={disabled}
        placeholder=" "
        className={`peer block w-full border ${error ? 'border-red-500' : 'border-custom-blue'} rounded px-3 py-3 leading-tight focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300`}
      />
      <label
        htmlFor={id}
        className="absolute left-4 top-0 px-1 text-xs bg-white text-custom-black -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
