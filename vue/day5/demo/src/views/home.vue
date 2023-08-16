<!-- 视图层 -->
<template>
    <div class="home">
        <div class="seach">
            <form action="/">
                <van-search
                    v-model="value"
                    placeholder="请输入搜索关键词"
                    @search="onSearch"
                />
                <span>长沙</span>
            </form>
        </div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style  scoped>
.seach{
    padding: 0 10px;

    form{
        display: flex;
        justify-content: center;
        align-items: center;

        .van-search{
            flex: 1;
            padding-right: 0;
        }

        span{
            width: 60px;
            font-size: 16px;
            color: #000;
            text-align: center;
        }
    }
}
</style>
