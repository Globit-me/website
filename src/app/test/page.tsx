"use client";

import { createUsers, fetchUsers } from "@/actions/test";
import React from "react";

const TestPage = () => {
  const handleCreate = () => {
    createUsers().then(() => {
      console.log("Attempted to create 100 users");
    });
  };

  const handleRead = () => {
    fetchUsers().then(() => {
      console.log("Attempted to read all users");
    });
  };

  return (
    <div className="flex flex-col max-w-6xl md:mx-auto mt-28 mb-8 md:mb-28 md:mt-56 mx-6">
      <button onClick={handleCreate}>click create</button>
      <button onClick={handleRead}>click read</button>
    </div>
  );
};

export default TestPage;
