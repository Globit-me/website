import Image from "next/image";
import { Selector } from "./Selector";
import NavLink from "./NavLink";
import { NavbarMenu } from "./NavbarMenu";


const Navbar = () => {
  return (
    <nav className="flex flex-row sm:justify-between justify-evenly py-10 px-4 sm:px-0 max-w-6xl mx-auto">
      <div className="hidden sm:block">
      <div className="flex flex-row gap-10 items-center justify-between">
        <header className="mr-3"><Image src="/logos/globit-logo.png" alt="GLOBIT" priority width={132} height={35}/></header>
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/">Programa de referidos</NavLink>
        <NavLink href="/">Garantía</NavLink>
        <NavLink href="/">Iniciar sesión</NavLink>
        <NavLink href="/">Registrarse</NavLink>
       </div>
      </div>

      <div className="block sm:hidden">
        <div className="flex flex-row items-center gap-8">
          <NavbarMenu />
          <header className=""><Image src="/logos/globit-logo.png" alt="GLOBIT" priority width={132} height={35}/></header>
          <div className="flex flex-row gap-8 items-center">
            <Selector />
          </div>
        </div>
      </div>

      <div className="flex-row gap-8 items-center hidden sm:flex">
        <Selector />
     </div>
    </nav>
  );
};

export default Navbar;
