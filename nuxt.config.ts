import { defineNuxtConfig } from 'nuxt/config';
export default defineNuxtConfig({
  compatibilityDate: '2025-11-05', // Enforce latest, fix ssr
  ssr: true, // Enable SSR
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    'nuxt-og-image',
    '@nuxt/test-utils/module', // For Vitest integration
  ],
  content: {
    // Content options if needed
  },
  ui: {
    // UI options if needed
  },
  i18n: {
    lazy: false,
    locales: [
      { code: 'en' },
      { code: 'es' }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts', // With messages
  },
  ogImage: {
    enabled: true, // Enabled with SSR true, no warn
  },
  nitro: {
    // Nitro options if needed
  },
  typescript: {
    strict: true,
  },
  // Add other custom configs here
});
