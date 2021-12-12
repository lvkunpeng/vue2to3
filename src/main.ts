import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import store from "/@/store";
import 'element-plus/dist/index.css'
import App from './App.vue'
const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.mount('#app')
