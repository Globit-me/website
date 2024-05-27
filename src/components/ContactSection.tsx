import { sendEmail } from "@/actions/email";
import Image from "next/image";

const ContactSection = async () => {
  const handleContact = async (formData: FormData) => {
    "use server";
    await sendEmail(formData);
  };

  return (
    <section className="mb-24 mx-6 md:mb-40 md:mx-0">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="w-full md:flex-1">
          <form action={handleContact} className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 md:mb-14 text-center">
              Contáctenos
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between mb-0 md:mb-6">
              <div className="relative flex flex-col w-full md:w-1/2 md:pr-4 mb-4 md:mb-0">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full border rounded px-3 py-3 leading-tight border-custom-blue focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300"
                  placeholder="Ingrese su nombre"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-0 px-1 text-xs bg-white text-custom-black -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
                >
                  Nombre
                </label>
              </div>
              <div className="relative flex flex-col w-full md:w-1/2 md:pl-4 mb-4 md:mb-0">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer block w-full border rounded px-3 py-3 leading-tight border-custom-blue focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300"
                  placeholder="Ingrese su correo electrónico"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 md:left-8 top-0 px-1 text-xs bg-white text-custom-black -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
                >
                  Correo Electrónico
                </label>
              </div>
            </div>
            <div className="relative flex flex-col mb-4">
              <textarea
                id="message"
                name="message"
                className="peer block w-full border rounded px-3 py-3 leading-tight border-custom-blue focus:outline-none hover:ring-2 hover:ring-custom-blue focus:ring-2 focus:ring-custom-blue focus:border-custom-blue transition duration-300 h-32 resize-none"
                placeholder="Escriba su mensaje"
                required
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-0 px-1 text-xs bg-white text-custom-black -translate-y-1/2 peer-focus:text-custom-blue transition duration-300"
              >
                Mensaje
              </label>
            </div>
            <button
              type="submit"
              className="bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-custom-blue-dark transition duration-300 w-full"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="hidden md:flex md:flex-1 justify-center">
          <Image
            src="/svg/contact.svg"
            alt="Contacto"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
