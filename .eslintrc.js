module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            alias: {
                map: [
                    ['_', path.resolve(__dirname, 'src')],
                    ['_components', path.resolve(__dirname, 'src/_components')],
                    ['_pages', path.resolve(__dirname, 'src/_pages')],
                    ['_hooks', path.resolve(__dirname, 'src/_hooks')],
                    ['_assets', path.resolve(__dirname, 'src/_assets')],
                    ['_types', path.resolve(__dirname, 'src/_types')],
                    ['_shared', path.resolve(__dirname, 'src/_shared')],
                    ['_styles', path.resolve(__dirname, 'src/_styles')],
                    ['_icons/', path.resolve(__dirname, 'src/_assets/icons')],
                    ['_hocs', path.resolve(__dirname, 'src/hocs')],
                    ['_buttons', path.resolve(__dirname, 'src/_buttons')],
                    ['_formcontrol', path.resolve(__dirname, 'src/_formcontrol')],
                    ['_helpers', path.resolve(__dirname, 'src/_helpers')],
                    ['_mocks', path.resolve(__dirname, 'src/_mocks')],
                    ['_api', path.resolve(__dirname, 'src/_api')],
                    ['_http', path.resolve(__dirname, 'src/_api/_http')],
                    ['_services', path.resolve(__dirname, 'src/_services')],
                    ['_store', path.resolve(__dirname, 'src/_store')],
                    ['_transitions', path.resolve(__dirname, 'src/_components/_transitions')],
                    ['_constants', path.resolve(__dirname, 'src/_constants')],
                    ['_skeletons', path.resolve(__dirname, 'src/_skeletons')],
                    ['_ws', path.resolve(__dirname, 'src/_ws')],
                    ['_friends', path.resolve(__dirname, 'src/_components/_friends')],
                    ['_apis', path.resolve(__dirname, 'src/_api/_apis')],
                ],
            },
        },
    },
};
