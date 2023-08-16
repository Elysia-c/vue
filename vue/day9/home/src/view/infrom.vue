<!-- 视图层 -->
<template>
    <div class="top">
        <van-tabs v-model:active="active">
            <van-tab title="微聊(3)">
                <div class="info">
                    <van-icon name="close" size="4vw"/>  
                    <span>想及时了解最新的房产动态？</span>
                    <button class="open">打开通知</button>
                </div>  
                <div class="imgList not">
                    <div class="img">
                        
                    </div>
                    <div class="text">
                        <div class="all">
                            <div class="title2">
                                <span class="name">房产智能助手</span>
                            </div>
                            <div class="news2">找房不知如何下手？让我来帮帮你吧</div>
                        </div>
                    </div>
                </div>
                <div class="imgList not">
                    <div class="img">
                        
                    </div>
                    <div class="text">
                        <div class="all">
                            <div class="title2">
                                <span class="name">张璇</span>
                                <span class="plane">湖南新环境地产保利新时达A店</span>
                                <span class="time">星期一</span>
                            </div>
                            <div class="post">
                                [主营:保利]可能有你想要的房源
                            </div>
                            <div class="news2">我看您这边找房预算是5到8千</div>
                        </div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="通知">
                <div class="info">
                    <van-icon name="close" size="4vw"/>  
                    <span>想及时了解最新的房产动态？</span>
                    <button class="open">打开通知</button>
                </div>  
                <div class="imgList">
                    <div class="img">
                        <van-icon name="gem" size="6vw"/>
                    </div>
                    <div class="text">
                        <div class="all">
                            <div class="title">
                                <span class="name">会员中心</span>
                                <span class="time">22/7/11</span>
                            </div>
                            <div class="news">恭喜您成为Lv,2会员，以享购车津贴优惠点击...</div>
                        </div>
                    </div>
                </div>
                <div class="imgList">
                    <div class="img">
                        <van-icon name="chat" size="6vw"/>
                    </div>
                    <div class="text">
                        <div class="all">
                            <div class="title">
                                <span class="name">互动信息</span>
                                <span class="time">22/6/27</span>
                            </div>
                            <div class="news">彭乐等1人回答了你的问题</div>
                        </div>
                    </div>
                </div>
            </van-tab>

        </van-tabs>
    </div>
    <tabbar></tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
import tabbar from '../components/tabbar.vue';
</script>

<!-- 样式层 -->
<style lang="less" scoped>
.info{
    margin-top: 3vw;
    display: flex;
    justify-content: space-around;
    color: #979b9d;
    font-size: 4vw;
    .open{
        border-color: #a5e0ca;
        color: #a5e0ca;
    }
}
.not{
    border: none;
}
.imgList{
    display: flex;
    height: 18vw;
    border-bottom: 1px solid #e8ebee;
    .img{
        width: 12vw;
        height: 12vw;
        margin: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        background-color: #f5be68;
        border-radius: 6vw;
    }
    .text{
        display: flex;
        flex: 1;
        align-items: center;
        .all{
            .news{
                font-size: 3vw;
            }
            .title{
                display: flex;
                justify-content: space-between;
                font-size: 3vw;
                .name{
                    font-size: 4vw;
                    font-weight: bold;
                }
            }
            .title2{
                display: flex;
                .name{
                    font-size: 4vw;
                    font-weight: bold;
                }
                .plane{
                    margin-left: 4vw;
                }
                .time{
                    margin-left: 14vw;
                }
                font-size: 3vw;
            }
            .post{
                font-size: 3vw;
            }
        }
        
    }
}
</style>