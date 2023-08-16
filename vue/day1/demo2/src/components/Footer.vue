<!-- 视图层 -->
<template>
    <div class="footer">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
    </div>
</template>
<!-- 逻辑层 -->
<script setup>

</script>
<!-- 样式层 -->
<style  scoped>
.footer {
    background-color: #e412c1;
    width: 900px;
    height: 100px;
}

.footer .box {
    padding: 10px;
    width: 300px;
    height: 100px;
    background-color: #081bc5;
    float: left;
}
</style>