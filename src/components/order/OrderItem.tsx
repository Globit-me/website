"use client";

import { Order } from "@prisma/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ApprovedButton from "../buttons/ApprovedButton";
import RejectButton from "../buttons/RejectButton"; 
import { approveOrder, getUser, rejectOrder, showBackUserDni, showFrontUserDni } from "@/actions/admin";

interface OrderItemProps {
  order: Order;
}

interface userData {
  id: string;
  name: string;
  email: string;
  dni: string;
  birthday: Date;
  viewedDate: Date;
  address: string;
} 



const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [dniImage, setDniImage] = useState("");
  const [user, setUser] = useState<userData | null>(null);

  const fetchFrontImage = async () => {
    if (!order.userId) return;
    const frontImage = await showFrontUserDni(order.userId);
    setDniImage(frontImage);
    setModalIsOpen(true);
  }

  const fetchBackImage = async () => {
    if (!order.userId) return;
    const backImage = await showBackUserDni(order.userId);
    setDniImage(backImage);
    setModalIsOpen(true);
  }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser(order.userId);
      setUser(user);
    }
    fetchUser();
  }, [order.userId])

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const formatDateString = (date: Date | null): string | null => {
    if (!date) return null;
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`
  }

  const handleOrderApprove = async () => {
    await approveOrder(order.id);
  
  }
  
  const handleOrderReject = async () => {
    await rejectOrder(order.id);
  }

  return (
    <div className="p-4 mb-4 bg-white rounded shadow">
      <h3 className="text-lg font-bold">Orden #{order.id}</h3>
      <p className="text-sm"></p>
      <p className="text-sm">
        Estado: {`${order.status}`}
      </p>
      {order.status === "Abierta" && (
        <div className="flex space-x-3">
          <ApprovedButton id={order.id} label="orden" onClick={handleOrderApprove} />
          <RejectButton id={order.id} label="orden" onClick={handleOrderReject} />
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
        {user !== null && (
          <>
            <p>
              <strong>DNI:</strong> {user.dni}
            </p>
            <p>
              <strong>Nombre:</strong> {user.name}
            </p>
            <p>
              <strong>Fecha de Nacimiento:</strong> {formatDateString(user.birthday)}
            </p>
            <p>
              <strong>Domicilio:</strong> {user.address}
            </p>
          </>
        )}
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
          onClick={fetchFrontImage}
        >
          Ver Frente DNI
        </button>
        <button
          className="mt-2 px-4 py-2 text-white bg-custom-blue rounded"
          onClick={fetchBackImage}
        >
          Ver Reverso DNI
        </button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Large Image Modal"
            className="flex justify-center items-center h-full w-full"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        >
            <div className="relative bg-white p-4 md:p-8 rounded shadow-lg max-w-full max-h-full">
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
                        layout="responsive"
                        width={800}
                        height={500}
                        className="object-contain"
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
