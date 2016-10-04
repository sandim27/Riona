var path = require('path')
var webpack = require('webpack')

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
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",

        })
    ],

    devServer:{
        contentBase: __dirname,
        hot:true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src/modules"),
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
                loader: 'jade-loader'
            }
        ]
    }
}