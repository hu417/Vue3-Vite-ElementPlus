<template>
    <div>
        后台首页
    </div>

    <!-- setup()语法糖 -->
    <div>
        <el-button @click="addCount">
            {{ count }}
        </el-button>
        <el-button type="primary" @click="addAge">
            {{ form.age }}
        </el-button>
        <hr style="color: red; margin:20px auto">
        <hello-world/>
    </div>
</template>

<script setup>
    // 引入其他组件
    import HelloWorld from "@/components/HelloWorld.vue";
    
    // ref: 定义基本数据类型函数，reactive: 定义对象数据类型函数；是响应式api数据基础
    import { ref,reactive } from "vue"

    let count = ref(1)
    function addCount(){
        count.value ++
        console.log(count.value)
    }

    const form = reactive({
        age: 18
    })
    function addAge(){
        form.age ++
        console.log(form.age)
    }


</script>