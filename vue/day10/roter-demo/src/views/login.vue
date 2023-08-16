<!-- 视图层 -->
<template>
  <div class="register">
    <van-nav-bar
      title=""
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="menu vw80">
      <div class="on">登录</div>
      <div @click="register">注册</div>
    </div>

    <div class="from vw80">
      <div class="tel">
        <input type="text" id="phone" placeholder="请输入手机号码或邮箱">
        <span class="iconfont icon-youxiang"></span>
      </div>
      <div class="pwd">
        <input type="text" id="password" placeholder="请输入密码">
        <span class="iconfont icon-mima"></span>
      </div>
      <button @click="login">登录</button>
      <RouterLink to="/register">
        <p>忘记密码？</p>
      </RouterLink>
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
  import { showFailToast, showSuccessToast } from 'vant';
import { useRoute, useRouter } from 'vue-router';
  const onClickLeft = () => router.push('/me');
  const router = useRouter();
  const route = useRoute();
  const telephone=route.params.tel;
  function login(){
    showSuccessToast(telephone);
    const phone =document.getElementById('phone').value;
    const password =document.getElementById('password').value;
    if(phone === ''){
      showFailToast('电话不能为空');
    }
    else if(password===''){
      showFailToast('密码不能为空');
    }
    else if(phone === '12345678910' & password === '123456'){
      showSuccessToast('登录成功');
      router.push('/');
    }
    else if(phone != '12345678910'){
      showFailToast('电话错误');
    }
    else if(phone != '123456'){
      showFailToast('密码错误');
    }
  }
  function register(){
    router.push('/register');
  }
</script>


<!-- 样式层 -->
<style scoped>
.van-nav-bar{
  background-color: transparent;
  :deep(.van-icon){
    color: #fff;
  }
}
.register{
  background: url('../assets/images/esf1.jpg') no-repeat;
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
color: #fff;
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
