module.exports = {
  modules: [
    [
      'nuxt-i18n',
      {
        locales: ['en', 'fr'],
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr',
          messages: {
            en: {
              greeting: 'Hello world!'
            },
            fr: {
              greeting: 'Bonjour le monde!'
            }
          }
        }
      }
    ]
  ],
  serverMiddleware: [
    '~/servermiddleware/redirection.js'
  ]
};
