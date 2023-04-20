import { createApp } from 'vue'

// 引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

import 'virtual:windi.css'

app.mount('#app')
