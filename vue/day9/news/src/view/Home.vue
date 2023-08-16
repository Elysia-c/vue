<!-- 视图层 -->
<template>
    <div class="home">
        <!-- 搜索栏 -->
        <div class="search">
            <van-search placeholder="请输入搜索关键词" />
            <div class="address">长沙</div>
        </div>

        <!-- 轮播图 -->
        <van-swipe class="banner" :autoplay="3000" lazy-render indicator-color="#269481">
            <van-swipe-item>
                <img src="../assets/images/esf1.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/images/esf2.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/images/esf3.jpg" />
            </van-swipe-item>
        </van-swipe>
        <!-- 九宫格：金刚区 -->
        <div class="grid ">
            <van-grid :column-num="4" icon-size="25px" :border="false">
                <van-grid-item icon="photo-o iconfont icon-ershoufang" text="二手房" />
                <van-grid-item icon="photo-o iconfont icon-xinfang" text="新房" />
                <van-grid-item icon="photo-o iconfont icon-ditu" text="地图找房" />
                <van-grid-item icon="photo-o iconfont icon-zhinengyouhua" text="智能找房" />
                <van-grid-item icon="photo-o iconfont icon-dkw_daikuan" text="投资" />
                <van-grid-item icon="photo-o iconfont icon-gouwuche" text="商城" />
                <van-grid-item icon="photo-o iconfont icon-dkw_daikuan" text="贷款" />
                <van-grid-item icon="photo-o iconfont icon-jisuanqilishuai-xianxing-xi" text="计算器" />
                <van-grid-item icon="photo-o iconfont icon-jishujingjiren" text="经纪人" />
                <van-grid-item icon="photo-o iconfont icon-zhengxin" text="查征信" />
            </van-grid>
        </div>

        <!-- tab菜单切换 -->
        <div class="tab-change">
            <van-tabs v-model:active="active" color="#269481">
                <van-tab title="我要买房">
                    <div class="txt">在售房源：1000套</div>
                    <van-grid direction="horizontal" :column-num="2" :border="false" icon-size="25px">
                        <van-grid-item icon="photo-o iconfont icon-dianzan" text="房源推荐" icon-color="#269481" />
                        <van-grid-item icon="photo-o iconfont icon-remen" text="最新消息" icon-color="#269481" />
                        <van-grid-item icon="photo-o iconfont icon-jiangli-" text="房源甄选" icon-color="#269481" />
                        <van-grid-item icon="photo-o iconfont icon-gerendingzhi" text="定制服务" icon-color="#269481" />
                    </van-grid>
                </van-tab>
                <van-tab title="我要租房">我要租房2222</van-tab>
                <van-tab title="我的房东">我的房东3333</van-tab>
            </van-tabs>
        </div>

        <!-- 二手房推荐 -->
        <div class="second-hand-house">
            <!-- 标题 -->
            <div class="title">
                为你推荐二手房
            </div>
            <!-- 详情 -->
            <div class="details">
                <!--图片列表 -->
                <div class="img-list">
                    <div class="big-img">
                        <img src="../assets/images/esf1.jpg" alt="">
                    </div>
                    <div class="small-imgs">
                        <img src="../assets/images/esf10.jpg" alt="">
                        <img src="../assets/images/esf11.jpg" alt="">
                    </div>
                </div>
                <!-- 房源信息 -->
                <div class="info">
                    <div class="house-info">
                        <div class="house-title">山水文化</div>
                        <div class="desc">湘江世纪城|3室2厅|120平米</div>
                        <div class="tags">
                            <span class="tag">满五年</span>
                            <span class="tag">随时看房</span>
                            <span class="tag">学区房</span>
                        </div>
                    </div>
                    <div class="house-price">
                        <div class="price">120万</div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
            </div>
            <div class="details">
                <!--图片列表 -->
                <div class="img-list">
                    <div class="big-img">
                        <img src="../assets/images/esf1.jpg" alt="">
                    </div>
                    <div class="small-imgs">
                        <img src="../assets/images/esf10.jpg" alt="">
                        <img src="../assets/images/esf11.jpg" alt="">
                    </div>
                </div>
                <!-- 房源信息 -->
                <div class="info">
                    <div class="house-info">
                        <div class="house-title">山水文化</div>
                        <div class="desc">湘江世纪城|3室2厅|120平米</div>
                        <div class="tags">
                            <span class="tag">满五年</span>
                            <span class="tag">随时看房</span>
                            <span class="tag">学区房</span>
                        </div>
                    </div>
                    <div class="house-price">
                        <div class="price">120万</div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 推荐租房 -->
        <div class="rental-housing">
            <!-- 标题 -->
            <div class="title">
                推荐租房
            </div>
            <!-- 详情 -->
            <div class="details">
                <div class="item">
                    <img src="../assets/images/esf12.jpg" alt="">
                    <!-- 房源信息 -->
                    <div class="info">
                        <div class="house-info">
                            <div class="house-title">山水文化</div>
                            <div class="desc">湘江世纪城|3室2厅|120平米</div>
                            <div class="tags">
                                <span class="tag">随时看房</span>
                                <span class="tag">学区房</span>
                            </div>
                        </div>
                        <div class="unit"><span>2500</span>元/月</div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/images/esf12.jpg" alt="">
                    <!-- 房源信息 -->
                    <div class="info">
                        <div class="house-info">
                            <div class="house-title">山水文化</div>
                            <div class="desc">湘江世纪城|3室2厅|120平米</div>
                            <div class="tags">
                                <span class="tag">随时看房</span>
                                <span class="tag">学区房</span>
                            </div>
                        </div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/images/esf12.jpg" alt="">
                    <!-- 房源信息 -->
                    <div class="info">
                        <div class="house-info">
                            <div class="house-title">山水文化</div>
                            <div class="desc">湘江世纪城|3室2厅|120平米</div>
                            <div class="tags">
                                <span class="tag">随时看房</span>
                                <span class="tag">学区房</span>
                            </div>
                        </div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/images/esf12.jpg" alt="">
                    <!-- 房源信息 -->
                    <div class="info">
                        <div class="house-info">
                            <div class="house-title">山水文化</div>
                            <div class="desc">湘江世纪城|3室2厅|120平米</div>
                            <div class="tags">
                                <span class="tag">随时看房</span>
                                <span class="tag">学区房</span>
                            </div>
                        </div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/images/esf12.jpg" alt="">
                    <!-- 房源信息 -->
                    <div class="info">
                        <div class="house-info">
                            <div class="house-title">山水文化</div>
                            <div class="desc">湘江世纪城|3室2厅|120平米</div>
                            <div class="tags">
                                <span class="tag">随时看房</span>
                                <span class="tag">学区房</span>
                            </div>
                        </div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
                <div class="item">
                    <img src="../assets/images/esf12.jpg" alt="">
                    <!-- 房源信息 -->
                    <div class="info">
                        <div class="house-info">
                            <div class="house-title">山水文化</div>
                            <div class="desc">湘江世纪城|3室2厅|120平米</div>
                            <div class="tags">
                                <span class="tag">随时看房</span>
                                <span class="tag">学区房</span>
                            </div>
                        </div>
                        <div class="unit"><span>10000</span>元/㎡</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 使用组件 -->
        <Tabbar />
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
// 引入tabbar组件
import Tabbar from './components/Tabbar.vue';

