import nuxtConfig from './config/nuxt.config';

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
  head: nuxtConfig.head,
  modules: [
    ['nuxt-i18n', nuxtConfig.nuxti18n],
    '@nuxtjs/sitemap', // always declare the sitemap module after nuxt-i18n
    ['@nuxtjs/robots', nuxtConfig.robots],
  ],
  serverMiddleware: ['~/middleware/redirection.js'],
  sitemap: nuxtConfig.sitemap,
  srcDir: nuxtConfig.srcDir,
  tailwindcss: nuxtConfig.tailwindcss,
};
