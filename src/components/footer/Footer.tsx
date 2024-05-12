import Image from "next/image";
import { LinkItem } from "../../../types/Footer";
import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";


export const Footer = () => {
  const columns: Array<{ title: string; links: LinkItem[] }> = [
    {
      title: "Ayuda",
      links: [
        { href: "_blank", text: "Preguntas frecuentes" },
        { href: "_blank", text: "Nosotros" },
        { href: "_blank", text: "Programa de referidos" },
        { href: "_blank", text: "Blog" },
      ],
    },
    {
      title: "Legales",
      links: [
        { href: "_blank", text: "Garantía" },
        { href: "_blank", text: "Política de privacidad" },
        { href: "_blank", text: "Términos y condiciones" },
      ],
    },
    {
      title: "Contactos",
      links: [
        { href: "tel:+595991629158", text: "📱 +595 991 629158" },
        { href: "mailto:contacto@globit.me", text: "✉️ contacto@globit.me" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col">
      <div className="py-10 bg-custom-blue">
        <div className="flex flex-row max-w-6xl mx-auto text-white space-x-10">
          {columns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
          <div className="flex flex-col w-1/4">
            <div className="relative w-full h-full mt-auto">
              <Image src="/logos/globit.png" alt="Globit logo" fill className="object-contain" />
            </div>
            <div className="relative w-full h-full mt-auto">
              <Image src="/logos/ASAEDE-1.png" alt="Asociación Argentina" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row max-w-6xl mx-auto my-3 justify-between items-center w-full">
        <div className="flex items-center space-x-3">
          <SocialIcon src="/svg/linkedin.svg" alt="LinkedIn" />
          <SocialIcon src="/svg/instagram.svg" alt="Instagram" />
        </div>
        <div className="text-custom-black font-light opacity-60 text-sm">
          © 2022 Globit Todos los derechos reservados, de Latinoamérica al mundo.
        </div>
      </div>
    </footer>
  );
};