</script>


<!-- 样式层 -->
<style lang="less" scoped>
.home {
    padding-bottom: 15vw;

    // 顶部搜索栏
    .search {
        width: 100%;
        position: absolute;
        z-index: 10;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;

        .van-search {
            flex: 1;
            background-color: transparent;

            // :deep() 用于深度作用选择器---样式穿透：作用于组件内部
            :deep(.van-search__content) {
                border-radius: 8px;
            }
        }

        .address {
            padding-right: 10px;
        }
    }

    // 轮播图
    .banner {
        .van-swipe-item {
            img {
                width: 100%;
            }
        }
    }

    // 
    .grid {
        color: #269481;

        :deep(.van-grid-item__text) {
            color: #269481;
        }
    }

    // tab菜单切换
    .tab-change {
        // overflow: hidden; 解决margin的塌陷问题
        overflow: hidden;
        height: 57vw;
        background: url(../assets/images/bg2.jpg) no-repeat;
        background-size: 100% 50%;


        .van-tabs {
            //overflow: hidden; 解决盒子内容溢出并隐藏
            overflow: hidden;
            width: 93vw;
            height: 49vw;
            margin: 8vw auto;
            background-color: #fff;
            border-radius: 10px;
            background-color: #ccf8f1;
            padding: 0 20px;

            .txt {
                padding: 10px;
            }

            // :deep() 用于深度作用选择器---样式穿透：作用于第三方组件样式
            :deep(.van-tabs__nav) {
                background-color: #ccf8f1;
            }

            :deep(.van-grid-item__content) {
                background-color: transparent;
                justify-content: flex-start;
                padding: 10px;
            }
        }
    }

    // 二手房推荐
    .second-hand-house {
        padding: 20px 0;

        // 标题样式
        .title {
            padding: 10px;
            font-size: 4vw;
            font-weight: bold; // 文本加粗
            border-left: 5px solid #269481; // 左边框
        }

        // 详情
        .details {
            padding: 10px;

            .img-list {
                display: flex;
                justify-content: space-between; // 两端对齐

                .big-img {
                    width: 63vw;
                    height: 40vw;

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                    }
                }

                .small-imgs {
                    width: 29vw;
                    display: flex;
                    flex-direction: column; // 垂直排列
                    justify-content: space-between;

                    img {
                        width: 100%;
                        height: 19vw;
                        border-radius: 10px;
                    }
                }

            }

            .info {
                display: flex;
                justify-content: space-between;
                margin: 20px 0;

                .house-info {
                    .house-title {
                        font-size: 4vw;
                        font-weight: bold; // 文本加粗
                    }

                    .desc {
                        font-size: 3vw;
                        color: #999;
                        padding: 16px 0;
                    }

                    .tags {
                        .tag {
                            display: inline-block;
                            padding: 2px 5px;
                            margin-right: 5px;
                            border-radius: 5px;
                            font-size: 3vw;
                            color: #fff;

                            &:nth-child(1) {
                                background-color: #269481;
                            }

                            &:nth-child(2) {
                                background-color: #ea6a14;
                            }

                            &:nth-child(3) {
                                background-color: #d80da2;
                            }
                        }
                    }
                }

                .house-price {
                    text-align: right;

                    .price {
                        font-size: 4vw;
                        font-weight: bold; // 文本加粗
                        color: #f84329;
                    }

                    .unit {
                        padding: 10px 0;

                        span {
                            color: #f84329;
                        }
                    }
                }
            }
        }

    }

    // 推荐租房
    .rental-housing {
        padding: 20px 0;

        // 标题样式
        .title {
            padding: 10px;
            font-size: 4vw;
            font-weight: bold; // 文本加粗
            border-left: 5px solid #269481; // 左边框
        }

        // 详情
        .details {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap; // 换行

            .item {
                width: 48%;

                img {
                    width: 100%;
                    border-radius: 10px;
                }

                .info {
                    margin: 20px 0;

                    .house-info {
                        .house-title {
                            font-size: 4vw;
                            font-weight: bold; // 文本加粗
                        }

                        .desc {
                            font-size: 3vw;
                            color: #999;
                            padding: 10px 0;
                        }

                        .tags {
                            .tag {
                                display: inline-block;
                                padding: 2px 5px;
                                margin-right: 5px;
                                border-radius: 5px;
                                font-size: 3vw;
                                color: #fff;

                                &:nth-child(1) {
                                    background-color: #269481;
                                }

                                &:nth-child(2) {
                                    background-color: #ea6a14;
                                }
                            }
                        }
                    }

                    .house-price {
                        text-align: right;

                        .unit {
                            padding: 10px 0;

                            span {
                                color: #f84329;
                            }

                        }
                    }
                }
            }
        }
    }
}
</style>