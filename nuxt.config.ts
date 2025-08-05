export default defineNuxtConfig({
  compatibilityDate: '2025-08-02',
  modules: ['@nuxtjs/strapi', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-socket-io'],
  strapi: {
    url: 'http://127.0.0.1:1337',
    prefix: '/api',
    version: 'v4',
    token: process.env.STRAPI_JWT || ''
  },
  socketIO: {
    uri: 'http://127.0.0.1:5001'
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],
  build: {
    transpile: ['gsap', '@fortawesome/vue-fontawesome']
  },
  runtimeConfig: {
    public: {
      strapiUrl: 'http://127.0.0.1:1337',
      backendUrl: 'http://127.0.0.1:5001'
    }
  },
  app: {
    head: {
      title: 'IXome.ai - Smart Home Automation',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'IXome.ai provides AI-driven smart home solutions with Control4 and Lutron support.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', body: true, defer: true }
      ]
    }
  },
  ssr: false,
  errorHandler: '~/error.vue',
  vite: {
    server: {
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
          }
        }
      }
    }
  }
});