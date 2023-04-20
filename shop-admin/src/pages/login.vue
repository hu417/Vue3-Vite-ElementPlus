<template>
    <!-- 采用Layout布局 -->
    <!-- min-heigh最小高度 -->
    <!-- <el-row style="min-height:100vh;" class="bg-blue-500"> 行 -->
    <el-row class="min-h-screen bg-indigo-500">
        <!-- 列 -->
        <!-- items-center垂直方向； justify-center水平方向; flex-col垂直方向-->
        <el-col :span="16" class="flex items-center justify-center flex-col">
            <div>
                <!-- mb-4 => margin-bottom: 1rem -->
                <div class="text-5xl font-bold text-light-500 mb-4">
                    欢迎光临
                </div>
                <div class="text-sm text-light-500">
                    这是vue3实战电商项目
                </div>
            </div>
        </el-col>
        <el-col :span="8" class="bg-light-50 flex items-center justify-center flex-col">
            <h2 class="font-bold text-4xl text-gray-800">欢迎回来!</h2>
            <!-- space-x-2：x方向间距 -->
            <div class="flex items-center justify-center flex-row my-5 text-gray-400 space-x-2">
                <span class="h-[1px] w-16 bg-gray-400"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-400"></span>
            </div>
            <el-form :model="form" class="w-[250px]">
                <el-form-item>
                  <el-input v-model="form.name" placeholder="请输入用户名"/>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" placeholder="请输入密码"/>
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

// do not use same name with ref
const form = reactive({
  name: '',
  password: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>