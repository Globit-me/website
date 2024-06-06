"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { NavbarMenu } from "./NavbarMenu";
import Link from "next/link";
import { Session } from "@auth/core/types";
import { UserIcon, LogOutIcon, LogIn, UserPlus } from "lucide-react";
import { logout } from "@/lib/logout";
import { verifyDni } from "@/actions/profile";

interface NavbarProps {
  session: Session | null;
}

const Navbar = ({ session }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = async () => {
    await logout();
  };

  const handleProfile = async () => {
    await verifyDni()
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled
          ? "shadow-md bg-white"
          : "border-b-2 border-transparent bg-transparent"
      }`}
    >
      <div className="flex flex-row md:justify-between justify-evenly py-6 px-4 md:px-0 max-w-6xl mx-auto">
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
            <NavLink href="/faq">Preguntas frecuentes</NavLink>
            <NavLink href="/guarantee">Garantía</NavLink>
          </div>
        </div>

        <div className="block md:hidden w-full mx-3">
          <div className="flex flex-row items-center justify-between">
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
            <NavbarMenu handleSignOut={handleSignOut} session={session} />
          </div>
        </div>

        <div className="flex-row gap-8 items-center hidden md:flex">
          {session ? (
            <>
              <button
                className="flex items-center text-custom-blue hover:text-custom-blue-dark transition duration-300"
                onClick={handleProfile}
              >
                <UserIcon className="w-6 h-6" />
                <span className="ml-2 font-semibold">Perfil</span>
              </button>
              <button
                className="flex items-center font-semibold text-custom-blue hover:text-custom-blue-dark transition duration-300"
                onClick={handleSignOut}
              >
                <LogOutIcon className="w-6 h-6" />
                <span className="ml-2">Salir</span>
              </button>
            </>
          ) : (
            <>
              <NavLink
                href="/login"
                className="flex items-center font-semibold text-custom-blue hover:text-custom-blue-dark"
              >
                <LogIn className="mr-2 h-4 w-4" />
                <span>Iniciar sesión</span>
              </NavLink>
              <NavLink
                href="/register"
                className="flex items-center font-semibold text-custom-blue hover:text-custom-blue-dark"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Registrarse</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
