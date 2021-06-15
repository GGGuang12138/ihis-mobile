import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  // 一级路由，渲染到根节点的router-view
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('@/views/home')
      },
      {
        path: '/service',
        name: 'service·',
        component: () => import('@/views/service')
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/message')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my')
      }
    ]
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search')
  },
  {
    path: '/article/:articleId',
    name: 'article',
    component: () => import('@/views/article'),
    props: true
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
