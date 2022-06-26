import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        historyApiFallback: true,
        port: 3000,
    },
    plugins: [new ReactRefreshWebpackPlugin()],
};

export default config;
