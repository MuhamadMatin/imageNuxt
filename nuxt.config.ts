// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', 'nuxt-security', '@nuxtjs/google-fonts', 'nuxt-icon'],
  // cara menambahkan global head pada nuxt
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      title: 'Image search with Pexel API',
    },
  },

  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
    },
  },

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  image: {
    // jika menggunakan nuxtImg maka harus menyertakan domains yang akan dikecualikan pada URL
    domains: ['https://images.pexels.com/photos/', 'https://imagenuxt.netlify.app/', 'http://localhost:3000/'],
  },

  // security: {
  //   headers: {
  //     crossOriginResourcePolicy: 'self',
  //     // contentSecurityPolicy: "default-src 'self'; script-src 'self'; script-src: 'self' 'unsafe-inline'; img-src 'self';",
  //     contentSecurityPolicy: "default-src 'none'; connect-src 'self' https:; font-src 'self' img-src 'self';",
  //   },
  // },
});
