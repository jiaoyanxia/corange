import Vue from 'vue'
import VueRouter from 'vue-router'
// 注册

Vue.use(VueRouter)

const routes = [
  // 默认重定向 -> 登录页
  {
    path: '',
    redirect: '/login'
  },
  //  登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  // 注册
  {
    path: '/reg',
    name: 'reg',
    component: () => import('@/views/register/register.vue')
  },
  // layout->展示页  ->  默认展示 home 
  {
    path: '/layout',
    component: () => import('@/views/layout/layout.vue'),
    children: [
      // 重定向 -》 home
      // 注意 子路由 不需要再去添加 /
      {
        path: '',
        redirect: 'home'
      },
      // home
      {
        path: 'home',
        component: () => import('@/views/home/home.vue')
      },
      // 聊天
      {
        path: 'chat',
        component: () => import('@/views/chat/chat.vue')
      },
      // 排行榜
      {
        path: 'rank',
        component: () => import('@/views/rank/rank.vue')
      },
      // 关于我们
      {
        path: 'about',
        component: () => import('@/views/about/about.vue')
      },
      // 个人信息页
      {
        path: 'info',
        component: () => import('@/views/info/info.vue')
      },
    ]
  },
  // 404 页面
  {
    path: '*',
    name: 'undefined',
    component: () => import('@/components/unde.vue')
  }


]

const router = new VueRouter({
  routes,
  mode: 'history'

})

export default router