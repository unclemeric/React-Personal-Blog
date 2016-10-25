/**
 * Created by Meric on 2016/10/24.
 */
var express = require('express');
var app = express();
var path = require('path');
var config = require('./config')

var isDev = process.env.NODE_ENV !== 'production';
var path_page = isDev ? 'build' : 'dist';

app.use(express.static(path.resolve(__dirname,`./${path_page}`)));

app.use('/',function (req,res) {
	res.sendFile(path.resolve(`${path_page}/index.html`));
});
app.listen(config.port,function (req,res,error) {
	if(error){
		console.log('server error!');
		throw error;
	}
	console.log('server running on port ',config.port);
})