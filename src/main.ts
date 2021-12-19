import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// 这种引入利用别名的引入写法会引起ts报找不到模块的错误。这种需要在tsconfig文件中进行编译配置更改，加入对应的compilerOptions
import store from "@/store";
import 'element-plus/dist/index.css'
import App from './App.vue'
const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.mount('#app')
