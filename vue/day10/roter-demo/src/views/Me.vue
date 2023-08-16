<!-- 视图层 -->
<template>
    <div class="top">
        <div class="easy">
            <span class="iconfont icon-shezhi"></span>
            <span class="iconfont icon-scan"></span>
            <span class="iconfont icon-kefu"></span>
        </div>
        <div class="img-list">
            <div class="img">
                <img src="../assets/images/esf3.jpg" alt="">
            </div>
            <div class="title">
                <div class="login" @click="goToLogin">注册/登录</div>
                <div>登录后可体验更多服务 ></div>
            </div>
            <div class="button">
                <button>个人主页</button>
            </div>
        </div>
        <div class="vip">
            <div class="vip-title">
                <div class="icon">
                    <span class="iconfont icon-liwu"></span>
                </div>
                <div class="vip-an">
                    <span>会员</span>
                </div>
            </div>
            <div class="gift-bag">
                <span>立即登录领取新手礼包 ></span>
            </div>
        </div>
    </div>
    <van-grid :border="false" :column-num="4">
        <van-grid-item>
           <div class="num">95</div>
           <div>浏览历史</div>
        </van-grid-item>
        <van-grid-item>
            <div class="num">0</div>
            <div>收藏关注</div>
        </van-grid-item>
        <van-grid-item>
            <div class="num">0</div>
            <div>联系人</div>
        </van-grid-item>
        <van-grid-item>
            <div class="num">0</div>
            <div>钱包优惠</div>
        </van-grid-item>
        <van-grid-item>
            <van-icon name="shield-o" size="40"/>
            <div>保障</div>
        </van-grid-item>
    </van-grid>
    <div class="tool">
        房产工具
    </div>
    <van-grid :border="false" :column-num="4">
        <van-grid-item>
            <span class="iconfont icon-fangzi"></span>
            <div>看房管理</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-zhanlvetouzi"></span>
            <div>金融服务</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-shanxingtu"></span>
            <div>查房价</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-jisuanqi_o"></span>
            <div>房贷计算</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-jisuanqi_o"></span>
            <div>税费计算</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-biaoqian"></span>
            <div>购房资格</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-daikuan"></span>
            <div>贷款成数</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-zidian"></span>
            <div>安居宝典</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-dianping"></span>
            <div>我的点评</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-wenda"></span>
            <div>我的问答</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-tiezi"></span>
            <div>我的帖子</div>
        </van-grid-item>
    </van-grid>
    <div class="tool">
        房东服务
    </div>
    <van-grid :border="false" :column-num="4">
        <van-grid-item>
            <span class="iconfont icon-zichanziranziyuanfendengjidingjiagujia"></span>
            <div>房屋估价</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-maifang"></span>
            <div>我要卖房</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-a-icongongzufang"></span>
            <div>租房管理</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-maifang1"></span>
            <div>卖房管理</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-vip"></span>
            <div>速卖VIP</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-shouye"></span>
            <div>商铺写字楼</div>
        </van-grid-item>
        <van-grid-item>
            <span class="iconfont icon-fangdongzhizu"></span>
            <div>房东必看</div>
        </van-grid-item>
    </van-grid>
    <Tabbar/>
</template>

<!-- 逻辑层 -->
<script setup>
// 引入tabbar组件
import { useRouter } from 'vue-router';
import Tabbar from '../components/tabbar.vue';
const router = useRouter();
function goToLogin(){
    router.push('/login');
}
</script>


<!-- 样式层 -->
<style lang="less" scoped> 
.top{
    background: url('../assets/bg3.jpg');
    height: 36vw;
    .easy{
        display: flex;
        flex-direction: row-reverse;
        .iconfont{
            font-size: 5vw;
            margin-left: 5vw;
            margin-top: 2vw;
        }
    }
}      
.img-list{
    display: flex;
    margin: 5vw 5vw 2vw 5vw;
    align-items: center;
    .img{
        img{
           width: 12vw; 
           height: 12vw;
           border-radius: 6vw;
        }
    }
    .login{
        font-size: 5vw;
        font-weight: bold;
    }
    .button{
        flex: 1;
        button{
            padding: 2vw;
            float: right;
            background-color: transparent;
            border-color: #fff;
            border-radius: 1vw;
            font-size: 3vw;
        }
    }
}
.vip{
    display: flex;
    background: url('../assets/bg2.jpg');
    height: 10vw;
    justify-content: space-between;
    .vip-title{
        display: flex;
        .icon{
            background-color: #dbb556;
            height: 6vw;
            width: 6vw;
            border-radius: 3vw;
            display: flex;
            text-align: center;
            justify-content: center;
            margin: 2vw;
            .iconfont{
                height: 5vw;
                font-size: 5vw;
                color: #fff;
            }
        }
        .vip-an{
            display: flex;
            align-items: center;
            font-size: 5vw;
        }
    }
    .gift-bag{
        display: flex;
        align-items: center;
    }
}
.van-grid{
    .van-grid-item{
        font-size: 3vw;
        .num{
            font-size: 8vw;
            font-weight: bold;
        }
        .iconfont{
            font-size: 8vw;
        }
    }
}
.tool{
    margin: 4vw;
    font-size: 5vw;
    font-weight: bold;
}
</style>