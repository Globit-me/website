import Image from "next/image";
import { Selector } from "./Selector";
import NavLink from "./NavLink";


const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-10 max-w-6xl mx-auto">
      <div className="flex flex-row gap-8 items-center">
        <header className="mr-3"><Image src="/logos/globit-logo.png" alt="GLOBIT" priority width={132} height={35}/></header>
        <NavLink href="/">Inicio</NavLink>
        <NavLink href="/">Programa de referidos</NavLink>
        <NavLink href="/">Garantía</NavLink>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <NavLink href="/">Iniciar sesión</NavLink>
        <NavLink href="/">Registrarse</NavLink>
        <Selector />
      </div>
    </nav>
  );
};

export default Navbar;
