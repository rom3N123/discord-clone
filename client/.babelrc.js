const alias = require('./config/aliases.ts');
const path = require('path');

module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { runtime: 'automatic' }],
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-transform-runtime',
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root: [path.resolve('.')],
                alias,
            },
        ],
    ],
};
