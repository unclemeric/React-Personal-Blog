# React-Personal-Blog
用react写的个人博客，需要用接口部分请结合[接口API项目](https://github.com/unclemeric/BlogAPI)使用

##目录
```
|   .eslintignore   
|   .eslintrc
|   .gitignore
|   app.js                                                              express生产环境单页面入口文件
|   appMultiplePageDev.js                                               express多页面测试环境入口文件
|   appMultiplePagePro.js                                               express多页面生产环境入口文件
|   config.js                                                           项目内部配置文件(接口api、页面配置等)
|   favicon.ico
|   package.json
|   ReactMarkdown.md
|   README.md                                                           说明文档
|   webpack.config.dev.js                                               webpack单页面测试环境配置文件
|   webpack.config.dev.multiplepage.js                                  webpack多页面测试环境配置文件
|   webpack.config.js                                                   webpack单页面生产环境配置文件
|   webpack.config.pro.multiplepage.js                                  webpack多页面生产环境配置文件
|
\---src                                                                 代码根目录
    |   admin-index.js                                                  admin后台入口文件
    |   entry.js                                                        tes1页面入口文件
    |   index-style.scss                                                
    |   index.html                                                      页面模板文件
    |   index.js                                                        前台页面入口文件
    |
    +---component                                                       组件目录
    |   +---Admin                                                       admin后台组件目录
    |   |   |   index.scss
    |   |   |
    |   |   +---Home                                                    
    |   |   |   |   index.js
    |   |   |   |   style.scss
    |   |   |   |
    |   |   |   \---Articles                                            文章编辑列表组件
    |   |   |           edit.js                                         文章编辑组件
    |   |   |           index.js                                        文章列表
    |   |   |           style.scss
    |   |   |
    |   |   +---LeftNav                                                 左边菜单栏
    |   |   |       index.js
    |   |   |       index.scss
    |   |   |
    |   |   \---PublishArticle                                          发布文章组件
    |   |           index.js
    |   |           style.scss
    |   |
    |   +---Articles                                                    前台文章
    |   |   |   index.js                                                前台文章列表组件
    |   |   |   style.scss
    |   |   |
    |   |   \---Article                                                 前台文章内容页
    |   |           index.js
    |   |
    |   +---ConnectMe                                                   前台联系我组件
    |   |       index.js
    |   |
    |   +---FeedBack                                                    前台反馈组件
    |   |       index.js
    |   |       style.scss
    |   |
    |   +---MDEditor                                                    markdown编辑器容器(可自定义，markdown主要代码不在这)
    |   |       index.js
    |   |
    |   +---MyPagination                                                分页组件
    |   |       index.js
    |   |       style.scss
    |   |
    |   +---Notes
    |   |       index.js
    |   |       style.scss
    |   |
    |   +---PageFooter                                                  页尾
    |   |       index.js
    |   |       style.scss
    |   |
    |   +---PageHeader                                                  页头容器
    |   |   |   index.js
    |   |   |   style.scss
    |   |   |
    |   |   +---Header                                                  页头
    |   |   |       index.js
    |   |   |       style.scss
    |   |   |
    |   |   \---HeaderNav                                               页头导航菜单
    |   |           index.js
    |   |           style.scss
    |   |
    |   +---PageIndex                                                   首页
    |   |   |   index.js
    |   |   |   style.scss
    |   |   |
    |   |   \---IndexContent                                            首页内容
    |   |           index.js
    |   |           style.scss
    |   |
    |   \---Profile                                                     个人资料
    |           index.js
    |           style.scss
    |
    +---config                                                          个人资料配置文件
    |       profileConfig.js
    |
    +---lib                                                             markdown组件
    |       editor.js
    |       editor.less
    |
    +---static
    |   +---css
    |   |       amazeui.min.css
    |   |       base.scss
    |   |       codemirror.css                                          markdown样式文件
    |   |
    |   +---fonts
    |   |       fontawesome-webfont.woff2
    |   |
    |   +---images
    |   |       header.png
    |   |       logo.png
    |   |       profile_ico_b.png
    |   |
    |   \---scss
    |           component.scss                                          markdown sass文件
    |           index.scss
    |
    \---utils
            amazeutil.js
            autoChange.js
            DataUtils.js
```

##webpack配置文件说明
```
webpack.config.js：用于生产环境编译文件。
webpack.config.dev.js：用于开发阶段编译文件。修改react文件之后会自动编译  不需要手动编译
```
##功能
***markdown文本编辑功能***

##关于eslint的使用
```
作用：为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。

ps：由于第一次使用，还有很多规则没有写到，没写到的可以自己在.eslintrc配置文件增加。eslint会使在编写代码的时候会遇到很多问题...头疼，但是使用这个能是代码更规范！
不需要的可以在webpack配置文件里面去掉下面两个配置：
preLoaders: [
  {
    // Eslint loader
    test: /\.js?$/,
    loader: 'eslint-loader',
    include: [path.resolve(__dirname, 'src')],
    exclude: [/node_modules/,path.resolve(__dirname, 'src/utils')],
  },
],
eslint: {
  configFile: '.eslintrc',
},
```

###关于appMultiplePage.js和webpack.config.dev.multiplepage.js的说明
```
"deploy-dev": "webpack -p --progress --colors",
"deploy-dev-server": "webpack-dev-server --config webpack.config.dev.js --progress --colors",                                                                 //开发环境单页面启动脚本
"deploy-server": "webpack -p --config webpack.config.js --progress --colors&&nodemon app.js",                                                                 //生产环境单页面启动脚本
"multiple-page-dev": "node ./appMultiplePageDev.js",                                                                                                          //开发环境多页面的服务启动入口脚本，根据配置文件的projectConf配置生成路由服务，结合react热加载，不需要手动重新编译，但是需要手动刷新页面。
"multiple-page-pro": "webpack -p --config webpack.config.pro.multiplepage.js&&node ./appMultiplePagePro.js"                                                   //生产环境多页面服务启动脚本

appMultiplePage.js：一个react多页面的服务启动入口js，根据配置文件的projectConf配置生成路由服务，结合react热加载，不需要手动重新编译，但是需要手动刷新页面。
webpack.config.dev.multiplepage.js：根据配置(config.js)自动生成多个页面的webpack配置文件

多页面启动方式：
先执行webpack --config webpack.config.dev.multiplepage.js --progress --color 编译项目，再启动多页面服务nodemon appMultiplePage.js
或者执行script脚本npm run multiple-page-build再执行npm run nodemon appMultiplePage.js
```


***
2016/12/23 
- 增加[markdown编辑器](https://github.com/leozdgao/react-markdown)功能
- 修改之前抽离css不成功bug

