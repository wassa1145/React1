module.exports = {
  collectCoverage: true,

  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '^src/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: 'jsdom',

  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$',

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
};
