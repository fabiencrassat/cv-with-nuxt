module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!<rootDir>/locales/**'],
  coverageDirectory: '../coverage',
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
  rootDir: '../src',
  snapshotSerializers: ['jest-serializer-vue'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  watchman: false,
};
