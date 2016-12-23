# React-Personal-Blog
用react写的个人博客

##目录
```
|   .eslintignore                                                       eslint忽略配置文件
|   .eslintrc                                                           eslint配置文件
|   .gitignore                                                          github忽略提交文件配置
|   app.js                                                              服务启动入口
|   appMultiplePage.js                                                  多页面服务启动入口
|   config.js                                                           项目服务配置文件
|   favicon.ico                                                         网站图标
|   MarkdownEditor                                                      Markdown编辑器说明
|   package.json                                                        项目依赖json文件
|   ReactMarkdown.md                                                    ReactMarkdown说明文件
|   README.md                                                           项目说明文件
|   webpack.config.js                                                   webpack配置文件
|   webpack.config.dev                                                  webpack热加载配置文件
|   webpack.config.dev.multiplepage.js                                  webpack多页面配置文件
\---src                                                                 view层文件存放目录
    |   entry.js                                                        之前使用的入口文件，现在不用了
    |   index.html                                                      页面模板文件
    |   index.js                                                        js入口文件
    +---component                                                       组件目录
    |   +---Articles                                                    文章组件
    |   |       index.js                                                
    |   |       style.scss                                              
    |   +---ConnectMe                                                   联系我组件
    |   |       index.js                                                
    |   +---FeedBack                                                    反馈组件
    |   |       index.js                                                
    |   |       style.scss                                              
    |   +---Notes                                                       笔记组件
    |   |       index.js                                                
    |   |       style.scss                                              
    |   +---PageFooter                                                  尾部组件
    |   |       index.js                                                
    |   |       style.scss                                              
    |   +---PageHeader                                                  头部组件
    |   |   |   index.js                                                
    |   |   |   style.scss                                              
    |   |   +---Header                                                  头组件
    |   |   |       index.js                                            
    |   |   |       style.scss                                          
    |   |   \---HeaderNav                                               头部导航栏
    |   |           index.js                                            
    |   |           style.scss                                          
    |   +---PageIndex                                                   首页组件
    |   |   |   index.js                                                
    |   |   |   style.scss                                              
    |   |   \---IndexContent                                            首页内容组件
    |   |           index.js                                            
    |   |           style.scss                                          
    |   \---Profile                                                     个人简介
    |           index.js                                                
    |           style.scss                                              
    +---config                                                          页面配置文件
    |       index.js                                                    
    +---static                                                          静态文件目录
    |   +---css                                                         
    |   |       amazeui.min.css                                         amazeui样式
    |   |       base.scss                                               
    |   |       codemirror.css                                          markdown插件css文件
    |   +---fonts                                                       
    |   |       fontawesome-webfont.woff2                               amazeui字体
    |   +---images                                                      图片目录
    |   |       header.png                                              
    |   |       logo.png                                                
    |   |       profile_ico_b.png                                       
    |   \---scss                                                        
    |           component.scss                                          
    |           index.scss                                              
    \---utils                                                           工具类
            autoChange.js                                               
```
##project说明
```
安装全局webpack webpack-dev-server
"deploy-dev": "webpack --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "webpack-dev-server --config webpack.config.dev.js --progress --colors",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000 有热加载功能 适用于开发
"deploy-server": "webpack --config webpack.config.js --progress --colors&&nodemon app.js"                        //执行deploy-server,等待编译完之后 在浏览器访问:http://localhost
相关配置请看config文件
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

