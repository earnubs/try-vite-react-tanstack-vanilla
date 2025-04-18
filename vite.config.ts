// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // generate .vite/manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: "./src/index.tsx",
    },
    cssMinify: "lightningcss",
  },
  plugins: [
    vanillaExtractPlugin(),
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      cssModules: true,
    },
  },

  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
