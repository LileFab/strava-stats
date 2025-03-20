// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	googleFonts: {
		families: {
			Roboto: true,
			Oswald: true,
		},
	},
	modules: [
		"@nuxt/fonts",
		"@nuxt/icon",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
	],

	runtimeConfig: {
		public: {
			stravaClientId: process.env.STRAVA_CLIENT_ID,
		},
		stravaClientSecret: process.env.STRAVA_CLIENT_SECRET,
		stravaRefreshToken: process.env.STRAVA_REFRESH_TOKEN,
		stravaAccessToken: process.env.STRAVA_ACCESS_TOKEN,
	},
});
