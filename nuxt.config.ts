import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2025-11-05',
  ssr: true,
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-og-image',
    '@nuxt/test-utils/module',
  ],
  content: {
    markdown: { mdc: false },
  },
  i18n: {
    lazy: false,
    locales: [
      { code: 'en' },
      { code: 'es' },
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },
  ogImage: {
    enabled: true,
  },
  nitro: {
    logLevel: 'debug',
  },
  typescript: {
    strict: true,
  },
  server: {
    port: 3000,
    host: 'localhost',
  },
});
