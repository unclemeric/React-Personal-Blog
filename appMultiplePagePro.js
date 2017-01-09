/**
 * Created by Meric on 2017/1/8.
 */
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var config = require('./config');

app.use(express.static(path.resolve(__dirname,config.staticPath)));

//路由服务
(config.projectConf||[]).forEach(function (conf) {
        router.get(conf.path, function(req, res){
            res.sendFile(path.resolve(config.staticPath,conf.filename));
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