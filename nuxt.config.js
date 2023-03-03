import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  "target": "server",
	"nitro": {
		"output": {
			dir: 'output',
			serverDir: 'output/server',
			publicDir: 'output/public'
		}
	},
  generate:{
    fallback:'error404.html'
  }
})
