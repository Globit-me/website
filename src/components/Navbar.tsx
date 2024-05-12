import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-10 max-w-6xl mx-auto">
      <div className="flex flex-row gap-6">
        <header className="mr-3">LOGO</header>
        <Link href="_blank">Mi pedido</Link>
        <Link href="_blank">Programa de referidos</Link>
        <Link href="_blank">Garantía</Link>
      </div>
      <div className="flex flex-row gap-4">
        <Link href="_blank">Iniciar sesión</Link>
        <Link href="_blank">Registrarse</Link>
        <p>país</p>
      </div>
    </nav>
  );
};

export default Navbar;
