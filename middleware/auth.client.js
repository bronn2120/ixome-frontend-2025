// Perfect client-only auth middleware for IxomeAI – November 21, 2025
// Redirects to /login if no JWT found in localStorage
// File name 'auth.client.js' registers as 'auth' middleware in Nuxt
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
      const jwt = localStorage.getItem('jwt')
      const protectedPaths = ['/dashboard', '/control-panels', '/subscribe', '/payment-success', '/payment-cancel']
      if (protectedPaths.some(path => to.path.startsWith(path)) && !jwt) {
        return navigateTo('/login')
      }
    }
  })