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
        app: './index.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader?importLoaders=1!postcss-loader'
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: "css-loader!less-loader!postcss-loader"
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader: 'file-loader?limit=1024&name=dist/assets/images/[name].[ext]'
            },
            {   test: /\.[ot]tf$/,
                loader: 'file-loader?limit=65000&mimetype=application/octet-stream&name=dist/assets/fonts/[name].[ext]'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/assets')
    },
    plugins: [
        new ExtractTextPlugin('dist/[name].bundle.css')
    ]
};