module.exports = {
  // If you are updating this below, please synchronize them in /sonar-project.properties
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!<rootDir>/config/**',
    '!<rootDir>/build/**',
    '!<rootDir>/nuxt.config.js',
    '!<rootDir>/src/locales/**',
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
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^~~/(.*)$': '<rootDir>/$1',
    '^@@/(.*)$': '<rootDir>/$1',
  },
  rootDir: '..',
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
  },
};
