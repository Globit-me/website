"use client";

import React, { useState } from "react";
import { User } from "@/types/user";
import DNIItem from "./DNIItem";
import dayjs from "dayjs";
import RecentViewedDNIList from "./RecentViewedDNIList";

const DniSection: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Juan Perez",
      email: "juan.perez@example.com",
      dni: "12345678",
      dob: "1990-01-01",
      address: "Calle Falsa 123",
      dniImage: "/dni.jpg",
      status: null, // null, 'approved', 'rejected'
      viewedDate: null,
    },
    {
      id: 2,
      name: "Maria Gomez",
      email: "maria.gomez@example.com",
      dni: "87654321",
      dob: "1985-05-05",
      address: "Avenida Siempre Viva 742",
      dniImage: "/dni.jpg",
      status: null,
      viewedDate: null,
    },
    // Otros usuarios...
  ]);

  const handleApprove = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, status: "approved", viewedDate: new Date() }
          : user
      )
    );
  };

  const handleReject = (id: number) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id
          ? { ...user, status: "rejected", viewedDate: new Date() }
          : user
      )
    );
  };

  const recentViewedUsers = users.filter(
    (user) =>
      user.viewedDate &&
      dayjs(user.viewedDate).isAfter(dayjs().subtract(2, "day"))
  );

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl md:text-3xl font-semibold text-custom-blue mb-4 underline">
        DNIs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-4">DNIs por Aprobar</h2>
          {users
            .filter((user) => !user.status)
            .map((user) => (
              <DNIItem
                key={user.id}
                user={user}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            ))}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">DNIs Vistos Recientemente</h2>
          {recentViewedUsers.length > 0 ? (
            <RecentViewedDNIList users={recentViewedUsers} />
          ) : (
            <p>No hay DNIs vistos recientemente</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DniSection;
