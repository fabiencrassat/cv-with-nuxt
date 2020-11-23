import curriculumVitae from './src/resources/fabien';

const getBaseUrl = function getBaseUrl() {
  if (process.env.ENVIRONMENT_DEPLOYMENT === 'production') {
    return 'https://cv.crassat.com';
  }
  if (process.env.ENVIRONMENT_DEPLOYMENT === 'preview') {
    return 'https://cv-with-nuxt-git-refs-headsmaster.fabiencrassat.vercel.app';
  }
  return 'http://localhost:3000';
};

const baseUrl = getBaseUrl();
const siteMapUrl = '/sitemap.xml';
const title = `${curriculumVitae.identity.myself.fullName} CV`;
const description = `${curriculumVitae.identity.myself.fullName} - ${curriculumVitae.experiences.Reacteev.job.en}`;
const nuxtConfig = {
  nuxti18n: {
    baseUrl,
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
    vueI18nLoader: true,
  },
  robots: {
    Sitemap: `${baseUrl}${siteMapUrl}`,
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
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    ['@nuxt/typescript-build', { typeCheck: false }],
    '@nuxtjs/tailwindcss',
  ],
  generate: {
    subFolders: false,
  },
  googleAnalytics: {
    id: 'UA-45807436-1',
    debug: {
      sendHitTask: true,
    },
    set: [
      // Remove the stat.g.doubleclick.net request
      { allow_ad_personalization_signals: false },
    ],
  },
  head: {
    link: [
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
        href: '/favicon-192x192.png?v=pglLvXNvMx',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png?v=pglLvXNvMx',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg?v=pglLvXNvMx',
        color: '#2d89ef',
      },
    ],
    meta: [
      // No meta tag depending of the language here, add them inside the pages
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: baseUrl,
      },
      { hid: 'og:locale', name: 'og:locale', content: 'fr_FR' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/fabien-crassat.jpeg',
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
    'nuxt-lazy-load',
  ],
  pwa: {
    icon: {
      sizes: [36, 48, 64, 72, 96, 120, 144, 152, 192, 256, 384, 512],
    },
    manifest: {
      name: title,
      short_name: title,
      description,
    },
    meta: {
      description,
      theme_color: '#ffffff',
    },
    workbox: {
      offlineAnalytics: true,
    },
  },
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
  target: 'static',
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
};
