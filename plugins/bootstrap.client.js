import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
      console.log('Bootstrap loaded');
      nuxtApp.provide('bootstrap', bootstrap);
    }).catch(err => {
      console.error('Failed to load Bootstrap:', err);
    });
  }
});