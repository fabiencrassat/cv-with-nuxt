/* global defineNuxtConfig */
// https://nuxt.com/docs/api/configuration/nuxt-config

const getBaseUrl = function getBaseUrl() {
  if (process.env.ENVIRONMENT_DEPLOYMENT === 'production') {
    return 'https://cv.crassat.com';
  }
  if (process.env.ENVIRONMENT_DEPLOYMENT === 'preview') {
    return 'https://cv-with-nuxt-git-refs-headsmaster.fabiencrassat.vercel.app';
  }
  return 'http://localhost:3000';
};

export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/test-utils/module', '@nuxt/eslint', 'nuxt-gtag'],
  // eslint-disable-next-line sort-keys
  devtools: { enabled: true },
  // eslint-disable-next-line sort-keys
  app: {
    head: {
      link: [
        { href: '/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/favicon-194x194.png', rel: 'icon', sizes: '194x194', type: 'image/png' },
        { href: '/favicon-192x192.png', rel: 'icon', sizes: '192x192', type: 'image/png' },
        { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { color: '#2d89ef', href: '/safari-pinned-tab.svg', rel: 'mask-icon' },
      ],
      meta: [
        // No meta tag depending of the language here, add them inside the pages
        { content: 'website', name: 'og:type' },
        { content: '/fabien-crassat.jpeg', name: 'og:image' },
        { content: '#2d89ef', name: 'msapplication-TileColor' },
        { content: '/mstile-144x144.png?v=pglLvXNvMx', name: 'msapplication-TileImage' },
        { content: '#ffffff', name: 'theme-color' },
      ],
    },
  },
  srcDir: 'src/',
  // eslint-disable-next-line sort-keys
  routeRules: {
    '/': { redirect: '/fabien' },
    '/fabien/en': { redirect: '/en/fabien' },
    '/fabien/fr': { redirect: '/fr/fabien' },
  },
  // eslint-disable-next-line sort-keys
  compatibilityDate: '2024-04-03',
  gtag: {
    id: 'G-LBT5GENK84',
  },
  i18n: {
    baseUrl: getBaseUrl(),
    defaultLocale: 'fr',
    langDir: '../i18n/locales/',
    lazy: true,
    locales: [
      {
        code: 'en',
        file: 'en-US.ts',
        language: 'en-US',
      },
      {
        code: 'fr',
        file: 'fr-FR.ts',
        language: 'fr-FR',
      },
    ],
    strategy: 'prefix_and_default',
    vueI18n: './config/i18n.config.ts',
  },
  tailwindcss: {
    configPath: '~~/config/tailwind.config.ts',
  },
});
