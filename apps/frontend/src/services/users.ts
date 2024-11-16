import { CreateUser } from "../libs";
import { api } from "../utils";

const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error(`[ERROR] getUsers`, error);
    return [];
  }
};

const createUser = async (user: CreateUser) => {
  try {
    const { data } = await api.post("/users", user);
    return data;
  } catch (error) {
    console.error(`[ERROR] createUser`, error);
    return error;
  }
};

export { createUser, getUsers };
