import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    // 状态管理
    state () {
        return {
            // 用户信息
            user: {}
        }
    },
    // 参数修改
    mutations: {
        // 记录用户信息
        SET_USERINFO(state,user) {
            state.user = user
        }
    }
})


export default store