import { User } from "@/types/user";

interface RecentViewedDNIListProps {
  users: User[];
}

const RecentViewedDNIList: React.FC<RecentViewedDNIListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="p-4 mb-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">Usuario #{user.id}</h3>
          <p className="text-sm">Nombre: {user.name}</p>
          <p className="text-sm">Email: {user.email}</p>
          <p className="text-sm">
            Estado: {user.status === "approved" ? "Aprobado" : "Rechazado"}
          </p>
          <p className="text-sm">
            Fecha de Visualización: {user.viewedDate?.toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentViewedDNIList;