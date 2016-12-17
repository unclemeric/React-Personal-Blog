/**
 * Created by Meric on 2016/10/24.
 */
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var config = require('./config');
var webpack = require('webpack');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config.dev.multiplepage.js');
var compiler = webpack(webpackConfig);

// 引入webpack组件
app.use(webpackHotMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: { webpackConfig: true }
}));
app.use(webpackDevMiddleware(compiler));
app.use(express.static(path.resolve(__dirname,config.staticPath)));

//路由服务
(config.projectConf||[]).forEach(function (conf) {
        router.get(conf.path, function(req, res){
            res.sendfile(path.resolve(config.staticPath,conf.filename));
        });
    // }
});
app.use("/",router);

app.listen(config.port,function (req,res,error) {
	if(error){
		console.log('server error!');
		throw error;
	}
	console.log('server running on port ',config.port);
})