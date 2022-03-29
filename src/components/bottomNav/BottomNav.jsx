import React from "react";
import { Link } from "react-router-dom";
import { FcBarChart, FcPlus, FcSettings } from "react-icons/fc";
const BottomNav = () => {
  return (
    <div className="fixed flex bottom-0 left-0 w-screen h-24 p-4">
      <div className="w-full flex h-full items-center bg-white text-black rounded-full select-none">
        <Link
          to="/dashboard/home"
          className="flex justify-center items-center flex-1 text-4xl"
        >
          <FcBarChart />
        </Link>

        <Link
          to="/dashboard/create"
          className=" flex justify-center items-center flex-1 text-7xl -mt-16"
        >
          <FcPlus
            style={{ boxShadow: "4px 5px 6px rgba(0,0,0,0.3)" }}
            className="rounded-full"
          />
        </Link>

        <Link
          to="/dashboard/settings"
          className=" flex justify-center items-center flex-1 text-4xl"
        >
          <FcSettings />
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
