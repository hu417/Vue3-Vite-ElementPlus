import { createApp } from 'vue'

// 引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入router
import router from './router'

// 全局引入icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 引入vuex
import store from './store'


import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

app.use(router)

app.use(ElementPlus)

app.use(store)

import 'virtual:windi.css'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

import "@/permission"

app.mount('#app')
