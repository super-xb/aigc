// index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from "@/views/NotFound.vue";

// 懒加载组件
const HomeView = () => import('../views/HomeView.vue');
const Index = () => import('@/pages/zh-hans/index.vue');
const Dashboard = () => import('@/pages/zh-hans/dashboard.vue');
const Tool = () => import('@/pages/zh-hans/tool.vue');


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/zh-hans',
  },
  {
    path: '/zh-hans',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'home',
        component: Index,
        meta: { title: '首页' },
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: { title: '仪表盘' },
      },
      {
        path: 'tool',
        name: 'tool',
        component: Tool,
        meta: { title: '工具' },
      }
    ],
  },
  {
    path: '*',
    name: '404',
    component: NotFound, // 使用 NotFound 组件
  },
];

const router = new VueRouter({
  mode: 'history', // 使用历史模式
  routes,
});

export default router;