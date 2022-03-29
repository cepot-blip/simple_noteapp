import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../../components/bottomNav/BottomNav";
import { checkNote } from "./create/handleCreate";

const Dashboard = () => {
  useEffect(() => {
    checkNote();
  }, []);
  return (
    <main className="w-screen h-screen flex flex-col bg-blue-300">
      <Outlet />

      <BottomNav />
    </main>
  );
};

export default Dashboard;
