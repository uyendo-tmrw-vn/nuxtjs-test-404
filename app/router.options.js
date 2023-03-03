
// import type { RouterConfig } from '@nuxt/schema'
// // https://router.vuejs.org/api/interfaces/routeroptions.html
// export default <RouterConfig> {
//   routes: (_routes) => [
//     {
//       name: 'home',
//       path: '/',
//       component: () => import('~/pages/index.vue')
//     },
//     {
//       name: 'news',
//       path: '/news',
//       component: () => import('~/pages/news.vue')
//     },
//     // {
//     //   name: '404',
//     //   path: '*',
//     //   component: () => import('~/404.vue')
//     // },
//     { path: '*', beforeEnter: (to, from, next) => { next('/404') } },
//   ],
// }



export default defineNuxtRouteMiddleware((to,from) => {
console.log(to, from);
  // skip middleware on server
  if (process.server) return
  // skip middleware on client side entirely
  if (process.client) return
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp()
  console.log({nuxtApp});

  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return
})