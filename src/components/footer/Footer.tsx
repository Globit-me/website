import Image from "next/image";
import { ColumnProps } from "../../types/Footer";
import FooterColumn from "./FooterColumn";
import SocialIcon from "./SocialIcon";
import Link from "next/link";

const Footer = () => {
  const columns: Array<ColumnProps> = [
    {
      title: "Ayuda",
      links: [
        { href: "/preguntas", text: "Preguntas frecuentes" },
        { href: "/nosotros", text: "Nosotros" },
        { href: "/referidos", text: "Programa de referidos" },
        { href: "/blog", text: "Blog" },
      ],
    },
    {
      title: "Legales",
      links: [
        { href: "/garantia", text: "Garantía" },
        { href: "/politicas", text: "Política de privacidad" },
        { href: "/condiciones", text: "Términos y condiciones" },
      ],
    },
    {
      title: "Contactos",
      links: [
        { href: "tel:+595991629158", text: "📱 +595991629158" },
        { href: "mailto:contacto@globit.me", text: "✉️ contacto@globit.me" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col">
      <div className="py-10 bg-custom-blue">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 md:px-0 text-white space-y-6 md:space-y-0 md:space-x-10">
          {columns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
          <div className="flex flex-col w-full md:w-1/4">
            <div className="relative w-full h-24 mt-auto">
              <Image
                src="/logos/globit.webp"
                alt="Globit logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full h-24 mt-auto">
              <Image
                src="/logos/ASAEDE-1.webp"
                alt="Asociación Argentina"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-3 justify-between items-center w-full px-6 md:px-0">
        <div className="flex items-center space-x-3">
          <Link
            href="https://www.linkedin.com/company/globit-me/"
            target="_blank"
          >
            <SocialIcon src="/svg/linkedin.svg" alt="LinkedIn" />
          </Link>
          <Link href="https://www.instagram.com/globit.me" target="_blank">
            <SocialIcon src="/svg/instagram.svg" alt="Instagram" />
          </Link>
        </div>
        <div className="text-custom-black font-light opacity-60 text-xs md:text-sm mt-3 md:mt-0">
          © 2024 Globit Todos los derechos reservados, de Latinoamérica al
          mundo.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
