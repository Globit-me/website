import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpDown } from 'lucide-react';

interface RotatingButtonProps {
  onClick: () => void;
  className?: string;
  size?: number;
}

const RotatingButton: React.FC<RotatingButtonProps> = ({ onClick, className = '', size = 24 }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    onClick();
  };

  return (
    <div className="flex items-center justify-center">
      <motion.button
        onClick={handleClick}
        className={`flex items-center justify-center ${className}`}
        animate={{ rotate: isRotated ? 180 : 0 }}
        transition={{ duration: 0.1 }}
      >
        <ArrowUpDown size={size} />
      </motion.button>
    </div>
  );
};

export default RotatingButton;
