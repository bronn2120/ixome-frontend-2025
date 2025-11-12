import { defineVitestConfig } from '@nuxt/test-utils/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineVitestConfig({
  plugins: [tsconfigPaths({ loose: true })],
  resolve: {
    alias: {
      '~': resolve(__dirname, '.'),
    },
  },
  test: {
    environment: 'nuxt',
    globals: true,
  },
})
