import { createRouter, createWebHistory } from "vue-router";
const Index = () => import("@/views/Index.vue");
const routes = [
  {
    name: "index",
    path: "/",
    component: Index,
  },
];

const router = createRouter({
  history: createWebHistory(
    import.meta.env.VITE_NODE_ENV == "development" ? "/" : "/order/"
  ),
  routes,
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
