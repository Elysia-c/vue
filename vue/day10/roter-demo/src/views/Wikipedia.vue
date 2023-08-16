<!-- 视图层 -->
<template>
    <div class="top">
        <van-nav-bar title="标题" left-text="" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="body">
        <van-tabs v-model:active="active" color="#64bcb8" title-active-color="#64bcb8">
            <van-tab title="推荐">
                <div class="title">
                    房地产确定要回暖?
                </div>
                <div class="text-new">
                    <div class="new-body">
                        <div class="new-title">
                            管清友: 核心城市房地产触底回暖 非核心城市泡沫回调
                        </div>
                        <div class="new-foot">
                            <span>凤凰网房产</span>
                            <span>1685次阅读</span>
                        </div>
                    </div>
                </div>
                <div class="text-new">
                    <div class="new-body">
                        <div class="new-title">
                            专家解读两会表述:2019楼市调控政策将宽于去年
                        </div>
                        <div class="new-foot">
                            <span>搜狐焦点</span>
                            <span>1685次阅读</span>
                        </div>
                    </div>
                </div>
                <div class="text-new add-img">
                    <div class="new-body">
                        <div class="new-title   color">
                            专家解读两会表述:2019楼市调控政策将宽于去年
                        </div>
                        <div class="imgs">
                            <img src="../assets/images/esf6.jpg" alt="">
                            <img src="../assets/images/esf7.jpg" alt="">
                            <img src="../assets/images/esf8.jpg" alt="">
                        </div>
                        <div class="new-foot">
                            <span>现领观察</span>
                            <span>1685次阅读</span>
                        </div>
                    </div>
                </div>
                <div class="text-new add-img">
                    <div class="new-body">
                        <div class="new-title  ">
                            专家解读两会表述:2019楼市调控政策将宽于去年
                        </div>
                        <div class="imgs">
                            <img src="../assets/images/esf9.jpg" alt="">
                            <img src="../assets/images/esf10.jpg" alt="">
                            <img src="../assets/images/esf11.jpg" alt="">
                        </div>
                        <div class="new-foot">
                            <span>买房人</span>
                            <span>1685次阅读</span>
                        </div>
                    </div>
                </div>
                <div class="text-new">
                    <div class="new-body">
                        <div class="new-title">
                            足不出户，上网查“房本”一看就懂流程图
                        </div>
                        <div class="new-foot">
                            <span>买房人</span>
                            <span>1685次阅读</span>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="楼市行情">内容 2</van-tab>
            <van-tab title="租房">内容 3</van-tab>
            <van-tab title="本地">内容 4</van-tab>
        </van-tabs>
    </div>
    <Tabbar/>
</template>

<!-- 逻辑层 -->
<script setup>
// 引入tabbar组件
import Tabbar from '../components/tabbar.vue';
const onClickLeft = () => history.back();
</script>


<!-- 样式层 -->
<style lang="less" scoped> 
.title{
    margin: 4vw;
    font-size: 5vw;
    font-weight: bold;
}   
.text-new{
    display: flex;
    height: 30vw;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f2f2f2;
    .new-body{
        width: 90vw;
    }
    .new-title{
        font-size: 5vw;
    }
    .new-foot{
        display: flex;
        justify-content: space-between;
        margin-top: 4vw;
        font-size: 3vw;
        color: #909090;
    }
    .imgs{
        display: flex;
        justify-content: space-between;
        img{
            width: 28vw;
            height: 24vw;
        }
    }
}   
.add-img{
    height:54vw ;
}
.color{
    color: #888888;
}
</style>