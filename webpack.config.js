/**
 * Created by Administrator on 2016/9/6.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const _DEV_ = process.env.NODE_ENV !== 'production';
const _BASE_ = "./src";
const output_path = path.resolve(__dirname, _DEV_ ? "./build" : "./dist");
const icon_path = path.resolve(__dirname,'./favicon.ico');
const node_modules = path.resolve(__dirname, 'node_modules');

const Config = {
    entry: {
        bundle:path.resolve(__dirname, `${_BASE_}/entry.js`)
    },
    output:{
        path:output_path,
        filename:_DEV_ ? 'js/[name].js' : 'js/[name].[hash:8].min.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: _DEV_ ? '/' : 'http://localhost/'
    },
    module:{
        preLoaders: [
          {
            // Eslint loader
            test: /\.js?$/,
            loader: 'eslint-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: [/node_modules/,path.resolve(__dirname, 'src/utils')],
          },
        ],
        loaders:[
            { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['react','es2015','stage-0'] } },
	          {test: /\.json$/, loader: 'json'},
            { test:/\.css$/, include: path.resolve(__dirname, _BASE_), loader: _DEV_ ? "style!css" : ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.scss$/, include: path.resolve(__dirname, _BASE_), loader: 'style!css!sass?sourceMap' },
            { test: /\.(png|jpg|gif|ico)$/, loader:`url?limit=8192&name=images/[hash].[ext]` },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' }
        ]
    },
    resolve: {
        root: _BASE_,
        extensions:['','.js','.jsx']
    },
    plugins:[
				new webpack.DefinePlugin({
					'process.env':{
					  'NODE_ENV': "'production'"
					}
				}),//查找相等或近似的模块，避免在最终生成的文件中出现重复的模块，比如可以用它去除依赖中重复的插件
        new webpack.NoErrorsPlugin(),//打包时不会因为错误而中断
        new CleanPlugin(['dist']),
        new ExtractTextPlugin(`${output_path}/main.css`,{ allChunks: true, disable: false }),//可以将所有css文件打包到一个css文件中
        new HtmlWebpackPlugin({
            title: 'your app title',
            template: `${_BASE_}/index.html`,
            inject: 'body',
            hash: true,
            favicon: icon_path,
            minify: {
                removeComments: !_DEV_,//移除注释
                collapseWhitespace: !_DEV_
            },
            files: {
                "css": ["main.css"],
            }
        }),
        new CopyWebpackPlugin([{
            from: `${_BASE_}/static/css/amazeui.min.css`,to:`${output_path}/css`
        }]),
        /* 公共库 */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        })
    ],
    eslint: {
      configFile: '.eslintrc',
    },
}

if(_DEV_){
    Config.devtool = 'inline-source-map';
}else{
    Config.plugins.concat([
        //可以减少重复文件数
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),//为组件和模块分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID，通过分析ID，可以建议降低总文件的大小
        new webpack.optimize.UglifyJsPlugin({
            output: { comments: false },
            compress: { warnings: false, },
            mangle: { except: ['$super', '$', 'exports', 'require'] }
        })
    ])
}

module.exports = Config;
