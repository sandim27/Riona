var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/root.js'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css',{allChunks:true}),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    devServer:{
        contentBase: __dirname,
        hot:true
    },
    resolve: {
        extensions: ['', '.js', '.css','.jade'],
        modulesDirectories: ['node_modules']
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src"),
                ],
            }
        ],
        loaders: [
            {
                test: /(masonry-layout|jquery-bridget)/,
                loader: 'imports?define=>false&this=>window'
            },
            {   test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jade$/,
                loader: 'pug-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&minetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /bootstrap\/js\//,
                loader: 'imports?jQuery=jquery'
            },
            {
                test: /\.(jpg|png|gif)$/i,
                loader: 'file-loader?name=images/[name].[ext]'
            }

        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
}