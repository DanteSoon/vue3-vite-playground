import { createRouter, createWebHistory } from 'vue-router'

const Index = () => import('@/views/Index.vue')
const Vue3DemoIndex = () => import('@/views/vue3-demo.vue')
const routes = [
  {
    name: 'index',
    path: '/',
    component: Vue3DemoIndex,
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
