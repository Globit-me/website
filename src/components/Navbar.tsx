import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-10">
      <div className="flex flex-row gap-6">
        <header className="mr-3">LOGO</header>
        <Link href="_blank">Mi pedido</Link>
        <Link href="_blank">Programa de referidos</Link>
        <Link href="_blank">Garantia</Link>
      </div>
      <div className="flex flex-row gap-4">
        <Link href="_blank">Iniciar sesion</Link>
        <Link href="_blank">Registrarse</Link>
        <p>pais</p>
      </div>
    </nav>
  );
};

export default Navbar;
