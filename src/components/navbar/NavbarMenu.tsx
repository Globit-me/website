import { MenuIcon, LogIn, LogOut, Users, CheckCheck, Contact, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function NavbarMenu() {
  const session = false;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="border-none focus:outline-none focus:ring-0 text-custom-black"
      >
        <Button variant="outline" className="outline-none focus:outline-none">
          <MenuIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {session ? (
            <>
              <DropdownMenuItem>
                <Contact className="mr-2 h-4 w-4" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Salir</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <LogIn className="mr-2 h-4 w-4" />
                <Link href="/login">Iniciar Sesión</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus className="mr-2 h-4 w-4" />
                <Link href="/register">Registrarse</Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Nosotros</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Programa de referidos</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CheckCheck className="mr-2 h-4 w-4" />
            <span>Garantía</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
