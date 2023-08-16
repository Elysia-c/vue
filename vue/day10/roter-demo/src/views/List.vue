<!-- 视图层 -->
<template>
    <div class="top">
        <van-nav-bar title="二手房" left-text="" left-arrow @click-left="onClickLeft">
            <template #right>
                <span class="iconfont icon-dizhi"></span>
                <span class="plane">太原</span>
            </template>
        </van-nav-bar>
    </div>
    <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center"/>
    <van-grid :border="false" :column-num="4">
        <van-grid-item>
            <div class="icon color1">
                <span class="iconfont icon-dingwei"></span>
            </div>
            <div class="text">
                智能找房
            </div>
        </van-grid-item>
        <van-grid-item>
            <div class="icon color2">
                <span class="iconfont icon-dituzhaofang"></span>
            </div>
            <div class="text">
                地图找房
            </div>
        </van-grid-item>
        <van-grid-item>
            <div class="icon color3">
                <span class="iconfont icon-fangzi"></span>
            </div>
            <div class="text">
                全部房源
            </div>
        </van-grid-item>
        <van-grid-item>
            <div class="icon color4">
                <span class="iconfont icon-xiaoquguanli"></span>
            </div>
            <div class="text">
                找小区
            </div>
        </van-grid-item>
    </van-grid>
    <div class="title">
        为你推荐二手房
    </div>
    <div class="img-list" @click="goToDetails">
        <div class="body">
            <div class="img">
                <img src="../assets/images/esf3.jpg" alt="">
            </div>
            <div class="details">
                <div class="details-title">山水文园2室1厅</div>
                <div class="area">87.79m²</div>
                <div class="tags">
                    <div class="tag">满五唯一</div>
                    <div class="tag">学区房</div>
                </div>
                <div class="more">
                    <div class="money">359万</div>
                    <div class="all-area">建面158- 177m²</div>
                </div>
            </div>
        </div>
    </div>
    <div class="img-list">
        <div class="body">
            <div class="img">
                <img src="../assets/images/esf4.jpg" alt="">
            </div>
            <div class="details">
                <div class="details-title">山水文园2室1厅</div>
                <div class="area">87.79m²</div>
                <div class="tags">
                    <div class="tag">满五唯一</div>
                    <div class="tag">学区房</div>
                </div>
                <div class="more">
                    <div class="money">359万</div>
                    <div class="all-area">建面158- 177m²</div>
                </div>
            </div>
        </div>
    </div>
    <div class="img-list">
        <div class="body">
            <div class="img">
                <img src="../assets/images/esf5.jpg" alt="">
            </div>
            <div class="details">
                <div class="details-title">山水文园2室1厅</div>
                <div class="area">87.79m²</div>
                <div class="tags">
                    <div class="tag">满五唯一</div>
                    <div class="tag">学区房</div>
                </div>
                <div class="more">
                    <div class="money">359万</div>
                    <div class="all-area">建面158- 177m²</div>
                </div>
            </div>
        </div>
    </div>
    <div class="img-list" >
        <div class="body">
            <div class="img">
                <img src="../assets/images/esf6.jpg" alt="">
            </div>
            <div class="details">
                <div class="details-title">山水文园2室1厅</div>
                <div class="area">87.79m²</div>
                <div class="tags">
                    <div class="tag">满五唯一</div>
                    <div class="tag">学区房</div>
                </div>
                <div class="more">
                    <div class="money">359万</div>
                    <div class="all-area">建面158- 177m²</div>
                </div>
            </div>
        </div>
    </div>
    <div class="img-list" >
        <div class="body">
            <div class="img">
                <img src="../assets/images/esf7.jpg" alt="">
            </div>
            <div class="details">
                <div class="details-title">山水文园2室1厅</div>
                <div class="area">87.79m²</div>
                <div class="tags">
                    <div class="tag">满五唯一</div>
                    <div class="tag">学区房</div>
                </div>
                <div class="more">
                    <div class="money">359万</div>
                    <div class="all-area">建面158- 177m²</div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
    const onClickLeft = () => history.back();
    import { useRouter } from 'vue-router';
    const router = useRouter();
    function goToDetails(){
        router.push('/details');
    }
</script>


<!-- 样式层 -->
<style lang="less" scoped>    
.van-nav-bar {
    background: linear-gradient(to right, #25b8a9, #10bdab);
    height: 20vw;
    color: #fff;
    z-index: 0;
    :deep(.van-icon){
        color: #fff;
        font-size: 6vw;
    }
    :deep(.van-nav-bar__title){
        color: #fff;
        font-size: 5vw;
    }
    .icon-dizhi{
        font-size: 4vw;
    }
    .plane{
        font-size: 3vw;
    }
}
.van-search{
    width: 80vw;
    position: relative;
    left: 10vw;
    top: -6vw;
    background-color: transparent;
}
.van-grid{
    .van-grid-item{
        .color1{
            background-color: #fa9015;
        }
        .color2{
            background-color: #fa4f1a;
        }
        .color3{
            background-color: #00b88f;
        }
        .color4{
            background-color: #0182bf;
        }
        .icon{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            border-radius: 2vw;
            width: 10vw;
            height: 10vw;
            .iconfont{
                font-size: 6vw;
            }
        }
    }
}
.title{
    padding-left: 2vw;
    margin: 2vw 0;
    font-size: 5vw;
    border-left: 4px solid #25b8a9;
}
.img-list{
    height: 32vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #f6daba;
    .body{
        display: flex;
        width: 90vw;
        .img{
            img{
            width: 33vw; 
            height: 24vw;
            }
        }
        .details{
            .details-title{
                font-size: 5vw;
                margin-left: 2vw;
            }
            .area{
                color: #a4a4a4;
                margin-left: 2vw;
            }
            .tags{
                display: flex;
                margin-left: 2vw;
                font-size: 3vw;
                .tag{
                    margin-right: 2vw;
                    padding: 1vw;
                    border-radius: 2vw;
                    &:nth-child(1) {
                        background-color: #c9f6f4;
                        color: #269481;
                    }

                    &:nth-child(2) {
                        background-color: #f4daba;
                        color: #ea6a14;
                    }
                }
            }
            .more{
                display: flex;
                margin-left: 2vw;
                .money{
                    font-size: 4vw;
                    font-weight: bold;
                    margin-right: 4vw;
                    color: #d75b46;
                }
                .all-area{
                    color: #a4a4a4;
                }
            }
        }
    }
}
</style>