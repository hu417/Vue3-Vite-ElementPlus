<template>
    <div class="f-header">
        <span class="logo">
            <el-icon class="mr-2"><House /></el-icon>
            知之为知之
        </span>
        <!-- 折叠 -->
        <el-icon class="icon-btn"><Fold /></el-icon>
        <!-- 刷新 -->
        <el-tooltip
            effect="dark"
            content="刷新"
            placement="bottom-start"
            >
            <el-icon class="icon-btn" @click="handleRefresh"><Refresh /></el-icon>
        </el-tooltip>
       
        <div class="ml-auto flex items-center justify-center" >
            <!-- 视频 -->
            <el-icon class="icon-btn"><VideoCamera /></el-icon>
            <!-- 全屏 -->
            <el-tooltip
                effect="dark"
                content="全屏"
                placement="bottom-start"
                >
                <el-icon class="icon-btn" @click="toggle ">
                    <FullScreen v-if="!isFullscreen"/>
                    <HelpFilled v-else/>
                </el-icon>
            </el-tooltip>
            <!-- 下拉框 -->
            <el-dropdown class="dropdown" @command="handleCommand">
                <span class="flex items-center text-light-50">
                    <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
                    {{  $store.state.user.username }}
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="rePassword">修改密码</el-dropdown-item>
                    <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
        </div>
        头部
    </div>
</template>

<script setup>
// useCookies引入
import { useCookies } from "@vueuse/integrations/useCookies"

// 退出登录
import { logout } from "@/api/manager"
import { showModal,toast } from "@/composables/utils"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { useFullscreen } from '@vueuse/core'

const { 
    // 是否全屏
    isFullscreen,
    // 切换(全屏/退出全屏)
    toggle 
} = useFullscreen()

const cookie = useCookies()
function set(){
    cookie.set("admin-token", "1234")
}
function get(){
    console.log(cookie.get("admin-token"))
}
function remove(){
    cookie.remove("admin-token")
}

const router = useRouter()
const store = useStore()

// 点击执行
const handleCommand = (c) => {
    switch (c) {
        case "logout":
            console.log(c)
            handleLogout();
            break
        case "rePassword":
            console.log("修改密码")
            break
    }
}

// 刷新
const handleRefresh = ()=> location.reload()

function handleLogout() {
    showModal("是否退出登录","warning").then(res=>{
        console.log(res)
        logout()
        .finally(()=>{
            // 删除cookie中的token
            // 清除当前用户状态vuex
            store.dispatch("logout")

            // 返回登录页面
            router.push("/login")

            // 提示退出登录成功
            toast("退出登录成功","success")
        })
        
    })
}

</script>

<style>
.f-header {
    @apply flex bg-purple-500 text-light-50 fixed top-0 left-0 right-0;
    height: 64px;
}

.logo {
    width: 250px;
    @apply flex justify-center items-center text-xl font-thin;
}

.icon-btn {
    @apply flex justify-center items-center;
    width: 42px;
    height: 64px;
    cursor: pointer;
}

.icon-btn:hover {
    @apply bg-indigo-300;
}

.f-header .dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex items-center justify-center mx-5;
}
</style>