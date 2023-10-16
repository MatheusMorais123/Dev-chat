import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
  return {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
    coverageDirectory: 'coverage',
    transform: {
      '.+\\.(ts|tsx)$': 'ts-jest',
    },

    // Automatically clear mock calls and instances between every test
    clearMocks: true,

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

    moduleNameMapper: {
      'src/(.*)': '<rootDir>/src/$1',
    },
  };
};
