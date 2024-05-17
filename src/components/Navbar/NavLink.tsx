import Link from "next/link";
import { NavLinkProps } from "../../../types/Navbar";

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link href={href} className={`transform transition-transform duration-300 hover:-translate-y-1.5 ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
