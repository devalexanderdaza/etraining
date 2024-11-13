import { StateCreator } from "zustand";
import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const createAuthSlice: StateCreator<AuthState> = (set) => ({
  token: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/auth/login`, {
        email,
        password,
      });

      const { accessToken } = response.data;
      set({ token: accessToken, isAuthenticated: true });
    } catch (error) {
      console.error("Login failed", error);
      set({ token: null, isAuthenticated: false });
    }
  },
  logout: () => set({ token: null, isAuthenticated: false }),
});

export default createAuthSlice;
export type { AuthState };
