<!-- 视图层 -->
<template>
    <div class="register">
      <div class="menu vw80">
        <div class="on">登录</div>
        <div>注册</div>
      </div>

      <div class="from vw80">
        <div class="tel">
          <input type="text" placeholder="请输入手机号码或邮箱">
          <span class="iconfont icon-youxiang"></span>
        </div>
        <div class="pwd">
          <input type="text" placeholder="请输入密码">
          <span class="iconfont icon-mima"></span>
        </div>
        <button>登录</button>
        <p>忘记密码？</p>
      </div>
      
      <div class="others vw80">
        <span>————</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-QQ"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weixin"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-weibo"></use>
        </svg>
        <span>————</span>
      </div>
      <!-- <span class="iconfont icon-youxiang"></span>
      <span class="iconfont icon-weixin"></span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-weibo"></use>
      </svg> -->
    </div>
  </template>
  
<!-- 逻辑层 -->
<script setup>
  
</script>
  
  
<!-- 样式层 -->
<style scoped>
.register{
    background: url('../assets/img/bg1.jpeg') no-repeat;
    /* cover铺满 */
    background-size: cover ;
    height: 100vh;
    color: #fff;
}
.vw80{
    width: 80vw;
    /* 上下为0,左右居中 */
    margin: 0 auto;
}
.register .menu{
  display: flex;
  justify-content: space-around;
  padding-top: 46vw;
}
.register .menu div{
  width: 23vw;
  height: 10vw;
  line-height: 10vw;
  text-align: center;
}
.register .menu .on{
  background-color: #ae92c0;
  border-radius: 5vw;
}
.register .from{
  margin-top: 10vw;
}
.register .from div{
  display: flex;
  border-bottom:1px solid #fff ;
  height: 10vw;
  line-height: 10vw;
}
.register .from div{
  margin-top: 4vw;
}
.register .from input{
  /* 占满空间 */
  flex: 1;
  /* 背景透明 */
  background-color: transparent;
  /* 去除边框 */
  border: none;
}
/* input字体颜色 */
.register .from input::-webkit-input-placeholder{
  color: #fff;
}
.iconfont{
  font-size: 30px;
}
.register .from button{
  display: block;/* 转换成块级元素---独立一行显示,可以设置宽高 */
  margin: 16vw auto 10px;
  width: 60vw;
  height: 8vw;
  line-height: 8vw;
  border-radius: 4vw;
  background-color: #ae92c0;
  border: none;
  color: #fff;
}
.register .from p{
  text-align: center;
  margin-bottom: 10vw;
  font-size: 10px;
}
.register .others .icon{
  width: 10vw;
  height: 10vw;
  margin: 0 10px;
}
.register .others{
  display: flex;
  /* 交叉轴对齐方式 */
  align-items: center;
}
</style>
  