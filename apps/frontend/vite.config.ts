/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: 5173,
    strictPort: true,
  },
  server: {
    strictPort: true,
    host: true,
  },
});
