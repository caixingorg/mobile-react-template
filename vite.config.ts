import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import postcssPxtorem from "postcss-pxtorem";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        sw: "public/sw.js",
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      strategies: "injectManifest",
      srcDir: "public",
      filename: "sw.js",
      manifestFilename: "manifest.json",
      injectManifest: {
        injectionPoint: null,
      },
    }),
  ],
  optimizeDeps: {
    include: ["web-vitals"],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${path.resolve(
          __dirname,
          "src/styles/variables.less"
        )}";`,
      },
    },
    postcss: {
      plugins: [
        autoprefixer(),
        postcssPxtorem({
          rootValue: 37.5,
          propList: ["*"],
          selectorBlackList: [/^html$/],
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env": {},
  },
});
