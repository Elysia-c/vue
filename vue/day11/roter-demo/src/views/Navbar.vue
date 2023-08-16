<template>
    <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
</template>

<!-- 逻辑层 -->
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function onClickLeft(){
    // history.back();
    router.push('/');
}

</script>


<!-- 样式层 -->
<style lang="less" scoped>       
</style>