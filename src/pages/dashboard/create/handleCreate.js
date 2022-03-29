import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const handleCreate = async (e) => {
  e.preventDefault();

  try {
    const { title, content } = e.target;

    if (!title.value || !content.value) {
      return alert("Silahkan isi note");
    }

    let newNote = {
      id: uuidv4(),
      title: title.value,
      content: content.value,
      createdAt: moment().format("DD/MM/YYYY hh:mm:ss"),
    };

    let getPrevNote = await localStorage.getItem("_note");
    getPrevNote = await JSON.parse(getPrevNote);
    getPrevNote = [...getPrevNote, newNote];

    let storeLocal = await localStorage.setItem(
      "_note",
      JSON.stringify(getPrevNote)
    );
    return window.location.href("/dashboard");
  } catch (error) {
    alert("Berhasil");
  }
};

export const checkNote = async () => {
  try {
    const checkNote = await localStorage.getItem("_note");
    if (!checkNote) {
      return localStorage.setItem("_note", "[]");
    }

    let parseNote = await JSON.stringify(checkNote);
    return parseNote;
  } catch (error) {
    console.error(error);
  }
};
