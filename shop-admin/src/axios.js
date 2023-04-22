import axios from "axios"


// 创建axios实例
const service = axios.create(
    {
        // 登录api：http://dishaxy.dishait.cn/shopadminapi#7f8ce15f-7b6a-4d3d-ab72-1c45fee9bf92
        // baseURL: 'http://ceshi13.dishait.cn',

        // 使用代理
        baseURL: '/api',
    }
)

export default service