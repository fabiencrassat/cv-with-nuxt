module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/.nuxt/**',
    '!**/node_modules/**',
    '!<rootDir>/config/**',
    '!<rootDir>/coverage/**',
    '!<rootDir>/dist/**',
  ],
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
