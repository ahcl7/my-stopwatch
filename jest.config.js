module.exports = {
  roots: ['<rootDir>/packages/*'],
  modulePathIgnorePatterns: ['<rootDir>/packages/connector-blessed'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
