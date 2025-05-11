import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/pages/NotFound.vue'

// 按需加载组件
const home = () => import('@/pages/zh-hans/home.vue')
const inspiration = () => import('@/pages/zh-hans/inspiration.vue')
const tutorials = () => import('@/pages/zh-hans/tutorials.vue')
// const community = () => import('@/pages/zh-hans/community.vue')
const profile = () => import('@/pages/zh-hans/profile.vue')
// const help = () => import('@/pages/zh-hans/help.vue')

Vue.use(VueRouter)

const routes = [
  // 根路径重定向到 /zh-hans
  {
    path: '/',
    redirect: '/zh-hans'
  },
  // /zh-hans 路由作为 layout 或一级父路由
  {
    path: '/zh-hans',
    component: {
      // 一个简单的布局组件
      render(c) { return c('router-view') }
    },
    redirect: '/zh-hans/home',
    children: [
      {
        path: 'home',
        component: home
      },
      {
        path: 'inspiration',
        component: inspiration
      },
      {
        path: 'tutorials',
        component: tutorials
      },
      // {
      //   path: 'community',
      //   component: community
      // },
      {
        path: 'profile',
        component: profile
      },
      // {
      //   path: 'help',
      //   component: help
      // }
    ]
  },
  // 404 页面
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history', // 或 'hash'
  routes
})

export default router
