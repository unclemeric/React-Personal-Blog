/**
 * Created by Administrator on 2016/9/6.
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var pageConfig = require('./config').projectConf;


const _BASE_ = "./src";
const output_path = path.resolve(__dirname, "./build");
const autoprefixerLoader = `autoprefixer-loader?browsers=last 2 versions`;
const cssLoader = `css?sourceMap${autoprefixerLoader}`;

const configs = {
    entry: {},
    output: {
        path: output_path,
        publicPath: '/', // output.path的相对路径
        filename: 'js/[name].[hash:8].min.js' // 根据原始名动态命名
    },
    resolve: {
        root: "./src",
        extensions:['','.js','.jsx']
    },
    module: {
        loaders:[
            { test: /\.js?$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react','es2015','stage-0'] } },
            { test:/\.css$/, include: path.resolve(__dirname, _BASE_), loader: cssLoader },
            { test:/\.less$/, include: path.resolve(__dirname, _BASE_), loader: ExtractTextPlugin.extract('style',`${cssLoader}!less?sourceMap`) },
            { test: /\.scss$/, include: path.resolve(__dirname, _BASE_), loader: ExtractTextPlugin.extract('style',`${cssLoader}!sass?sourceMap`) },
            {
                test: /\.(png|jpg|gif|ico)$/,
                loaders: [
                    'image-webpack?{progressive:true, optimizationLevel: 4, ' +
                    'interlaced: false, pngquant:{quality: "65-90", speed: 4}}', // 压缩图片
                    `url?limit=8192&name=images/[hash].[ext]`, // 小于10kb的图片base64格式内联到css文件中。
                ]
            },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`css/[name].[hash:8].min.css`),//可以将所有css文件打包到css/main.css文件中
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"'}),
        new CleanPlugin(['build']),
        new webpack.ProvidePlugin({'_': "lodash"}),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([{
            from: `${_BASE_}/static/css/amazeui.min.css`, to: `${output_path}/css`
        },
        {
            from: `${_BASE_}/static/fonts/fontawesome-webfont.woff2`,to:`${output_path}/fonts`
        }]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
let filenameArr = ['vendor'];
pageConfig.forEach(function (conf) {
    //通过模板动态生成配置文件里面的html页面
    let filename = conf.filename.split('\.')[0];
    configs.entry[filename] = conf.entryPath;
    configs.plugins.push(new HtmlWebpackPlugin({
        title: conf.title,
        filename: `${conf.filename.split('\.')[0]}.html`,
        template: './src/index.html',
        inject:'body',
        chunks:['vendor', filename],
        hash:true,
        minify: {
            removeComments: true,//移除注释
            collapseWhitespace: true
        }
    }));
    filenameArr.concat(filename);
});
//把公用的lodashjs打包到公共的js里面
configs.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        name: filenameArr,
        minChunks:2
    })
),
module.exports = configs;