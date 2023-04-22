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
    // get 请求
    return axios.post('/admin/getinfo')
}

