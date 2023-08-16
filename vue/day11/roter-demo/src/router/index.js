import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Me from '../views/Me.vue';
import Navbar from '../views/Navbar.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/me',
    name: 'me',
    component: Me,
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;