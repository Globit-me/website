import Link from "next/link";
import { ColumnProps } from "../../../types/Footer";

const FooterColumn: React.FC<ColumnProps> = ({ title, links }) => (
  <div className="flex flex-col w-full md:w-1/4 space-y-2 items-center md:items-start">
    <h3 className="font-semibold mb-2 text-lg">{title}</h3>
    {links.map((link) => (
      <Link href={link.href} key={link.href} className="text-sm md:text-base">
        {link.text}
      </Link>
    ))}
  </div>
);

export default FooterColumn;
