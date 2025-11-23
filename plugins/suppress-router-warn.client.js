import { defineNuxtPlugin } from '#app'
export default defineNuxtPlugin(() => {
  const originalWarn = console.warn
  console.warn = (message, ...args) => {
    if (typeof message === 'string' && message.includes('asset(s)')) {
      return
    }
    originalWarn(message, ...args)
  }
})
