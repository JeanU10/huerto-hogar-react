module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup/jest.setup.js'],
  testMatch: [
    '<rootDir>/src/tests/**/*.test.js',
    '<rootDir>/src/tests/**/*.test.jsx',
    '<rootDir>/src/**/*.test.js',
    '<rootDir>/src/**/*.test.jsx'
  ],
  moduleNameMapping: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/tests/__mocks__/fileMock.js'
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
    '!src/setupTests.js',
    '!src/tests/**/*'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/build/'
  ],
  moduleDirectories: ['node_modules', 'src'],
  clearMocks: true,
  restoreMocks: true
};