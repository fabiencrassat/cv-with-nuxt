import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    coverage: {
      thresholds: {
        branches: 96,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    environment: 'nuxt',
  },
});
