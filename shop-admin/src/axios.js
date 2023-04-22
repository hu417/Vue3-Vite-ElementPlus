import axios from "axios"

// 引入通知组件
// import { ElNotification } from 'element-plus'
import { toast } from '@/composables/utils'

// useCookies引入
// import { useCookies} from "@vueuse/integrations/useCookies"
import { getToken } from '@/composables/auth'


// 创建axios实例
const service = axios.create(
    {
        // 登录api：http://dishaxy.dishait.cn/shopadminapi#7f8ce15f-7b6a-4d3d-ab72-1c45fee9bf92
        // baseURL: 'http://ceshi13.dishait.cn',

        // 使用代理
        baseURL: '/api',
        // data: JSON.stringify(data),
    }
)

// 添加请求拦截器: 请求之前的处理，如token的处理
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    // 往header里自动添加token
    // const cookie = useCookies()
    // const token = cookie.get("admin-token")
    const token = getToken()
    if (token) {
        config.headers["token"] = token
    }
    config.headers["Content-Type"] = "application/json;charset=UTF-8"
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });


// 添加响应拦截器：响应参数的处理，如返回的数据处理
service.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么

        return response.data.data;
    }, 
    function (error) {
        // 对响应错误做点什么
        // 通知设置
        toast(error.response.data.msg || '请求失败',"error")
        // ElNotification({
        //     // title: 'Error',
        //     message: error.response.data.msg || '请求失败',
        //     type: 'error',
        //     duration: 2000,  // 停留时间
        //     position: 'top-right',  // 弹出位置
        // })
        return Promise.reject(error);
    }
);




export default service