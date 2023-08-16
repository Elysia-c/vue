<!-- 视图层 -->
<template>
    <div class="tabbar">
        <van-tabbar v-model="active" route="">
            <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="chat" badge="5" to="/chat">消息</van-tabbar-item>
            <van-tabbar-item icon="todo-list" to="/wikipedia">百科</van-tabbar-item>
            <van-tabbar-item icon="manager" to="/me">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style  scoped>
.tabbar{
    margin-top: 10vw;
}
</style>
