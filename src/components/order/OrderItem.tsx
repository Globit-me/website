import { Order } from "@/types/order";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import ApprovedButton from "../buttons/ApprovedButton";
import RejectButton from "../buttons/RejectButton"; 

interface OrderItemProps {
  order: Order;
  onClose?: (id: string | null) => void;
  onReject?: (id: string | null) => void;
  isRecent?: boolean;
}

const OrderItem: React.FC<OrderItemProps> = ({
  order,
  onClose,
  onReject,
  isRecent,
}) => {
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
      <h3 className="text-lg font-bold">Orden #{order.id}</h3>
      <p className="text-sm">Cliente: {order.clientName}</p>
      <p className="text-sm">
        Estado:{" "}
        {order.status === "Cerrada"
          ? "Cerrada"
          : order.status === "Rechazada"
          ? "Rechazada"
          : "Abierta"}
      </p>
      {order.status === "Abierta" && !isRecent && onClose && onReject && (
        <div className="flex space-x-2">
          <ApprovedButton id={order.id.toString()} label="orden" onClick={onClose} />
          <RejectButton id={order.id.toString()} label="orden" onClick={onReject} />
        </div>
      )}
      <button
        className="mt-2 px-4 py-2 text-white bg-blue-600 rounded"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Ocultar Detalles" : "Ver Detalles"}
      </button>

      {showDetails && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>
            <strong>DNI:</strong> {order.clientDNI}
          </p>
          <p>
            <strong>Nombre:</strong> {order.clientName}
          </p>
          <p>
            <strong>Fecha de Nacimiento:</strong> {order.clientDOB}
          </p>
          <p>
            <strong>Domicilio:</strong> {order.clientAddress}
          </p>
          <p>
            <strong>Monto Recibido:</strong> {order.amountReceived} dólares
          </p>
          <p>
            <strong>Monto a Enviar:</strong> {order.amountSent} pesos
          </p>
          <p>
            <strong>Banco Emisor:</strong> {order.sendingBank}
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
                  src={order.clientImage}
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

export default OrderItem;
