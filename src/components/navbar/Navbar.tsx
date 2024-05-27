"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavLink from "./NavLink";
import { NavbarMenu } from "./NavbarMenu";
import Link from "next/link";

const Navbar = () => {
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
            <NavLink href="/questions">Preguntas frecuentes</NavLink>
            <NavLink href="/">Garantía</NavLink>
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
            <NavbarMenu />
          </div>
        </div>

        <div className="flex-row gap-8 items-center hidden md:flex">
          <NavLink href="/login" className="font-semibold text-custom-blue">
            Iniciar sesión
          </NavLink>
          <NavLink href="/register" className="font-semibold text-custom-blue">
            Registrarse
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
