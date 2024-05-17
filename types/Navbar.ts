import { ReactNode } from "react";

export type NavLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
}