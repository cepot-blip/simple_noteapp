import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { handleCreate } from "./handleCreate";

const Create = () => {
  return (
    <main className="w-full min-h-full flex flex-col gap-4 p-6">
      <form className="w-full flex flex-col gap-4" onSubmit={handleCreate}>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="title" className="text-white font-medium">
            Judul note
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="h-12 px-4 bg-white outline-none rounded-md"
            placeholder="Masukan judul"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="note" className="text-white font-medium">
            Note
          </label>
          <textarea
            type="text"
            name="content"
            id="content"
            className="p-4 bg-white outline-none h-[200px] rounded-md"
            placeholder="Semoga harimu menyenangkan"
          ></textarea>
        </div>

        <button
          className="h-12 w-36 flex justify-center items-center bg-blue-400 rounded-md gap-2 ml-auto text-white font-medium"
          type="submit"
        >
          <AiOutlineDownload className="text-3xl text-white" /> Save
        </button>
      </form>
    </main>
  );
};

export default Create;
