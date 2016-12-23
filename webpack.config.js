/**
 * Created by Administrator on 2016/9/6.
 */
/**
 * Created by Administrator on 2016/9/6.
 */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const _BASE_ = "./src";
const publicPath = "http://localhost/";
const output_path = path.resolve(__dirname, "./dist");
console.log(`${output_path}`);
const icon_path = path.resolve(__dirname,'./favicon.ico');
const node_modules = path.resolve(__dirname, 'node_modules');

const Config = {
    entry: {
        bundle:path.resolve(__dirname, `${_BASE_}/index.js`)
    },
    output:{
        path:output_path,
        filename: 'js/[name].[hash:8].min.js',
        chunkFilename: 'js/[name].chunk.js',
        publicPath: publicPath
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
            { test: /\.js?$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react','es2015','stage-0'] } },
            { test: /\.json$/, loader: 'json'},
            { test:/\.css$/, include: path.resolve(__dirname, _BASE_), loader: ExtractTextPlugin.extract('style', 'css') },
            { test: /\.scss$/, include: path.resolve(__dirname, _BASE_), loader: ExtractTextPlugin.extract('style','css!sass?sourceMap') },
            { test: /\.(png|jpg|gif|ico)$/, loader:`url?limit=8192&name=images/[hash].[ext]` },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader : 'file-loader' }
        ]
    },
    resolve: {
        root: _BASE_,
        extensions:['','.js','.jsx']
    },
    plugins:[
        new webpack.NoErrorsPlugin(),//打包时不会因为错误而中断
        new CleanPlugin(['dist']),
        new ExtractTextPlugin(`css/main.css`,{ allChunks: true, disable: false }),//可以将所有css文件打包到css/main.css文件中
        new HtmlWebpackPlugin({
            title: 'Meric的博客',
            template: `${_BASE_}/index.html`,
            inject: 'body',
            hash: true,
            favicon: icon_path,
            minify: {
                removeComments: true,//移除注释
                collapseWhitespace: true
            }
        }),
        new CopyWebpackPlugin([{
            from: `${_BASE_}/static/css/amazeui.min.css`, to: `${output_path}/css`
        },
        {
            from: `${_BASE_}/static/fonts/fontawesome-webfont.woff2`,to:`${output_path}/fonts/`
        }]),
        /* 公共库 */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        }),
        //查找相等或近似的模块，避免在最终生成的文件中出现重复的模块，比如可以用它去除依赖中重复的插件
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
    ],
    eslint: {
        configFile: '.eslintrc',
    },
}

module.exports = Config;
