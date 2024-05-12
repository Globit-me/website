import Link from "next/link";
import { ColumnProps } from "../../../types/Footer";

const FooterColumn: React.FC<ColumnProps> = ({ title, links }) => (
  <div className="flex flex-col w-1/4 space-y-2">
    <h3 className="font-semibold mb-2">{title}</h3>
    {links.map((link) => (
      <Link href={link.href} key={link.href}>
        {link.text}
      </Link>
    ))}
  </div>
);

export default FooterColumn;
