import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import path from "path";

const externalDeps = [
  "react",
  "react-dom",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
];

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
        tsconfigPath: "./tsconfig.app.json",
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
        formats: ["es"],
        fileName: (format) => `index.${format}.js`,
      },

      rollupOptions: {
        external: (id) =>
          externalDeps.some((dep) => id === dep || id.startsWith(`${dep}/`)),
      },

      sourcemap: true,
      emptyOutDir: true,
    },
  };
});
