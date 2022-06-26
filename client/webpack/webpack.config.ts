import merge from 'webpack-merge';
import commonConfig from './webpack.common';
import * as webpack from 'webpack';
import dev from './webpack.dev';
import prod from './webpack.prod';

const configByEnv: Record<string, webpack.Configuration> = {
    dev,
    prod,
};

const getConfig = async ({ env }: any): Promise<webpack.Configuration> => {
    const envConfig = configByEnv[env];

    return merge<webpack.Configuration>(commonConfig, envConfig);
};

export default getConfig;
