import alias from './config/aliases.ts';
import path from 'path';

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
