import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import { User } from "@/types/user";

interface DNIItemProps {
  user: User;
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
}

const DNIItem: React.FC<DNIItemProps> = ({ user, onApprove, onReject }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const fetchLargeImage = async () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="p-4 mb-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold">Usuario #{user.id}</h3>
      <p className="text-sm">Nombre: {user.name}</p>
      <p className="text-sm">Email: {user.email}</p>
      <div className="flex space-x-2">
        <button
          className="mt-2 px-4 py-2 text-white bg-green-600 rounded"
          onClick={() => onApprove(user.id)}
        >
          Aprobar
        </button>
        <button
          className="mt-2 px-4 py-2 text-white bg-red-600 rounded"
          onClick={() => onReject(user.id)}
        >
          Rechazar
        </button>
      </div>
      <button
        className="mt-2 px-4 py-2 text-white bg-blue-600 rounded"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Ocultar Detalles" : "Ver Detalles"}
      </button>

      {showDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>
            <strong>DNI:</strong> {user.dni}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong> {user.dob}
          </p>
          <p>
            <strong>Domicilio:</strong> {user.address}
          </p>
          <button
            className="mt-2 px-4 py-2 text-white bg-custom-blue rounded"
            onClick={fetchLargeImage}
          >
            Ver DNI
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Large Image Modal"
            className="flex justify-center items-center h-full"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          >
            <div className="relative bg-white p-12 md:p-20 rounded shadow-lg max-w-full max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2 focus:outline-none"
              >
                Cerrar
              </button>
              <div className="relative w-full h-auto">
                <Image
                  src={user.dniImage}
                  alt="Large view"
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default DNIItem;
