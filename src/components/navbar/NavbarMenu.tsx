import {
  MenuIcon,
  LogIn,
  LogOut,
  Info,
  CheckCheck,
  Contact,
  UserPlus,
} from "lucide-react";
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
import { useSession } from "next-auth/react";


interface NavbarMenuProps {
  handleSignOut: () => Promise<void>;
}

export function NavbarMenu({ handleSignOut }: NavbarMenuProps) {

  const session = useSession();
  const authenticated = session.status === "authenticated";

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
      <DropdownMenuContent className="w-56 bg-white shadow-lg border border-gray-200 rounded-md">
        <DropdownMenuLabel className="font-semibold text-custom-blue">
          Mi cuenta
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          { authenticated ? (
            <>
              <DropdownMenuItem asChild>
                <Link
                  href="/profile"
                  className="flex items-center text-custom-blue"
                >
                  <Contact className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleSignOut}
                className="flex items-center text-custom-blue"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Salir</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem asChild>
                <Link
                  href="/login"
                  className="flex items-center text-custom-blue"
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Iniciar Sesión</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/register"
                  className="flex items-center text-custom-blue"
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Registrarse</span>
                </Link>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="font-semibold text-black">
          Nosotros
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link
              href="/faq"
              className="flex items-center text-black"
            >
              <Info className="mr-2 h-4 w-4" />
              <span>Preguntas frecuentes</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/guarantee"
              className="flex items-center text-black"
            >
              <CheckCheck className="mr-2 h-4 w-4" />
              <span>Garantía</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
