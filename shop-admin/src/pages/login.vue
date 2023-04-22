<template>
    <!-- 采用Layout布局 -->
    <!-- min-heigh最小高度 -->
    <!-- <el-row style="min-height:100vh;" class="bg-blue-500"> 行 -->
    <el-row class="login-container">
        <!-- 列 -->
        <!-- :span是栅格，默认是24个栅格；:lg是表示>120px时的栅格数; :md表示>990px时的栅格数 -->
        <!-- items-center垂直方向； justify-center水平方向; flex-col垂直方向-->
        <el-col :lg="16" :md="12" class="left">
            <div>
                <!-- mb-4 => margin-bottom: 1rem -->
                <div>
                    欢迎光临
                </div>
                <div>
                    这是vue3实战电商项目
                </div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2>欢迎回来!</h2>
            <!-- space-x-2：x方向间距 -->
            <div>
                <span></span>
                <span>账号密码登录</span>
                <span></span>
            </div>
            <!-- 
                ref="formRef" ref：表单被引用时的名称，标识
                rules 属性传入约定的验证规则 
                model：表单数据对象 -->
            <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                <el-form-item prop="username">
                    <!-- v-model：绑定的表单数据对象属性 -->
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon><user /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="form.password" 
                        placeholder="请输入密码" show-password>
                        <template #prefix>
                            <el-icon><Lock /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                
                <el-form-item>
                    <!-- round圆角 -->
                    <el-button round class="w-[250px]" type="primary" :loading="loading" @click="onSubmit">登录</el-button>
                    
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>


<script setup>
import { ref,reactive,onMounted,onBeforeUnmount } from 'vue'
// 引入接口函数
// import { login,getinfo }  from '@/api/manager'
// import { login }  from '@/api/manager'

// // 引入通知组件
// import { ElNotification } from 'element-plus'
import { toast } from '@/composables/utils'

// 引入路由
import { useRouter } from 'vue-router'
const router = useRouter()

// useCookies引入
// import { useCookies} from "@vueuse/integrations/useCookies"

// import { setToken } from '@/composables/auth'

import { useStore } from 'vuex'
const store = useStore()
// 按需引入icon图标组件
//import { User, Lock } from '@element-plus/icons-vue'


// 表单对象
const formRef = ref(null)

// do not use same name with ref
const form = reactive({
  username: '',
  password: '',
})

// rules验证规则
const rules = reactive({
    // 与 prop对应的值相等
    username: [
            { 
                required: true,  // required: 必填
                message: '请输入用户名', // 提示信息
                trigger: 'blur'  // 失去焦点时
            },
            { 
                min: 1, max: 6,  // 字符长度
                message: '长度在1~6个字符内', 
                trigger: 'blur'
            },
        ],
    password: [
            { 
                required: true,  // required: 必填
                message: '请输入密码', // 提示信息
                trigger: 'blur'  // 失去焦点时
            },
            { 
                min: 1, max: 6,  // 字符长度
                message: '长度在1~6个字符内', 
                trigger: 'blur' 
            },
        ],  
})

const loading = ref(false)

const onSubmit = () => {
    formRef.value.validate((valid)=>{
        if(!valid) {
            return false;
        }
        // console.log('验证通过!')

        // 请求之前设置true
        loading.value = true;

        // 登录的封装
        store.dispatch('login', form).then(() => {
            toast("登录成功","success")
            router.push('/')
        }).finally(() => {
            loading.value = false   
        })
        // 调用login：默认登录信息: admin/admin
        // login(form.username, form.password)
        // // 捕获请求成功信息
        // .then(res => {
        //     console.log(res) // token信息

        //     // 通知设置
        //     toast('登录成功','success')
        //     // ElNotification({
        //     //     // title: 'Success',
        //     //     message: '登录成功',
        //     //     type: 'success',
        //     //     duration: 1000,  // 停留时间
        //     //     position: 'top-right',  // 弹出位置，
        //     // })

        //     // token存储
        //     // const cookie = useCookies()
        //     // cookie.set("admin-token",res.token)
        //     // setToken(res.token)

        //     // 获取用户相关信息
        //     // getinfo().then((res2) => {
        //     //     // console.log(res2)
        //     //     store.commit("SET_USERINFO",res2)

        //     // })

        //     // 登录成功后进行跳转
        //     router.push('/')
        // })
        // // 捕获异常，请求失败信息
        // .catch(err => {
        //     console.log(err.response.data.msg)
        // })
        
        // .finally(() => {
        //     loading.value = false   
        // })
    }) 
}

// 监听回车事件
function onKeyUp(e){
    if (e.key == "Enter") onSubmit();
}

// 添加键盘监听
onMounted(() => {
    document.addEventListener("keyup", onKeyUp);
}),

// 移除键盘监听
onBeforeUnmount(() => {
    document.removeEventListener("keyup", onKeyUp);
})

</script>

<style>
.login-container {
    @apply min-h-screen bg-indigo-500
}

.login-container .left, .login-container .right {
    @apply flex items-center justify-center flex-col
}

.left>div>div:first-child {
    @apply text-5xl font-bold text-light-500 mb-4
}
.left>div>div:last-child{
    @apply text-sm text-light-500
}

.login-container .right {
    @apply bg-light-50
}
.right>h2 {
    @apply font-bold text-4xl text-gray-800
}
.right>div {
    @apply flex items-center justify-center flex-row my-5 text-gray-400 space-x-2
}
.right>div>span:first-child, .right>div>span:last-child {
    @apply h-[1px] w-16 bg-gray-400
}

</style>