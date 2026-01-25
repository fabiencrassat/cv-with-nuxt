import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    coverage: {
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
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
