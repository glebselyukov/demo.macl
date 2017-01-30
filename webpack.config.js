const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const paths = {
    root: path.resolve('.'),
    npm: path.resolve('.', '/node_modules'),
    images: path.resolve('.', '/src/assets/images')
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './index.js'
        // page_single: './page_single.js'
        //     [
        //     // 'webpack-dev-server/client?' + require("ip").address() + ':8080/',
        //     // 'webpack-hot-middleware/client',
        //     // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        //     './index.js'
        // ]
    },
    module: {
        loaders: [
            {
                test: [/\.js$/, /\.es6$/],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1!postcss-loader'
                })
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: "css-loader!less-loader!postcss-loader"
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|svg)$/,
                exclude: /node_modules/,
                loaders: [
                    'file-loader?publicPath=../&name=./assets/images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            },
            {
                test: /\.[ot]tf$/,
                exclude: /node_modules/,
                loader: 'file-loader?publicPath=../&name=./assets/fonts/[name].[ext]'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('[name].bundle.css'),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoEmitOnErrorsPlugin()
    ]
};