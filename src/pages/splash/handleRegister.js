import bcryptjs from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

const salt = bcryptjs.genSaltSync(10);

export const HandleRegister = async (e) => {
  try {
    e.preventDefault();
    const { email, password } = e.target;

    if (!email.value || !password.value) {
      return alert("Silahkan lengkapi data anda");
    }

    let newUser = {
      id: uuidv4(),
      email: email.value,
      password: bcryptjs.hashSync(password.value, salt),
      createdAt: moment().format("DD/MM/YYYY hh:mm:ss"),
    };

    localStorage.setItem("_users", JSON.stringify(newUser));

    return true;
  } catch (error) {
    return error;
  }
};
