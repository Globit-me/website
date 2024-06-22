import { User } from "@/types/user";
import Modal from "react-modal";
import Image from "next/image";
import ApprovedButton from "../buttons/ApprovedButton";
import RejectButton from "../buttons/RejectButton";
import { useState } from "react";
import { showBackUserDni, showFrontUserDni } from "@/actions/admin";

interface DniItemProps {
  user: User;
  onApprove: (id: string | null) => void;
  onReject: (id: string | null) => void;
}
const DniItem: React.FC<DniItemProps> = ({ user, onApprove, onReject }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dniImage, setDniImage] = useState("");

  const fetchFrontImage = async () => {
    if (!user.id) return;
    const frontImage = await showFrontUserDni(user.id);
    setDniImage(frontImage);
    setModalIsOpen(true);
  };

  const fetchBackImage = async () => {
    if (!user.id) return;
    const backImage = await showBackUserDni(user.id);
    setDniImage(backImage);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleConfirmApprove = async () => {
    await onApprove(user?.id);
  };

  const handleConfirmReject = async () => {
    await onReject(user?.id);
  };

  const formatDateString = (date: Date | null): string | null => {
    if (!date) return null;
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="p-4 mb-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold">Usuario {user.name}</h3>
      <p className="text-sm">Id: {user.id}</p>
      <p className="text-sm">Dni: {user.dni}</p>
      <p className="text-sm">Email: {user.email}</p>
      <div className="flex space-x-2">
        <ApprovedButton
          id={user?.id}
          label="DNI"
          onClick={handleConfirmApprove}
        />
        <RejectButton id={user.id} label="DNI" onClick={handleConfirmReject} />
      </div>
      <button
        className="mt-2 px-4 py-2 text-white bg-custom-blue rounded"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Ocultar Detalles" : "Ver Detalles"}
      </button>

      {showDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>
            <strong>Fecha de Nacimiento:</strong> {formatDateString(user.dob)}
          </p>
          <p>
            <strong>Localidad:</strong> {user.country} - {user.province}
          </p>
          <p>
            <strong>Domicilio:</strong> {user.address} {user.addressNumber}{" "}
            {user.apartment}
          </p>
          <div className="space-x-3">
            <button
              className="mt-2 px-4 py-2 text-white bg-custom-blue-dark rounded"
              onClick={fetchFrontImage}
            >
              Ver Frente Dni
            </button>
            <button
              className="mt-2 px-4 py-2 text-white bg-custom-blue-dark rounded"
              onClick={fetchBackImage}
            >
              Ver Reverso Dni
            </button>
          </div>

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
                  src={dniImage}
                  alt="Large view"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default DniItem;
