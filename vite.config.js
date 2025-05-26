import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "d10e-2001-448a-2077-32f-f53a-2493-2f74-a7a3.ngrok-free.app", // tambahkan host ini
    ],
  },
});
