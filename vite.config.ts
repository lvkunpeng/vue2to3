import { defineConfig } from "vite";
// 默认情况ts不认识一些模块包。但是也会去进行查找校验，此时需要手动引入改包或者模块的 @types声明包  eg: npm install @types/node --save-dev  从而识别此处的node模块
import { resolve} from "path";
import vue from "@vitejs/plugin-vue";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

export default defineConfig({
  // 直接alias不被推荐了。需要放到resolve中
  resolve: {
    alias: {
      "@": pathResolve("src"),
    },
  },
  plugins: [vue()],

});