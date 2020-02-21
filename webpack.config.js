const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const src = path.join(__dirname, 'src');

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: `bundle.[hash:8].js`,
        publicPath: '/',
    },
    resolve: {
        alias: {
            'src': src,
            'components': path.join(src, 'components'),
        },
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|pdf|ttf|otf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: path.join(__dirname, '/dist/index.html'),
            // favicon: path.join(__dirname, '/src/favicon.ico'),
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        publicPath: '/',
        contentBase: '/',
        hot: true,
        historyApiFallback: true
    },
    optimization: {
        minimize: true,
    }
};
