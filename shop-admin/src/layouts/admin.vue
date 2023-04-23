<template>
    <el-container> 
        <el-header>
            <!-- 头部 -->
            <f-header/>
        </el-header>
        <el-container>
            <el-aside>
                <!-- 侧边 -->
                <f-menu/>
            </el-aside>
            <el-main>
                <!-- 标签导航 -->
                <f-taglist/>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>


<script setup>

// 引入
import FHeader from './components/FHeader.vue';
import FMenu from './components/FMenu.vue';
import FTaglist from './components/FTaglist.vue';

</script>