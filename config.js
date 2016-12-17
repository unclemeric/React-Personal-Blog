/**
 * Created by Meric on 2016/10/24.
 */
module.exports = {
	port: 80,
	staticPath: './build',
	projectConf:[
		{
			title:'Meric的博客',
			filename:'home.html',
			entryPath:'./src/index.js',
			path:'/'
		},
		{
            title:'MarkDown编辑器Demo',
			filename:'markdown.html',
            entryPath:'./src/entry.js',
			path:'/markdown'
		}
	]
}