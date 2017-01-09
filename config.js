/**
 * Created by Meric on 2016/10/24.
 */
const apiPrefix = "http://127.0.0.1:3000/admin";
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
	],
	Admin:{
        Api:{
            publish_article:`${apiPrefix}/article/put`,
            list_article:`${apiPrefix}/article`,
            edit_article:`${apiPrefix}/article/edit`,
            delete_article:`${apiPrefix}/article/delete`,
		},
		AdminMenu:[

		]

	}
}