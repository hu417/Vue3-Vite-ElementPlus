<template>
    <div>
        <!-- result结果组件 -->
        <el-result
            icon="error"
            title="404 提示"
            sub-title="页面找不到了！！！"
        >
            <template #extra>
                <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
            </template>
        </el-result>
          
    </div>
</template>