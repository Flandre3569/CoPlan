import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    open: false,
    proxy: {
      "/api": {
        // 在此填写后端接口API
        target: "http://127.0.0.1:9999",
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false, // 设置支持https协议的代理
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
