import { ButtonHTMLAttributes, FC } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton: FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="w-full flex justify-center py-2 px-4 border rounded font-bold text-white bg-custom-blue hover:scale-105 transition duration-300"
    >
      {children}
    </button>
  );
};

export default CustomButton;
