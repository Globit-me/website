import Image from "next/image";
import { Selector } from "./Selector";
import NavLink from "./NavLink";
import { NavbarMenu } from "./NavbarMenu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row md:justify-between justify-evenly py-10 px-4 md:px-0 max-w-6xl mx-auto">
      <div className="hidden md:block">
        <div className="flex flex-row gap-10 items-center justify-between">
          <header>
            <Link href="/">
              <Image
                src="/logos/globit-logo.png"
                alt="GLOBIT"
                priority
                width={132}
                height={35}
              />
            </Link>
          </header>
          <NavLink href="/">Programa de referidos</NavLink>
          <NavLink href="/">Garantía</NavLink>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="flex flex-row items-center gap-8">
          <NavbarMenu />
          <header>
            <Link href="/">
              <Image
                src="/logos/globit-logo.png"
                alt="GLOBIT"
                priority
                width={132}
                height={35}
              />
            </Link>
          </header>
          <div className="flex flex-row gap-8 items-center">
            <Selector />
          </div>
        </div>
      </div>

      <div className="flex-row gap-8 items-center hidden md:flex">
        <NavLink href="/login" className="font-semibold text-custom-blue">Iniciar sesión</NavLink>
        <NavLink href="/register" className="font-semibold text-custom-blue">Registrarse</NavLink>
        <Selector />
      </div>
    </nav>
  );
};

export default Navbar;
