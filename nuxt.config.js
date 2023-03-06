import {
  defineNuxtConfig
} from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  target: 'static',
  "nitro": {
    "output": {
      dir: 'output',
      serverDir: 'output/server',
      publicDir: 'output/public'
    }
  },
  generate: {
    fallback: true
  },
  router: {
		mode: 'hash'
  },
	ssr: true,
	// swr : true,
  routeRules: {
    '/error404': { redirect: { to: '/error404', statusCode: 404 } }
  }
})