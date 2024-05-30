import React from "react";
import { User } from "@/types/user";

interface RecentViewedDNIListProps {
  users: User[];
  onRevert: (id: number) => void;
}

const RecentViewedDNIList: React.FC<RecentViewedDNIListProps> = ({ users, onRevert }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="p-4 mb-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">Usuario #{user.id}</h3>
          <p className="text-sm">Nombre: {user.name}</p>
          <p className="text-sm">Email: {user.email}</p>
          <p className="text-sm">Estado: {user.status === 'approved' ? 'Aprobado' : 'Rechazado'}</p>
          <p className="text-sm">Fecha de Visualización: {user.viewedDate?.toLocaleString()}</p>
          <button
            className="mt-2 px-4 py-2 text-white bg-yellow-600 rounded"
            onClick={() => onRevert(user.id)}
          >
            Revertir Decisión
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecentViewedDNIList;
