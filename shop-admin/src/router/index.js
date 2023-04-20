import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Index from '@/pages/index.vue'
import About from '@/pages/about.vue'
import NotFound from '@/pages/404.vue'


// 定义路由
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound }
  ]


// 创建实例
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  })


export default router;