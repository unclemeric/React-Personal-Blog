/**
 * Created by Administrator on 2016/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var pageConfig = require('./config').projectConf;


const _BASE_ = "./src";
const output_path = path.resolve(__dirname, "./build");

const configs = {
    entry: {
        vender: ['webpack/hot/dev-server', 'webpack-hot-middleware/client'], // 额外插件打包成vender
        // index: './src/index.js',
        // entry: './src/entry.js'
    },
    output: {
        path: output_path,
        publicPath: '/', // output.path的相对路径
        filename: 'js/[name].js' // 根据原始名动态命名
    },
    resolve: {
        root: "./src",
        extensions:['','.js','.jsx']
    },
    module: {
        loaders:[
            { test: /\.js?$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react','es2015','stage-0'] } },
            { test:/\.css$/, include: path.resolve(__dirname, _BASE_), loader: "style!css" },
            { test: /\.scss$/, include: path.resolve(__dirname, _BASE_), loader: 'style!css!sass?sourceMap' },
            { test: /\.(png|jpg|gif|ico)$/, loader:`url?limit=8192&name=images/[hash].[ext]` },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: `${_BASE_}/static/css/amazeui.min.css`, to: `${output_path}/css`
        },
            {
                from: `${_BASE_}/static/fonts/fontawesome-webfont.woff2`,to:`${output_path}/fonts/fontawesome-webfont.woff2`
            }]),
    ]
};
pageConfig.forEach(function (conf) {
    //通过模板动态生成配置文件里面的html页面
    configs.entry[conf.filename] = conf.entryPath;
    configs.plugins.push(new HtmlWebpackPlugin({
        title: conf.title,
        filename: conf.filename,
        template: './src/index.html',
        inject:'body',
        chunks:['vendor', conf.filename],
        hash:true,
    }));
})
module.exports = configs;