module.exports = {
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
    '^~~/(.*)$': '<rootDir>/$1',
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
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
};
