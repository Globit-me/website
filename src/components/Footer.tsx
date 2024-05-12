import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col">
      <div className="py-10 bg-custom-blue">
        <div className="flex flex-row max-w-6xl mx-auto text-white space-x-10">
          
          {/* Columna de Ayuda */}
          <div className="flex flex-col w-1/4 space-y-2">
            <h3 className="font-semibold mb-2">Ayuda</h3>
            <Link href="_blank">Preguntas frecuentes</Link>
            <Link href="_blank">Nosotros</Link>
            <Link href="_blank">Programa de referidos</Link>
            <Link href="_blank">Blog</Link>
          </div>

          {/* Columna de legales */}
          <div className="flex flex-col w-1/4 space-y-2">
            <h3 className="font-semibold mb-2">Legales</h3>
            <Link href="_blank">Garantía</Link>
            <Link href="_blank">Política de privacidad</Link>
            <Link href="_blank">Términos y condiciones</Link>
          </div>

          {/* Columna de Contactos */}
          <address className="flex flex-col not-italic w-1/4 space-y-2">
            <h3 className="font-semibold mb-2">Contactos</h3>
            <Link href="tel:+595991629158">📱 +595 991 629158</Link>
            <Link href="mailto:contacto@globit.me">✉️ contacto@globit.me</Link>
          </address>

          {/* Columna de logos */}
          <div className="flex flex-col w-1/4">
            <div className="relative w-full h-full mt-auto">
              <Image
                src="/logos/globit.png"
                alt="Globit logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-full h-full mt-auto">
              <Image
                src="/logos/ASAEDE-1.png"
                alt="Asociación Argentina"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row max-w-6xl mx-auto my-3 justify-between items-center w-full">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-custom-blue rounded-full">
            <div className="relative w-4 h-4">
              <Image
                src="/svg/linkedin.svg"
                alt="LinkedIn"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
          <div className="p-3 bg-custom-blue rounded-full">
            <div className="relative w-4 h-4">
              <Image
                src="/svg/instagram.svg"
                alt="Instagram"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div className="text-custom-black font-light opacity-60">
          © 2022 Globit Todos los derechos reservados, de Latinoamérica al
          mundo.
        </div>
      </div>
    </footer>
  );
};
