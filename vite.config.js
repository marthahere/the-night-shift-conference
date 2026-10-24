import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const pagesBasePath = process.env.VITE_BASE_PATH ?? "";
const base = pagesBasePath
  ? `/${pagesBasePath.replace(/^\/+|\/+$/g, "")}/`
  : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
