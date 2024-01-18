module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  transformIgnorePatterns: [
    '/node_modules/(?!d3|d3-geo|d3-array|internmap|delaunator|nanoid|@cko/access|@cko/dashboard-shared|jose|jwe|njwt|uuid|@smithy|@aws-sdk)'
  ],
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleDirectories: ['<rootDir>/src', 'node_modules'],
  globalSetup: './jestGlobalSetup.ts',
  setupFiles: ['jest-canvas-mock'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.d.ts',
    '!node_modules/',
    '!src/remotes/**/*',
    '!coverage/**/*',
    '!src/app-settings.ts',
    '!src/test/**/*',
    '!src/types/**/*',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!src/constants/**/*',
    'server/**/*.{js,jsx,ts,tsx}',
    '!server/types/**/*'
  ],
  watchPathIgnorePatterns: ['coverage']
};
