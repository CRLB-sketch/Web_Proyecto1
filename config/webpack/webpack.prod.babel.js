// Referencia: https://github.com/leonardomso/react-bolt/tree/master/src

import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import paths from './paths';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    devtool: 'source-map'
};