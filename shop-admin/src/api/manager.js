import axios from "@/axios";


// 管理员接口

// login api
export function login(username, password) {
    // login请求
    return axios.post('/admin/login',{
        username: username,
        password: password
    })

}

