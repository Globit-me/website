import Link from "next/link";
import { NavLinkProps } from "../../../types/Navbar";

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-custom-blue text-white hover:scale-110 transition-all hover:shadow hover:shadow-custom-blue duration-300 py-2 px-4 rounded"
    >
      {children}
    </Link>
  );
};

export default NavLink;
