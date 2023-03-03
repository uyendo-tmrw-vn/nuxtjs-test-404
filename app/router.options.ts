
import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      component: () => import('~/pages/index.vue')
    },
    {
      name: 'news',
      path: '/news',
      component: () => import('~/pages/news.vue')
    },
    {
      name: '404',
      path: '*',
      component: () => import('~/pages/404.vue')
    },
    // { path: '*', beforeEnter: (to, from, next) => { next('/404') } },
  ],
}