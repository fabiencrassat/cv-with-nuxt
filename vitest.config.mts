import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    coverage: {
      reporter: ['text', 'html', 'clover', 'json', 'lcov'],
      reportsDirectory: '../coverage',
      exclude: [
        'app/resources/*.json',
      ],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    environment: 'nuxt',
    setupFiles: ['tests/setup.ts'],
  },
});
