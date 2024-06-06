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
    <div className="max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6">
      <h1>React Server Component: Upload</h1>
      <form onSubmit={handleVerifyDni}>
        <input type="file" name="file" accept="image/*" />
        <div className="flex flex-col">
          <input type="submit" value="Upload" />
          <button type="submit">hola</button>
        </div>
      </form>

        <button onSubmit={handleShowDni}>mostrar dni</button>
    </div>
  );
}
