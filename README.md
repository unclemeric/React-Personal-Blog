# React-Personal-Blog
用react写的个人博客

##目录
```
|   .eslintignore                                                       eslint忽略配置文件
|   .eslintrc                                                           eslint配置文件
|   .gitignore                                                          github忽略提交文件配置
|   app.js                                                              服务启动入口
|   config.js                                                           项目服务配置文件
|   favicon.ico                                                         网站图标
|   MarkdownEditor                                                      Markdown编辑器说明
|   package.json                                                        项目依赖json文件
|   ReactMarkdown.md                                                    ReactMarkdown说明文件
|   README.md                                                           项目说明文件
|   webpack.config.js                                                   webpack配置文件
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
##说明
```
本项目没有热加载
安装全局webpack webpack-dev-server
window环境下
"deploy-dev": "set NODE_ENV=development&&webpack -p --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "set NODE_ENV=development&&webpack-dev-server --progress --colors --port 3000",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000
"deploy-server": "set NODE_ENV=production&&webpack-dev-server --progress --colors --port 80"                        //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost
linux环境下
"deploy-dev": "export NODE_ENV=development&&webpack -p --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "export NODE_ENV=development&&webpack-dev-server --progress --colors --port 3000",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000
"deploy-server": "export NODE_ENV=production&&webpack-dev-server --progress --colors --port 80"                        //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost
```
##功能
***markdown文本编辑功能***

##关于eslint的使用
```
作用：为避免低级 Bug、产出风格统一的代码，会预先制定编码规范。使用 Lint 工具和代码风格检测工具，则可以辅助编码规范执行，有效控制代码质量。

ps：由于第一次使用，还有很多规则没有写到，没写到的可以自己在.eslintrc配置文件增加。eslint会使在编写代码的时候会遇到很多问题...头疼，但是使用这个能是代码更规范！
```
#plugins
```
markdown编辑器(react-md-editor)：markdown语法的编辑器，无法上传图片，要实现需把图片上传到服务器在引用服务器的图片地址
markdown转义成HTML(markdown):markdown.parse(markdown语法字符串)(本项目没用到)
```
#LINUX环境注意
```
set NODE_ENV = production是window的写法  在linux环境下面需写成export NODE = production
例如在Linux环境下用pm2启动export NODE = production && pm2 start app.js
```