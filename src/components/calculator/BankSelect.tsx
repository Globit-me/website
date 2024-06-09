import { Bank } from "@/types/Calculator";
import { ChangeEvent } from "react";

interface BankSelectProps {
  label: string;
  selectedBank: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  banks: Bank[];
}


const BankSelect: React.FC<BankSelectProps> = ({
  label,
  selectedBank,
  onChange,
  banks
}) => (
  <div className="flex-grow mb-4 md:mb-0 md:mr-2">
    <select
      value={selectedBank}
      onChange={onChange}
      className="w-full py-0 md:py-4 pl-2 leading-tight focus:outline-none  text-base"
    >
      {banks.map((bank) => (
        <option key={bank.name} value={bank.name}>
          {bank.name}
        </option>
      ))}
    </select>
  </div>
);

export default BankSelect;
