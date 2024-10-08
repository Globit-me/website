"use client";

import { sendEmail } from "@/actions/email";
import toast from "react-hot-toast";
import Image from "next/image";
import InputField from "../field/InputField";
import TextAreaField from "../field/TextAreaField";

const ContactSection = () => {
  const handleContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await sendEmail(formData);

    if (response.data) {
      toast.success("Mensaje enviado correctamente");
    } else {
      toast.error("Error al enviar el mensaje");
    }
    form.reset();
  };

  return (
    <section className="mb-24 mx-6 md:mb-40 md:mx-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start md:items-center">
        <div className="w-full">
          <form onSubmit={handleContact} className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 md:mb-14 text-center">
              Contáctenos
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between mb-0 md:mb-6 space-x-0 md:space-x-3">
              <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Ingrese su nombre"
              />
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <TextAreaField
              id="message"
              name="message"
              placeholder="Escriba su mensaje"
            />
            <button
              type="submit"
              className="bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-custom-blue-dark transition duration-300 w-full"
            >
              Enviar
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <Image
            src="/gif/contact.gif"
            alt="Contacto"
            width={400}
            height={400}
            unoptimized
            className="ml-20"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
