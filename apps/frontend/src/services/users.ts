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

const createUser = async (data: CreateUser) => {
  try {
    const response = await api.post("/users", data);
    return response.data;
  } catch (error) {
    console.error(`[ERROR] createUser`, error);
    return [];
  }
};

export { createUser, getUsers };
