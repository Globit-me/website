import { User } from "@/types/user";

interface RecentViewedDniListProps {
  users: User[];
}

const RecentViewedDniList: React.FC<RecentViewedDniListProps> = ({ users }) => {
  const formatDateString = (
    date: Date | null 
  ): string | null => {
    if (!date) return null;
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className="p-4 mb-4 bg-white rounded shadow">
          <h3 className="text-lg font-bold">Usuario: {user.name}</h3>
          <p className="text-sm">Email: {user.email}</p>
          <p className="text-sm">
            Estado: {user.status === "approved" ? "Aprobado" : "Rechazado"}
          </p>
          <p className="text-sm">
            Fecha de Visualización: {formatDateString(user?.viewedDate)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecentViewedDniList;
