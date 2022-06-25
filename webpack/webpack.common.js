const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const resolveAlias = (p) => path.resolve(__dirname, p);

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            _: resolveAlias('src'),
            _components: resolveAlias('src/_components'),
            _shared: resolveAlias('src/_components/_shared'),
            _assets: resolveAlias('src/_assets'),
            _pages: resolveAlias('src/_pages'),
            _styled: resolveAlias('src/styled'),
            _styles: resolveAlias('src/_styles'),
            _icons: resolveAlias('src/_assets/_icons'),
            _types: resolveAlias('src/_types'),
            _hocs: resolveAlias('src/_hocs'),
            _buttons: resolveAlias('src/_components/_shared/_buttons'),
            _formcontrol: resolveAlias('src/_components/_shared/_formcontrol'),
            _helpers: resolveAlias('src/_helpers'),
            _hooks: resolveAlias('src/_hooks'),
            _mocks: resolveAlias('src/_mocks'),
            _api: resolveAlias('src/_api'),
            _http: resolveAlias('src/_api/_http'),
            _services: resolveAlias('src/_services'),
            _store: resolveAlias('src/_store'),
            _transitions: resolveAlias('src/_components/_transitions'),
            _constants: resolveAlias('src/_constants'),
            _skeletons: resolveAlias('src/_components/_skeletons'),
            _ws: resolveAlias('src/_api/_ws'),
            _friends: resolveAlias('src/_components/_friends'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
            },
        ],
    },

    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new CopyPlugin({
            patterns: [{ from: 'src', to: 'build' }],
        }),
    ],
};
