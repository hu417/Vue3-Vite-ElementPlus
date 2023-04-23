// 引入router
import router from '@/router/index'
import { getToken } from '@/composables/auth'
import { 
    toast,
    showFullLoading,
 } from '@/composables/utils'
import store from '@/store'
import { hideFullLoading } from './composables/utils'

// 全局路由前置守卫
router.beforeEach(async (to,from,next) => {
    console.log("前置路由守卫")
    console.log(to," <--- ",from)
    
    // 显示loading
    showFullLoading()

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

    // 如果用户登录了。自动获取用户信息，并存储到vuex中
    if (token) {
        await store.dispatch("getinfo")
    }

    // 设置页面标题
    let title = (to.meta.title ? to.meta.title : "") + "-电商后台"
    document.title = title

    // 放行
    next()
})


// 全局后置守卫
router.afterEach((to, from) => {
    // sendToAnalytics(to.fullPath)

    // 路由加载完成后关闭loading
    hideFullLoading()

})
  