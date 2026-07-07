import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import path from "path";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [react(), tailwindcss()],
    };
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      libInjectCss(),
      dts({
        insertTypesEntry: true,
        exclude: ["src/App.tsx", "src/main.tsx"],
      }),
    ],

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "BibhuUI",
        formats: ["es", "cjs"],
        fileName: (format) => `index.${format}.js`,
      },

      rollupOptions: {
        external: ["react", "react-dom"],
      },

      sourcemap: true,
      emptyOutDir: true,
    },
  };
});
