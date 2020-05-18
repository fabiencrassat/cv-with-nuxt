const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const siteMapUrl = '/sitemap.xml';
const title = 'Curriculum Vitae';
const nuxtConfig = {
  nuxti18n: {
    baseUrl: baseUrl,
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
  robots: {
    Sitemap: siteMapUrl,
  },
};

module.exports = {
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
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
  generate: {
    subFolders: false,
  },
  head: {
    title: title,
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png?v=pglLvXNvMx',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png?v=pglLvXNvMx',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '194x194',
        href: '/favicon-194x194.png?v=pglLvXNvMx',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-chrome-192x192.png?v=pglLvXNvMx',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=pglLvXNvMx',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest?v=pglLvXNvMx',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg?v=pglLvXNvMx',
        color: '#2d89ef',
      },
      {
        rel: 'shortcut icon',
        href: '/favicon.ico?v=pglLvXNvMx',
      },
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: baseUrl,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: title,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: title,
      },
      { hid: 'og:locale', name: 'og:locale', content: 'fr_FR' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/fabien-crassat.jpeg',
      },
      {
        hid: 'apple-mobile-web-app-title',
        name: 'apple-mobile-web-app-title',
        content: title,
      },
      {
        hid: 'application-name',
        name: 'application-name',
        content: title,
      },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
      {
        name: 'msapplication-TileImage',
        content: '/mstile-144x144.png?v=pglLvXNvMx',
      },
      { name: 'theme-color', content: '#ffffff' },
    ],
  },
  modules: [
    ['nuxt-i18n', nuxtConfig.nuxti18n],
    '@nuxtjs/sitemap', // always declare the sitemap module after nuxt-i18n
    ['@nuxtjs/robots', nuxtConfig.robots],
  ],
  sitemap: {
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    hostname: baseUrl,
    path: siteMapUrl,
  },
  srcDir: 'src/',
  tailwindcss: {
    configPath: '~~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: false,
  },
};
