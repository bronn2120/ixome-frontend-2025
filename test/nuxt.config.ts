export default defineNuxtConfig({
    modules: ["@nuxtjs/i18n"],
    i18n: { locales: [{ code: "en", file: "en.js" }, { code: "es", file: "es.js" }], lazy: true, langDir: "lang/", defaultLocale: "en" },
  });