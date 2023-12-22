// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-security'],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
    },
  },
  security: {
    headers: {
      crossOriginResourcePolicy: 'same-origin',
      contentSecurityPolicy: "img-src 'self' https://images.pexels.com https://www.google-analytics.com",
    },
  },
});
