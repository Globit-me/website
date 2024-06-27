interface InputFieldProps {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  label: string;
  className?: string;
  register: any;
  error: string | undefined;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  label,
  placeholder,
  className,
  error,
  register,
}) => (
  <div className={`relative flex flex-col mb-4 ${className}`}>
    <input
      type={type}
      id={id}
      name={name}
      {...register}
      placeholder={placeholder}
      className="peer block w-full border rounded px-3 py-3 leading-tight border-custom-blue focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300"
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

export default InputField;
