import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default {
  plugins: [reactRefresh()],
};

// export default defineConfig({
//   plugins: [react(), reactRefresh()],
// });
