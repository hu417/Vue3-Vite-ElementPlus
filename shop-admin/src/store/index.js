import { createStore } from 'vuex'
import { login,getinfo } from '@/api/manager'
import { setToken } from '@/composables/auth'

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
    },

    actions: {
        // 登录
        login({ commit }, { username,password }){
            return new Promise((resolve, reject) =>{
                login(username,password).then(res =>{
                    setToken(res.token)

                    resolve(res)
                }).catch(err =>reject(err))
            })
        },


        // 获取当前用户登录信息
        getinfo({ commit }){
            getinfo().then(res=>{
                return new Promise((resolve,reject) => {
                    getinfo().then(res => {
                        commit("SET_USERINFO",res)
                        resolve(res)
                    }).catch(err => reject(err))
                })
            })
        }
    }
})


export default store