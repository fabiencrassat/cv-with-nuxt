module.exports = {
  // If you are updating this below, please synchronize them in /sonar-project.properties
  collectCoverageFrom: [
    '**/*.{js,ts,vue}',
    '!**/*.d.ts',
    '!<rootDir>/.nuxt/**',
    '!<rootDir>/.scannerwork/**',
    '!<rootDir>/build/**',
    '!<rootDir>/config/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/src/locales/**',
    '!<rootDir>/src/static/sw.js',
    '!<rootDir>/nuxt.config.js',
  ],
  coverageDirectory: '<rootDir>/build/coverage',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@@/(.*)$': '<rootDir>/$1',
  },
  rootDir: '..',
  setupFiles: ['<rootDir>/lib/tests/jest.setup.js'],
  snapshotSerializers: ['jest-serializer-vue'],
  testPathIgnorePatterns: [
    '<rootDir>/.github/',
    '<rootDir>/.nuxt/',
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
