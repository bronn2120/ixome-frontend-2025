import { defineVitestConfig } from '@nuxt/test-utils/config';
import tsconfigPaths from 'vite-tsconfig-paths'
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineVitestConfig({
  plugins: [viteTsconfigPaths()],
  test: {
    environment: 'nuxt',
    globals: true,
  },
});
