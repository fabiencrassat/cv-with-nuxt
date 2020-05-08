const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
const siteMapUrl = '/sitemap.xml';
const title = 'Curriculum Vitae';

module.exports = {
  head: {
    title: title,
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
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#fdf8f0' },
    ],
  },
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
  sitemap: {
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    path: siteMapUrl,
  },
  srcDir: 'src/',
  tailwindcss: {
    configPath: '~~/config/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: false,
    exposeConfig: false,
  },
};
