import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import reactJsx from "vite-react-jsx";

import legacy from "@vitejs/plugin-legacy";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [
    legacy(),
    reactRefresh(),
    reactJsx(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
