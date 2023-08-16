<!-- 视图层 -->
<template>
  <div class="home">
    <!-- 文本行内元素标签 -->
    <span class="iconfont icon-31mima"></span>

    <h1 class="footer">APP组件页面</h1>
    <!-- 使用组件 ：单标签组件，双标签组件 -->
    <Top></Top>
    <Content />
    <Footer />
  </div>
</template>

<!-- 逻辑层 -->
<script setup>
// 1.导入组件
import Content from './components/Content.vue';
import Footer from './components/Footer.vue';
import Top from './components/Top.vue';

</script>


<!-- 样式层 -->
<style  scoped>
/* .home {
  color: #fff;
} */

.icon-letter {
  color: rgb(18, 11, 226);
  font-size: 100px;
}

.icon-weixin {
  color: #0f0;
  font-size: 100px;
}

/* .footer {
  background-color: #e412c1;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 30px;
} */

* {
  margin: 0;
}
</style>