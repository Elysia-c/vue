<!-- 视图层 -->
<template>
  <div class="list">
    <div class="top">
      <button>
        <span class="iconfont icon-fanhui"></span>
      </button> 
      <span class="add">添加就诊人</span>
      <span></span>
    </div>

    <div class="baseInfo">
      <div class="name on">
        <span class="iconfont icon-icon-person"></span>
        <span>姓名</span>
      </div>
      <div class="tel">
        <span class="iconfont icon-shouji"></span>
        <span>手机号</span>
      </div>
      <div class="tel">
        <span class="iconfont icon-zhengjianleixing"></span>
        <span>证件类型</span>
        <span class="iconfont icon-gengduo"></span>
      </div>
      <div class="tel">
        <span class="iconfont icon-zhengjian"></span>
        <span>证件号</span>
      </div>
      <div class="sex on">
        <span class="iconfont icon-xingbie"></span>
        <span>性别</span>
      </div>
      <div class="tel">
        <span class="iconfont icon-chushengnianyue"></span>
        <span>出生年月</span>
        <span class="iconfont icon-gengduo"></span>
      </div>
      <div class="tel">
        <span class="iconfont icon-dizhi"></span>
        <span>地址</span>
      </div>
    </div>

    <div class="OK">
      <button>确认</button>
      <div class="warn">
        <span>
          *姓名、身份证为挂号有效凭证，添加之后不能修改，如需更改请拨打客服电话400- -6677- -400
        </span>
      </div>
    </div>
  </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style scoped>
.list{
  height: 100vh;
  background-color:#f0eff4 ;
}
.list .top{
  display: flex;
  justify-content: space-between;
  background-color:#4f94ff;
  color: #fff;
  font-size: 5vw;
  line-height: 13vw;
  height: 13vw;
}
.list .top button{
  background-color:#4f94ff;
  border: none;
  color: #fff;
  height: 13vw;
}
.list .top .add{
  display: flex;
  justify-content: center;
}

.list .baseInfo .on{
  margin-top: 15px;
}
.list .baseInfo div{
  background-color: #fff;
  border-bottom:1px solid #f0eff4 ;
}
.list .baseInfo div span{
  line-height: 11vw;
  margin-left: 10px;
}
.list .baseInfo div .iconfont{
  color: #4f94ff;
}

.list .OK button{
  display: block;
  margin: 13vw auto 10px;
  border-radius: 43vw;
  border: none;
  background-color: #4f94ff;
  width: 86vw;
  height: 12vw;
  line-height: 12vw;
  color: #fff;
  font-size: 5vw;
  height: 11vw;
}
.list .OK .warn{
  width: 80vw;
  margin: auto;
}
.list .OK .warn span{
  font-size: 10px;
  color: #9b9a9f;
}
.baseInfo .icon-gengduo{
  position:absolute; 
  /* 开启绝对定位 */
  right: 3%;
}
</style>