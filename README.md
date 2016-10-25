# ReactScaffold
React scaffolding using webpack 

##目录
```
├─.idea
└─src
    ├─component
    ├─config
    ├─static
    │  ├─fonts
    │  ├─images
    │  └─sass
    └─utils
```
##说明
```
本项目没有热加载
安装全局webpack webpack-dev-server
"deploy-dev": "set NODE_ENV=development&&webpack -p --progress --colors",                                           //在根目录生成/build文件夹和编译后的文件
"deploy-dev-server": "set NODE_ENV=development&&webpack-dev-server --progress --colors --port 3000",                //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost:3000
"deploy-server": "set NODE_ENV=production&&webpack-dev-server --progress --colors --port 80"                        //执行deploy-dev-server,等待编译完之后 在浏览器访问:http://localhost
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