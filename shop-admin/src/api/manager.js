import axios from "@/axios";


// 管理员接口

// login api
export function login(username, password) {
    // post请求
    return axios.post('/admin/login',{
        username,
        password
    })

}

// userinfo api
export function getinfo() {
    // post 请求
    return axios.post('/admin/getinfo')
}

// logout api
export function logout() {
    // post 请求
    return axios.post('/admin/logout')
}