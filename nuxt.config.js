
import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
	router: {
		mode: 'hash'
  },
	ssr: true,
	build: {
		postcss: {
			postcssOptions: require('./postcss.config.js'),
		},
	},
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
		imgBaseUrl: process.env.BASE_URL || ''
	},
	css: [
		'@/assets/css/main.scss',
		'@/assets/css/blog/index.scss',
	],
	modules: ['@nuxtjs/tailwindcss'],
	head: {
		link: [
		  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald|Libre+Baskerville&display=swap' }
		]
	},
	app: {
		head: {
		  script: [
			{
				hid: 'gtm',
				children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID || 'GTM-XXXXXXX'}');`,
				type: 'text/javascript'
			}
		]
		}
	},
	publicRuntimeConfig: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
		imgBaseUrl: process.env.IMG_BASE_URL || ''
	},
	"target": "static",
	"nitro": {
		"output": {
			dir: 'output',
			serverDir: 'output/server',
			publicDir: 'output/public'
		}
	},
	router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
})