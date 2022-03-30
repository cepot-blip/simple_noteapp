import React from "react";
import { BiLogOut, BiReset } from "react-icons/bi";
import { Modal } from "antd";

const Settings = () => {
  const Logout = () => {
    Modal.confirm({
      title: "Log-out",
      content: "Apa anda ingin Log-out ?",
      onOk: () => {
        window.location.href = "/";
      },
    });
  };

  const resetNote = () => {
    Modal.confirm({
      title: "Reset Note",
      content: "Yakin akan hapus note ?",
      onOk: () => {
        localStorage.setItem("_note", "[]");
      },
    });
  };

  return (
    <main className="w-full h-full flex justify-center items-center gap-4 p-4">
      <button
        className="h-12 w-full flex justify-center items-center bg-blue-400 rounded-md gap-2 ml-auto text-white font-medium"
        type="submit"
        onClick={Logout}
      >
        <BiLogOut className="text-3xl text-white" /> Log-out
      </button>

      <button
        className="h-12 w-full flex justify-center items-center bg-red-400 rounded-md gap-2 ml-auto text-white font-medium"
        type="submit"
        onClick={resetNote}
      >
        <BiReset className="text-3xl text-white" /> Reset
      </button>
    </main>
  );
};

export default Settings;
