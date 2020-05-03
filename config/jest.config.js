module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,vue}', '!<rootDir>/locales/**'],
  coverageDirectory: '../coverage',
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
  rootDir: '../src',
  snapshotSerializers: ['jest-serializer-vue'],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  watchman: false,
};
