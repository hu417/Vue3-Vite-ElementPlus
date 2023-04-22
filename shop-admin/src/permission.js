// 引入router
import router from '@/router/index'
import { getToken } from '@/composables/auth'
import { toast } from '@/composables/utils'

// 全局路由前置守卫
router.beforeEach((to,from,next) => {
    console.log("前置路由守卫")
    console.log(to," <--- ",from)
    
    const token = getToken()
    
    // token判断是否已登陆
    if (!token && to.path != '/login') {
        toast("请先登录","error")
        // next放行
        return next({ path: '/login' })
    }

    // 防止重复登录
    if (token && to.path == '/login') {

        return next({ path: from.path ? from.path : '/login' })
    }

    // 放行
    next()
})
