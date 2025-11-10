import { defineVitestConfig } from '@nuxt/test-utils/config';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineVitestConfig({
  plugins: [viteTsconfigPaths()],
  test: {
    environment: 'nuxt',
    globals: true,
  },
});
