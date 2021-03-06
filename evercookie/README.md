# marauder-demo

#### 命令

``` bash
# 安装依赖
npm install

# 启动测试环境，端口8080
npm run dev

# 生产环境打包,打包后的代码在dist目录下
npm run build

```

#### 配置文件
所有配置原则上只允许在marauder.config.js里修改，如果没有该配置选项，请联系fengwan@staff.sina.com.cn

```
marauder.config.js

svnPath		线上环境项目目录,非必填
ftpPath  	测试环境项目目录,非必填
hash  		打包后的js，css，image是否加hash，默认true
resourcePath : ['config.js','config2.js'] 相对路径，会把此类文件copy到dist/resource目录下
```


#### 开发目录结构
```
src
├── css	静态资源
│   ├── index.css
│   └── list.css
├── images 静态资源
│   ├── add_icon.jpg
│   └── align_Hcenter.png
├── js	静态资源
└── view  多页面开发目录
    ├── index  index页面
    │   ├── index.html     index页面首页
    │   └── index.js  		index页面入口js
    └── list   list页面
        ├── index.html     list页面首页
        └── index.js	list页面入口js
```
```
多页面开发时，多页面名称由view下的文件夹名称确定
入口文件必须为index.html
入口js必须为index.js
当启动测试环境后，index页面的测试地址为localhost:8080或localhost:8080/index.html,
list页面的测试地址为localhost:8080/list.html
```
