// 引入createApp函数
import { createApp } from 'vue';
// 引入App组件
import App from './App.vue';

// 引入css文件
import './assets/css/base.css';
import './assets/css/iconfonts.css';

// 创建App应用实例对象——app
// 挂载到id为app的div容器上
createApp(App).mount('#app');
