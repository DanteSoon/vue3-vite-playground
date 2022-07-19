import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('@/views/Index.vue')
const GridIndex = () => import('@/views/grid/index.vue')
const BmsPage = () => import('@/views/bms/index.vue')
const LiveRegulationPage = () => import('@/views/live-regulation/index.vue')

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index,
  },
  {
    name: 'gridIndex',
    path: '/grid-index',
    component: GridIndex,
  },
  {
    // 👇 非严格匹配，/bms-page/* 都指向 MyPage 页面
    path: '/bms-page/:page*', // vue-router@4.x path的写法为：'/bms-page/:page*'
    name: 'bms-page',
    component: BmsPage,
  },
  {
    // 👇 非严格匹配，/live-regulation-page/* 都指向 MyPage 页面
    path: '/live-regulation-page/:page*', // vue-router@4.x path的写法为：'/live-regulation-page/:page*'
    name: 'live-regulation-page',
    component: LiveRegulationPage,
  },
]

const router = createRouter({
  history: createWebHistory(
    import.meta.env.VITE_NODE_ENV == 'development' ? '/' : '/order/',
  ),
  routes,
})
router.beforeEach((to, from, next) => {
  next()
})

export default router
