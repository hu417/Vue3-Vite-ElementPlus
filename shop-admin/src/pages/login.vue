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
                    <el-button round class="w-[250px]" type="primary" @click="onSubmit">登录</el-button>
                    
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>


<script setup>
import { ref,reactive } from 'vue'

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


const onSubmit = () => {
    formRef.value.validate((valid)=>{
        if(!valid) {
            return false;
        }
        console.log('验证通过!')
    })
    
}
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