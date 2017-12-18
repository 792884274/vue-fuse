# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).




#### npm install 报错 
- 
```
Administrator@n-PC MINGW64 /d/20170503/helloWorld/GitHub.com/vue-fuse (master)
$ npm install

> chromedriver@2.33.2 install D:\20170503\helloWorld\GitHub.com\vue-fuse\node_modules\chromedriver
> node install.js

Downloading https://chromedriver.storage.googleapis.com/2.33/chromedriver_win32.zip
Saving to C:\Users\ADMINI~1\AppData\Local\Temp\chromedriver\chromedriver_win32.zip
ChromeDriver installation failed Error with http(s) request: Error: read ECONNRESET
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! chromedriver@2.33.2 install: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the chromedriver@2.33.2 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2017-12-07T01_19_54_718Z-debug.l
og

Administrator@n-PC MINGW64 /d/20170503/helloWorld/GitHub.com/vue-fuse (master)
$
```

> 经分析发现，某些版本下，chromedriver 的 zip 文件 url 的响应是 302 跳转，而在 install.js 里使用的是 Node.js 内置的 http 对象的 get 方法无法处理 302 跳转的情况；而在另外一些情况下，则是因为 googleapis.com 被墙了，此时即使采用科学上网的方法也仍然无法获取文件。

- 
无论是上述哪种情况，可以使用下面的命令安装：
```
npm install chromedriver --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```

- 
```
npm ERR! Unexpected end of JSON input while parsing near '...size":6073,"noattachm'  npm ERR! A comp
```

运行`npm cache clean --force`即可解决”Unexpected end of JSON input while parsing near”错误。