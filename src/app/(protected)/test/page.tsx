"use client"

import { showDni, verifyDni } from "@/actions/profile";

export default function TestPage() {

  const handleVerifyDni = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    await verifyDni(data);
  };

  const handleShowDni = async () => {
    await showDni();
  }

  return (
    <div className="flex flex-col max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      {JSON.stringify(session)}
      <form action={handleSignOut}>
        <button type="submit" >Cerrar Sesión</button>
      </form>

        <button onSubmit={handleShowDni}>mostrar dni</button>
    </div>
  );
}
