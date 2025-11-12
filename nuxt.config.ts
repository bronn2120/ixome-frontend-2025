export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-11-11',
  modules: [
 googleFonts: {
  families: {
    Roboto: true,
  },
 },
 i18n: {
  defaultLocale: 'en',
  locales: ['en'],
 },
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/web-vitals',
    '@nuxtjs/turnstile',
    '@nuxtjs/partytown',
    '@nuxtjs/critters',
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
  ],
  plugins: [
    '~/plugins/suppress-router-warn.js',
    '~/plugins/fontawesome.js',
  ],
  css: ['~/assets/css/tailwind.css'],
  build: {
 postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
 },
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      siteName: 'Ixome AI',
      siteDescription: 'AI-powered smart home support',
      language: 'en-US',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  site: {
    url: 'https://ixome.ai',
    name: 'Ixome AI',
    description: 'AI-powered smart home support',
    defaultLocale: 'en',
  },
});
