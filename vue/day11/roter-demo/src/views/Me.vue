<!-- 视图层 -->
<template>
    我的组件
    <RouterLink to="/navbar">登录</RouterLink>
    <Tabbar/>
</template>

<!-- 逻辑层 -->
<script setup>
// 引入tabbar组件
import Tabbar from '../components/tabbar.vue';

</script>


<!-- 样式层 -->
<style lang="less" scoped>       
</style>