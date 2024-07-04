import { Bank } from "@/types/Calculator";
import Calculator from "../calculator/Calculator";

interface CalculatorProps {
  banks: Bank[];
  exchangeRates: { buy: number; sell: number };
}

const CreateOrder = ({ banks, exchangeRates }: CalculatorProps) => {
  return (
    <div>
      <Calculator banks={banks} exchangeRates={exchangeRates} />
      <div className="flex flex-col w-full mt-4 p-4 border-t border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Pasos a seguir</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Paso 1: Crear orden</li>
          <li>Paso 2: Enviar dinero</li>
          <li>
            Paso 3: Avisar a través de WhatsApp que se creó y se envió la orden
            al número:
            <a
              href="https://wa.me/1234567890"
              className="text-custom-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +1234567890 📱
            </a>
          </li>
        </ol>
        <h2 className="text-lg font-semibold mb-2">Contacto</h2>
        <p className="mb-2">
          Si tienes algún inconveniente, puedes comunicarte con el responsable
          del negocio a través de WhatsApp:
        </p>
        <a
          href="https://wa.me/1234567890"
          className="text-custom-blue hover:underline mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar mensaje por WhatsApp 📱
        </a>
        <p>
          También puedes enviarnos un correo electrónico a:{" "}
          <a
            href="mailto:contacto@ejemplo.com"
            className="text-blue-500 hover:underline"
          >
            contacto@globit.me ✉️
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateOrder;
