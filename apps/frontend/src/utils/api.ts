import axios from "axios";
import { useUIStore, useAuthStore } from "../zustand/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error(`[ERROR] api`, error);

    if (
      error.response &&
      [400, 401, 403, 404, 500].includes(error.response.status)
    ) {
      useUIStore.getState().newAlert({
        id: "error",
        severity: "error",
        message: `Error ${error.response.status}: ${
          error.response.data.detail || error.response.data.errors[0]
        }`,
      });
    }
    return Promise.reject(error);
  }
);

export { api };
