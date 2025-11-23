import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-11-21',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/strapi',
    '@nuxt/content',
    '@nuxtjs/i18n'
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    strategy: 'prefix_except_default'
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337'
  },
  routeRules: {
    '/dashboard': { ssr: false },
    '/control-panels': { ssr: false },
    '/login': { ssr: false },
    '/pricing': { ssr: false },
    '/subscribe': { ssr: false }
  },
  nitro: {
    preset: 'node-server'
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://ixome.ai',
      siteName: 'IxomeAI',
      siteDescription: 'AI-powered smart home support for Lutron, Control4, and Snap One',
      language: 'en-US',
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || '',
      stripeBasicPriceId: process.env.STRIPE_BASIC_PRICE_ID || '',
      stripeProPriceId: process.env.STRIPE_PRO_PRICE_ID || '',
      stripeEnterprisePriceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || ''
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  plugins: [
    '~/plugins/suppress-router-warn.client.js',
    '~/plugins/fontawesome.client.js',
    '~/plugins/bootstrap.client.js'
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@fortawesome/vue-fontawesome']
    }
  },
  devServer: {
    port: 3000
  }
})