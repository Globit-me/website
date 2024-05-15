import Link from "next/link";
import { NavLinkProps } from "../../../types/Navbar";

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-custom-blue text-white hover:bg-white hover:text-black transition-all duration-300 py-2 px-4 rounded"
    >
      {children}
    </Link>
  );
};

export default NavLink;
