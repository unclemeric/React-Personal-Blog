/**
 * Created by Administrator on 2016/9/6.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const _BASE_ = "./src";
const output_path = path.resolve(__dirname, "./build");
const node_modules = path.resolve(__dirname, 'node_modules');

const Config = {
    devtool: 'eval',
    devServer:{
        devtool:'eval',
        hot:true,
        inline:true,
        publicPath:'',
        port:3000,
        host:'localhost',
        stats:{cached:false,colors:true}
    },
    entry: {
        entry:[
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/dev-server',
            './src/index.js'
        ],//入口文件
    },
    output:{
        path:output_path,
        filename:'js/[name].js',
        publicPath: '/'
    },
    module:{
        preLoaders: [
          {
            // Eslint loader
            test: /\.js?$/,
            loader: 'eslint-loader',
            include: [path.resolve(__dirname, 'src')],
            // exclude: [/node_modules/,path.resolve(__dirname, 'src/utils')],
          },
        ],
        loaders:[
            { test: /\.js?$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react','es2015','stage-0'] } },
            { test:/\.css$/, include: path.resolve(__dirname, _BASE_), loader: "style!css" },
            { test: /\.scss$/, include: path.resolve(__dirname, _BASE_), loader: 'style!css!sass?sourceMap' },
            { test: /\.(png|jpg|gif|ico)$/, loader:`url?limit=8192&name=images/[hash].[ext]` },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "file-loader" }
        ]
    },
    resolve: {
        root: _BASE_,
        extensions:['','.js','.jsx']
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'your app title',
            template: './src/index-dev.html',
            inject:'body',
            hash:true,
        })
    ],
    eslint: {
      configFile: '.eslintrc',
    },
}

module.exports = Config;
