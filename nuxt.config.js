export default {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Nuxt Axios Proxy Error Example',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Trying to replicate my issues with Nuxt Axios & Proxy Module.'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],

	/*
	 ** Axios module configuration
	 */
	axios: {
		debug: true,
		proxy: true,
		proxyHeadersIgnore: ['set-cookie']
	},

	proxy: {
		'/ticker': 'https://dev-app.rivalry.gg/app/matches/ticker'
	}
};
