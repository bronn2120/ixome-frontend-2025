export default defineNuxtConfig({
  compatibilityDate: '2025-08-21',
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  strapi: {
    url: 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    token: process.env.STRAPI_JWT || '0cd0e40004e6754b99c87190736e1c94094ae5383fab2896f0cceb79f63df1ce3d788d04f45057fd06830bb22a8d91e9af9d6d79ae28694a94df84dcc4c93b490b3a6c72b795195702e380ec0ca9280ba9ca958cf5ef190d548eba87982c9459453c00d92948c94122606f9f4cee9964bef15f2d406e2e7de45bfac23fc4aa22',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
  css: ['~/assets/css/tailwind.css'],
  build: {
    transpile: ['gsap', '@fortawesome/vue-fontawesome', 'bootstrap'],
  },
  runtimeConfig: {
    public: {
      strapiUrl: 'http://127.0.0.1:1337',
      backendUrl: 'http://127.0.0.1:5003',
    },
  },
  app: {
    head: {
      title: 'IXome.ai - Smart Home Automation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'IXome.ai provides AI-driven smart home solutions with Control4 and Lutron support.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap' },
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js', body: true, defer: true },
      ],
    },
  },
  ssr: false,
  errorHandler: '~/error.vue',
  vite: {
    server: {
      hmr: false,
      proxy: {
        '/strapi-api': {
          target: 'http://127.0.0.1:1337',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/strapi-api/, ''),
          configure: (proxy) => {
            proxy.on('proxyRes', (proxyRes) => {
              proxyRes.headers['Access-Control-Allow-Origin'] = '*';
              proxyRes.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS';
              proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type,Authorization';
            });
            proxy.on('error', (err) => {
              console.error('Proxy error:', err);
            });
          },
        },
      },
    },
    logLevel: 'info',
  },
  render: {
    static: true,
    bundleRenderer: {
      shouldPreload: (file, type) => false,
    },
  },
  devtools: {
    enabled: false,
    timeline: false,
  },
})