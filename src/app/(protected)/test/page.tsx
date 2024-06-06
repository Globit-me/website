"use client";

import { showDni, addDni } from "@/actions/profile";
import { useState } from "react";
import Modal from "react-modal";
import Image from "next/image";

export default function TestPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dniImage, setDniImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerifyDni = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }
    const data = new FormData();
    data.append("file", file);
    await addDni(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleShowDni = async () => {
    const imageUrl = await showDni();
    if (imageUrl) {
      setDniImage(imageUrl);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = async () => {
    setIsModalOpen(false);
    setDniImage(null);
  };

  return (
    <div className="flex flex-col max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      {JSON.stringify(session)}
      <form action={handleSignOut}>
        <button type="submit" >Cerrar Sesión</button>
      </form>

      <button
        onClick={handleShowDni}
        className="flex text-center p-5 mt-2 bg-custom-blue w-3/12 rounded-full text-white"
      >
        mostrar dni
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Large Image Modal"
        className="flex justify-center items-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="relative bg-white p-12 md:p-20 rounded shadow-lg max-w-full max-h-full">
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 focus:outline-none"
          >
            Cerrar
          </button>
          <div className="relative w-full h-auto">
            {dniImage && (
              <Image src={dniImage} alt="DNI" width={800} height={800} />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}
