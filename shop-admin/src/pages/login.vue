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
            <el-form :model="form" class="w-[250px]">
                <el-form-item>
                    <el-input v-model="form.name" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon><user /></el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码">
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
import { reactive } from 'vue'

// 按需引入
//import { User, Lock } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
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