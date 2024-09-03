"use client";

import AmountInput from "./AmountInput";
import BankSelect from "./BankSelect";
import { useCalculator } from "@/hooks/useCalculator";
import InfoTooltip from "./InfoTooltip";
import { Bank } from "@/types/Calculator";
import { appendOrder } from "@/actions/order";
import { OrderData } from "@/types/OrderData";
import toast from "react-hot-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CalculatorProps {
  banks: Bank[];
  exchangeRates: { buy: number; sell: number };
}

const Calculator = ({ banks, exchangeRates }: CalculatorProps) => {
  const {
    fromBank,
    toBank,
    amount,
    exchangedAmount,
    handleFromBankChange,
    handleToBankChange,
    handleAmountChange,
  } = useCalculator(banks, exchangeRates);

  // Filtra los bancos para que solo se muestren los que son válidos para enviar (es decir, solo USD)
  const filteredFromBanks = banks.filter((bank) => bank.currency === "USD");

  // Filtra los bancos para que solo se muestren los que son válidos para recibir dependiendo de la selección de envío
  const filteredToBanks =
    fromBank.name === "Paypal"
      ? banks.filter(
          (bank) =>
            bank.name === "Paypal" ||
            ["Uala", "Brubank", "Banco Arg", "Mercado pago"].includes(bank.name)
        )
      : ["Payoneer", "Deel", "Zelle", "Wise"].includes(fromBank.name)
      ? banks.filter(
          (bank) =>
            bank.name !== "Paypal" &&
            (bank.currency === "USD" || bank.currency === "ARS")
        )
      : banks.filter((bank) => bank.currency === "USD" || bank.currency === "ARS");

  const onSubmit = async () => {
    const orderData: OrderData = {
      fromBank: fromBank.name,
      toBank: toBank.name,
      amount,
      exchangedAmount,
    };

    const response = await appendOrder(orderData);
    if (response.error) {
      toast.error(response.error);
    } else if (response.success) {
      toast.success(response.success);
    }
  };

  return (
    <div className="flex flex-col md:flex-1 items-center justify-center my-8 md:my-0 border-4">
      <div className="bg-white shadow-md rounded px-4 py-6 md:px-8 md:pt-6 md:pb-8 flex flex-col w-full">
        <div className="mb-0 md:mb-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <AmountInput
              label={`Envías ${fromBank?.currency}`}
              amount={amount}
              onChange={handleAmountChange}
              className="w-full" // Mantener ancho completo
            />
          </div>
          <div className="flex-1">
            <BankSelect
              label="Desde Banco"
              selectedBank={fromBank?.name}
              onChange={handleFromBankChange}
              banks={filteredFromBanks}
            />
          </div>
        </div>

        <div className="mb-0 md:mb-4 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1">
            <AmountInput
              label={`Recibes ${toBank?.currency}`}
              amount={exchangedAmount}
              onChange={() => {}}
              readOnly
              className="w-full" // Mantener ancho completo
            />
          </div>
          <div className="flex-1">
            <BankSelect
              label="A Banco"
              selectedBank={toBank?.name}
              onChange={handleToBankChange}
              banks={filteredToBanks}
            />
          </div>
        </div>
        <div className="mt-2 flex flex-row items-center w-full justify-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="bg-custom-blue text-white font-bold py-2 px-4 rounded w-full md:w-7/12 hover:bg-custom-blue-dark transition duration-300">
                Solicita tu envío
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="text-black">
                  Confirmar pedido
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Por favor, revise los datos y confirme el pedido.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  onClick={onSubmit}
                  className="bg-green-700 hover:bg-green-800"
                >
                  Aprobar
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <InfoTooltip />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
