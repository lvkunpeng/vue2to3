import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// export default defineConfig({
  
// })
module.exports = {
  plugins: [vue()],
  alias: {
    "/@/": pathResolve("src"),
  },
  optimizeDeps: {
    include: ["@ant-design/icons-vue"],
  },
};

