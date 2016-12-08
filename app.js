/**
 * Created by Meric on 2016/10/24.
 */
var express = require('express');
var app = express();
var path = require('path');
var config = require('./config')

app.use(express.static(path.resolve(__dirname,config.staticPath)));

app.use('/',function (req,res) {
	res.sendFile(path.resolve(config.entryHtml));
});
app.listen(config.port,function (req,res,error) {
	if(error){
		console.log('server error!');
		throw error;
	}
	console.log('server running on port ',config.port);
})