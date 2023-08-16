<!-- 视图层 -->
<template>
    <div>
      <home></home>  
      <Tabbar></Tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
import Tabbar from './components/Tabbar.vue';
import home from './views/home.vue';
</script>


<!-- 样式层 -->
<style  scoped></style>
