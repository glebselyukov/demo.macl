const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
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