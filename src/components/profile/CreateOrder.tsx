import { Bank } from "@/types/Calculator";
import Calculator from "../calculator/Calculator";

interface CalculatorProps {
  banks: Bank[];
  exchangeRates: { buy: number; sell: number };
}

const CreateOrder = ({ banks, exchangeRates }: CalculatorProps) => {
  const phoneNumber = "5493512568840"; // Número de teléfono en formato adecuado para WhatsApp

  return (
    <div>
      <Calculator banks={banks} exchangeRates={exchangeRates} />
      <div className="flex flex-col w-full mt-4 p-4 border-t border-gray-200">
        <h2 className="text-lg font-semibold mb-2">Pasos a seguir</h2>
        <ol className="list-decimal list-inside mb-4">
          <li>Paso 1: Crear orden.</li>
          <li>
            Paso 2: Avisar a través de WhatsApp que se creó y se envió la orden
            al número:
            <a
              href={`https://wa.me/${phoneNumber}`}
              className="text-custom-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 3512 56-8840 📱
            </a>
          </li>
          <li>
            Paso 3: Tu orden ha sido finalizada con éxito. ¡Gracias por confiar
            en nosotros!
          </li>
        </ol>
        <h2 className="text-lg font-semibold mb-2">Contacto</h2>
        <p className="mb-2">
          Si tienes algún inconveniente, puedes comunicarte con el responsable
          del negocio a través de WhatsApp:
        </p>
        <a
          href={`https://wa.me/${phoneNumber}`}
          className="text-custom-blue hover:underline mb-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enviar mensaje por WhatsApp 📱
        </a>
        <p>
          También puedes enviarnos un correo electrónico a:{" "}
          <a
            href="mailto:contacto@globit.me"
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
