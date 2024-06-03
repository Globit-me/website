import Link from "next/link";
import { NavLinkProps } from "../../types/Navbar";

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link href={href} className={` ${className}`}>
      {children}
    </Link>
  );
};

export default NavLink;
