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
            title:'MarkDown显示',
			filename:'markdown.html',
            entryPath:'./src/entry.js',
			path:'/markdown'
		},
        {
            title:'Blog后台管理',
            filename:'admin-index.html',
            entryPath:'./src/admin-index.js',
            path:'/admin'
        }
	]
}