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
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  modules: [
    [
      "nuxt-i18n",
      {
        strategy: "prefix_and_default",
        locales: ["en", "fr"],
        defaultLocale: "fr",
        vueI18n: {
          fallbackLocale: "fr",
          messages: {
            en: {
              greeting: "Hello world!",
            },
            fr: {
              greeting: "Bonjour le monde!",
            },
          },
        },
      },
    ],
  ],
  serverMiddleware: ["~/servermiddleware/redirection.js"],
};
