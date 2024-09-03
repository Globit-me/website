import { useState, useEffect, useRef } from "react";
import { Ellipsis } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InfoTooltip = () => {
  const [showInfo, setShowInfo] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setShowInfo((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      tooltipRef.current &&
      !tooltipRef.current.contains(event.target as Node)
    ) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfo]);

  return (
    <div className="relative text-left ml-2" ref={tooltipRef}>
      <Ellipsis
        onClick={handleToggle}
        className="text-gray-500 cursor-pointer"
      />
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 right-6 md:left-6 bg-white border border-gray-300 rounded shadow-lg p-1 md:p-3 text-xs text-gray-500 w-52 md:w-64"
          >
            <div className="mb-2">
              <h4 className="font-bold">De Dólar a Peso</h4>
              <ul className="list-disc list-inside">
                <li>Transacción hasta 24 horas.</li>
                <li>Comisión 5.5% + 10 USD de cobro</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">De Dolar a Dólar</h4>
              <ul className="list-disc list-inside">
                <li>Transacción hasta 48 horas.</li>
                <li>Comisión 6.5% + 10 USD de cobro.</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InfoTooltip;
