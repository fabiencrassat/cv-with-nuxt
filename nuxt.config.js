module.exports = {
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    [
      'nuxt-i18n',
      {
        defaultLocale: 'fr',
        langDir: 'locales/',
        lazy: true,
        locales: [
          {
            code: 'en',
            file: 'en-US.js',
            iso: 'en-US',
          },
          {
            code: 'fr',
            file: 'fr-FR.js',
            iso: 'fr-FR',
          },
        ],
        seo: true,
        strategy: 'prefix_and_default',
        vueI18n: {
          fallbackLocale: 'fr',
        },
        vueI18nLoader: true,
      },
    ],
  ],
  serverMiddleware: ['~/serverMiddleware/redirection.js'],
  tailwindcss: {
    configPath: '~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false,
    exposeConfig: false,
  },
};
