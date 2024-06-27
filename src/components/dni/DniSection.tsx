"use client";
import {
  approveUser,
  rejectUser,
  showRecentViewedUsers,
  showUsersToVerify,
} from "@/actions/admin";
import RecentViewedDNIList from "./RecentViewedDniList";
import DniItem from "./DniItem";
import { useEffect, useState } from "react";
import { User } from "@/types/user";

const DniSection = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [recentViewedUsers, setRecentViewedUsers] = useState<User[] | null>(
    null
  );

  const fetchUsers = async () => {
    const users = await showUsersToVerify();
    setUsers(users);
    const recentViewedUsers = await showRecentViewedUsers();
    setRecentViewedUsers(recentViewedUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleApprove = async (id: string | null) => {
    if (!id) return;
    await approveUser(id);
    fetchUsers();
  };

  const handleReject = async (id: string | null) => {
    if (!id) return;
    await rejectUser(id);
    fetchUsers();
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl md:text-3xl font-semibold text-custom-blue mb-4 underline">
        DNIs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-4">DNIs por Aprobar</h2>
          {users ? (
            users.map((user) => (
              <DniItem
                key={user.id}
                user={user}
                onApprove={handleApprove}
                onReject={handleReject}
              />
            ))
          ) : (
            <p>No hay DNIs por aprobar</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">DNIs Recientes</h2>
          {recentViewedUsers ? (
            <RecentViewedDNIList users={recentViewedUsers} />
          ) : (
            <p>No hay DNIs recientes</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DniSection;
