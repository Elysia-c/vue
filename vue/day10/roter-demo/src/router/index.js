import { createRouter, createWebHistory } from 'vue-router';
import Chat from '../views/Chat.vue';
import Home from '../views/Home.vue';
import List from '../views/List.vue';
import Me from '../views/Me.vue';
import Wikipedia from '../views/Wikipedia.vue';
import Details from '../views/details.vue';
import Login from '../views/login.vue';
import News from '../views/news.vue';
import Register from '../views/register.vue';
import Three from '../views/three.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat,
  },
  {
    path: '/wikipedia',
    name: 'wikipedia',
    component: Wikipedia,
  },
  {
    path: '/me',
    name: 'me',
    component: Me,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/details',
    name: 'details',
    component: Details,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/three',
    name: 'three',
    component: Three,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;