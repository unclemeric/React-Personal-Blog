/**
 * Created by Meric on 2016/10/24.
 */
const apiPrefix = "http://127.0.0.1:3000/";
module.exports = {
	port: 80,
	staticPath: './build',
	projectConf:[
		{
			title:'Web Note',
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
            title:'后台管理',
            filename:'admin-index.html',
            entryPath:'./src/admin-index.js',
            path:'/admin'
        }
	],
	Admin:{
        Api:{
        	apiPrefix: apiPrefix,
            publish_article:`${apiPrefix}admin/article/put`,
            list_article:`${apiPrefix}admin/article`,
            edit_article:`${apiPrefix}admin/article/edit`,
            delete_article:`${apiPrefix}admin/article/delete`,
		},
		AdminMenu:[

		]

	}
}