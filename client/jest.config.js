module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        '^_$': '<rootDir>/src$1',
        '^_components(.*)$': '<rootDir>/src/_components$1',
        '^_mocks(.*)$': '<rootDir>/src/_mocks$1',
        '^_store(.*)$': '<rootDir>/src/_store$1',
    },
};
