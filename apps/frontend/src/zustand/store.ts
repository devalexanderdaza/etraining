import { create } from "zustand";

// Initial states
import { UISlice } from "../libs";

// Slices
import createUISlice from "../libs/slices/uiSlice";
import createAuthSlice, { AuthState } from "../libs/slices/authSlice";

export const useUIStore = create<UISlice>()((...a) => createUISlice(...a));
export const useAuthStore = create<AuthState>((...a) => createAuthSlice(...a));
