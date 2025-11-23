import { defineVitestConfig } from '@nuxt/test-utils/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'nuxt'
  },
  resolve: {
    alias: {
      '#imports': fileURLToPath(new URL('./.nuxt/imports.d.ts', import.meta.url))
    }
  }
})