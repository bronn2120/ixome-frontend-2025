export default defineNuxtConfig({
  compatibilityDate: "2025-11-05",
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxt/content", "@nuxt/image", "@nuxtjs/i18n", "@vite-pwa/nuxt", "@nuxtjs/seo", "nuxt-gtag", "@vueuse/nuxt", "nuxt-security"],
  ui: { global: true, colorMode: { preference: "system", storageKey: "nuxt-color-mode" } },
  i18n: { locales: [{ code: "en", file: "en.js" }, { code: "es", file: "es.js" }], lazy: true, langDir: "lang/", defaultLocale: "en" },
  pwa: { manifest: { name: "Ixome AI Agents", short_name: "Ixome", theme_color: "#007bff", display: "standalone" } },
  image: { provider: "ipx", densities: [1, 2], format: ["webp"] },
  seo: { titleTemplate: "%siteName - %title", meta: [{ name: "description", content: "Autonomous AI agents for smart home support" }] },
  gtag: { id: "G-XXXXXXX" },
  security: { headers: { contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'", xFrameOptions: "DENY" } },
  postcss: { plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} } },
  vite: { optimizeDeps: { include: ["pinia", "zod"] } },
  tailwindcss: { cssPath: "~/assets/css/tailwind.css", configPath: "tailwind.config.js", viewer: true },
  devtools: { enabled: true },
  nitro: { prerender: { crawlLinks: true, routes: ["/", "/agents", "/subscribe", "/support", "/blog", "/contact"], ignore: ["/api/*"] } },
  content: { experimental: { sqliteConnector: "better-sqlite3" } }, // Default db, explicit for clarity
});