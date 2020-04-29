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
  modules: [
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_and_default',
        locales: [
          {
            code: 'en',
            file: 'en-US.js',
          },
          {
            code: 'fr',
            file: 'fr-FR.js',
          },
        ],
        defaultLocale: 'fr',
        lazy: true,
        langDir: 'locales/',
        vueI18n: {
          fallbackLocale: 'fr',
        },
      },
    ],
  ],
  serverMiddleware: ['~/serverMiddleware/redirection.js'],
};
