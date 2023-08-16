<!-- 视图层 -->
<template>
    <div class="top">
        <div class="top-title">
            <div class="back" @click="back">
                <span class="iconfont icon-fanhui"></span>
            </div>
            <div class="tool">
                <span class="iconfont icon-shoucang"></span>
                <span class="iconfont icon-zhuanfa"></span>
                <span class="iconfont icon-pinglunxiao"></span>
                <span class="iconfont icon-gengduo1"></span>
            </div>
        </div>
        <van-swipe>
            <van-swipe-item>
                <img src="../assets/images/esf10.jpg" alt="" @click="goToVR">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/images/esf11.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/images/esf12.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/images/esf14.jpg" alt="">
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="allVR">
                    <div class="VR">
                        <div class="VR-title">VR</div>
                        <div class="custom-indicator">图片{{ active + 1 }}/{{ total }}</div>
                    </div>
                </div>
            </template>
        </van-swipe>
    </div>
    <div class="title">
        <div class="title-body">
            整租 │ 马王堆 万家丽 浏阳河畔 采光很好 带燃气 民水民电 精装修
        </div>
    </div>
    <div class="title">
        <div class="title-body">
            <span class="money">2000</span>
            <span class="unit">元/月</span>
            <span class="face">面议</span>
        </div>
    </div>
    <van-grid :border="false" :column-num="4">
        <van-grid-item>
            <div class="grid-title">
                2室2厅1卫
            </div>
            <div class="text">
                房型
            </div>
        </van-grid-item>
        <van-grid-item>
            <div class="grid-title">
                79.82m2
            </div>
            <div class="text">
                面积
            </div>
        </van-grid-item>
        <van-grid-item>
            <div class="grid-title">
                高/28层
            </div>
            <div class="text">
                楼层
            </div>
        </van-grid-item>
        <van-grid-item>
            <div class="grid-title">
                南
            </div>
            <div class="text">
                朝向
            </div>
        </van-grid-item>
    </van-grid>
    <div class="good">
        <div class="good-details">
            邻地铁 >
        </div>
        <div class="good-details">
            精装修 >
        </div>
        <div class="good-details">
            随时看房 >
        </div>
        <div class="good-details">
            有电梯 >
        </div>
    </div>
    <div class="foot">
        <div class="order">
            <div class="icon">
                <van-icon name="passed" size="25"/>
            </div>
            <div>
                预约看房
            </div>
        </div>
        <button class="chat">
            <van-icon name="chat-o" size="25"/>
            <span>微聊</span>
        </button>
        <button class="tel">
            <van-icon name="phone-o" size="25"/>
            <span>电话</span>
        </button>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
const back = () => history.back();
import { useRouter } from 'vue-router';
const router = useRouter();
function goToVR(){
    router.push('/three');
}
</script>


<!-- 样式层 -->
<style lang="less" scoped>    
.top-title {
    position: absolute;
    background-color: transparent;
    width: 100%;
    color: #fff;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    margin-top: 4vw;
    .tool{
        display: flex;
    }
    .back{
        .iconfont{
            margin-left: 3vw;
        }
    }
    .iconfont{
        font-size: 5vw;
        margin-right: 3vw;
    }
}
.van-swipe{
    .van-swipe-item{
        img{
            height: 75vw;
        }
    }
    .allVR{
        position: relative;
        top: -10vw;
        display: flex;
        justify-content: center;
        .VR{
            display: flex;
            background-color: #483f31;
            border-radius: 4vw;
            justify-content: center;
            color: #fff;
            font-size: 3vw;
            div{
                padding: 2vw;
            }
        }
        .custom-indicator{
            background-color: #60c795;
            border-radius: 4vw;
        }
    }
}
.van-grid{
    margin-top: 6vw;
    .van-grid-item{
        .grid-title{
            font-size: 4vw;
            font-weight: bold;
        }
        .text{
            color: #9b9b9b;
        }
    }
}
.title{
    font-size: 5vw;
    display: flex;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 2vw;
    .title-body{
        width: 90vw;
        .money{
            color: #ef603d;
        }
        .unit{
            color: #ef603d;
            font-weight: normal;
            font-size: 4vw;
        }
        .face{
            color: #9b9b9b;
            font-weight: normal;
            font-size: 4vw;
        }
    }
}
.good{
    margin-top: 6vw;
    margin-left: 5vw;
    display: flex;
    .good-details{
        margin-right: 2vw;
        border: 1px solid #6b98ca;
        color: #6b98ca;
        border-radius: 1vw;
        font-size:  3vw;
        padding: 2vw;
    }
}
.foot{
    display: flex;
    align-items: center;
    padding: 2vw;
    position: static;
    position:fixed;
    left: 0;
    bottom: 0;
    .order{
        margin-right: 2vw;
        font-size: 3vw;
        .icon{
            display: flex;
            justify-content: center;
        }
    }
    button{
        margin-right: 2vw;
        padding:3vw 10vw;
        font-size: 4vw;
        border: none;
    }
    .chat{
        background-color: #e47640;
        margin-right: 2vw;
    }
    .tel{
        background-color: #60c797;
    }
}
</style>