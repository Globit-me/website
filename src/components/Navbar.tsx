import Image from "next/image";
import Link from "next/link";
import { Selector } from "./Selector/Selector";
import { NavLinkProps } from "../../types/Navbar";


const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link href={href} className="transform transition-transform duration-300 hover:-translate-y-1.5" >
      {children}
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-10 max-w-6xl mx-auto">
      <div className="flex flex-row gap-8 items-center">
        <header className="mr-3"><Image src="/logos/globit-logo.png" alt="GLOBIT" width={132} height={35}/></header>
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
