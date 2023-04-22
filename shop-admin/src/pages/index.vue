<template>
    <div>
        后台首页
    </div>
    <div>
        <el-button @click="set">token设置</el-button>
    </div>
    <div>
        <el-button @click="get">token读取</el-button>
    </div>
    <div>
        <el-button  @click="remove">token删除</el-button>
    </div>


    <!-- setup()语法糖 -->
    <!-- <div>
        <el-button @click="addCount">
            {{ count }}
        </el-button>
        <el-button type="primary" @click="addAge">
            {{ form.age }}
        </el-button>
        <hr style="color: red; margin:20px auto">
        <hello-world/>
    </div> -->
</template>

<script setup>
    // 引入其他组件
    // import HelloWorld from "@/components/HelloWorld.vue";
    
    // ref: 定义基本数据类型函数，reactive: 定义对象数据类型函数；是响应式api数据基础
    // import { ref,reactive } from "vue"

    // let count = ref(1)
    // function addCount(){
    //     count.value ++
    //     console.log(count.value)
    // }

    // const form = reactive({
    //     age: 18
    // })
    // function addAge(){
    //     form.age ++
    //     console.log(form.age)
    // }
    
    // useCookies引入
    import { useCookies} from "@vueuse/integrations/useCookies"

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

</script>