<!-- 视图层 -->
<template>
  <div class="home"> 
    <div class="search">
      <van-search placeholder="请输入搜索关键词"/>
      <div class="address">长沙</div>  
    </div> 
    <van-swipe class="banner" :autoplay="3000" lazy-render>
      <van-swipe-item >
        <img src="../assets/fangjian1.jpg" />
      </van-swipe-item>
      <van-swipe-item >
        <img src="../assets/fangjian2.png" />
      </van-swipe-item>
      <van-swipe-item >
        <img src="../assets/fangjian4.jpg" />
      </van-swipe-item>
    </van-swipe>
    <div class="grid">
      <van-grid direction="vertical" :column-num="4" icon-size="25px" :border="false">
        <van-grid-item icon="photo-o iconfont icon-ershoufang" text="二手房" />
        <van-grid-item icon="photo-o iconfont icon-xinfang" text="新房" />
        <van-grid-item icon="photo-o iconfont icon-ditu" text="地图找房" />
        <van-grid-item icon="photo-o iconfont icon-zhinengyouhua" text="智能找房" />
        <van-grid-item icon="photo-o iconfont icon-touzi" text="投资" />
        <van-grid-item icon="photo-o iconfont icon-gouwuche" text="商城" />
        <van-grid-item icon="photo-o iconfont icon-dkw_daikuan" text="贷款" />
        <van-grid-item icon="photo-o iconfont icon-jisuanqilishuai-xianxing-xi" text="计算器" />
        <van-grid-item icon="photo-o iconfont icon-jishujingjiren" text="经纪人" />
        <van-grid-item icon="photo-o iconfont icon-zhengxin" text="查征信" />
      </van-grid>
    </div>
    <div class="tab-chage">
      <van-tabs v-model:active="active" color="#269481">
        <van-tab title="我要买房">
          <van-grid direction="horizontal" :column-num="2">
            <van-grid-item icon="good-job" text="房源推荐" />
            <van-grid-item icon="fire" text="最新消息" />
          </van-grid>
          <van-grid direction="horizontal" :column-num="2">
            <van-grid-item icon="photo-o" text="房型甄选" />
            <van-grid-item icon="like" text="定制服务" />
          </van-grid>
        </van-tab>
        <van-tab title="我要租房">我要租房2222</van-tab>
        <van-tab title="我是房东">我是房东3333</van-tab>
      </van-tabs>
    </div>
    <div class="imgLists">
      <div class="imgList">
        <div class="body">
          <div class="title">活动优惠</div>
          <div class="good">参与即享更多优惠</div>
          <div class="img">
            <img src="../assets/images/esf2.jpg" alt="">
            <img src="../assets/images/esf3.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="imgList">
        <div class="body">
          <div class="title">新盘抢先</div>
          <div class="good">新盘在线 先睹为快</div>
          <div class="img">
            <img src="../assets/images/esf4.jpg" alt="">
            <img src="../assets/images/esf5.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <tabbar></tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
 import tabbar from '../components/tabbar.vue';
</script>


<!-- 样式层 -->
<style lang="less"  scoped>
.home{
  padding-bottom: 15vw;
  .search{
    .address{
      padding-right: 10px;
    }
    width: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    .van-search{
      flex: 1;
      background-color: transparent;

      :deep(.van-search__content){
        border-radius: 16px;
      }
    }
    
  }
.banner{
.van-swipe-item{
     img{
        width: 100%;       
    }
}
}
.grid{
      color: rgb(83, 85, 85);
      :deep(.van-grid-item__text) {
        color: rgb(126, 130, 128);
      }
    }
}
.tab-chage{
  //解决margin的塌陷问题
  overflow: hidden;
  height: 57vw;
  background: url(../assets/bg2.jpg) no-repeat;
  background-size: 100% 50%;
  .van-tabs{
    padding: 10px;
    //解决盒子内容溢出并隐藏
    overflow: hidden;
    width: 93vw;
    margin: 8vw auto;
    height: 49vw;
    background-color: #fff;
    border-radius: 10px;
    background-color: #ccf8f1;
    :deep(.van-tabs__nav){
      background-color: #ccf8f1;
    }
    :deep(.van-grid-item__content){
      background-color: transparent;
    }
    :deep(.van-grid-item__content--center){
      justify-content: left;
    }
  }
}
.imgLists{
  display: flex;
  justify-content: space-between;
  margin: 3vw;
  .imgList{
    height: 35vw;
    width: 45vw;
    background-color: #f9f9f4;
    .body{
      margin: 3vw auto;
      .title{
        font-size:4vw ;
      }
      .good{
        font-size:3vw ;
      }
      .img{
        img{
          width: 20vw;
          height: 17vw;
          margin-right: 1vw;
          border-radius: 1vw;
        }
      }
    }
  }
}
</style>
