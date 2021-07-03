export default {
  target: 'static',

  generate: {
    fallback: '404.html'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Weeb Poly',

    loading: '~/components/Preloader.vue',

    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'in waifui confidimus' },

      { hid: 'og:title', property: 'og:title', content: 'Weeb Poly' },
      { hid: 'og:description', property: 'og:description', content: 'in waifui confidimus' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Weeb Poly' },
    ],

    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },

      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.7/css/boxicons.min.css' },
    ],

    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    // { src: '~/assets/scss/bootstrap.scss', lang: 'sass' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src : '~/plugins/bootstrap.js', ssr : false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources'
  ],

  googleFonts: {
    families: {
     'Open+Sans': true,
     'Raleway': true,
     'Poppins': true
    }
  },

  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  }
}
