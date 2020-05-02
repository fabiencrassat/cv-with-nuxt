module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/.nuxt/**',
    '!**/node_modules/**',
    '!<rootDir>/config/**',
    '!<rootDir>/locales/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/nuxt.config.js',
  ],
  coverageThreshold: {
    global: {
      statements: 39,
      branches: 66,
      functions: 28,
      lines: 39,
    },
  },
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/$1',
    '^~~/(.*)$': '<rootDir>/$1',
  },
  rootDir: '..',
  snapshotSerializers: ['jest-serializer-vue'],
  testPathIgnorePatterns: ['<rootDir>/.nuxt/', '<rootDir>/node_modules/'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  watchman: false,
};
