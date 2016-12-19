/**
 * Created by Meric on 2016/10/24.
 */
var express = require('express');
var app = express();
var path = require('path');
var config = require('./config')

var dist = "./dist";
app.use(express.static(path.resolve(dist)));

app.use('/',function (req,res) {
	res.sendFile(path.resolve(dist+"/index.html"));
});
app.listen(config.port,function (req,res,error) {
	if(error){
		console.log('server error!');
		throw error;
	}
	console.log('server running on port ',config.port);
})