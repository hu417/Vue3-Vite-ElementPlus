<template>
  <!-- <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row> -->

  <!-- <button 
    class="bg-pink-600 
      text-yellow-500 
      py-4 px-4 rounded-3xl 
      transition-all delay-100 
      hover:bg-pink-900"
      >
      按钮一
  </button>
  <hr style="color:brown">
  <button class="btn">
      按钮二
  </button> -->

  <router-view></router-view>
</template>

<script setup>

</script>

<style>

#nprogress .bar {
  background-color: rgb(216, 38, 74)!important; 
  height: 3px!important;
}

</style>

<!-- <style scoped>
.btn { 
  @apply bg-pink-600 text-yellow-500 py-4 px-4 rounded-3xl transition-all delay-100 hover:bg-pink-900
}

</style> -->
