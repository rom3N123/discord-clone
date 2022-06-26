import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config: Configuration = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [new BundleAnalyzerPlugin()],
};

export default config;
