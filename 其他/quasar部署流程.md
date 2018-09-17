# quasar 部署流程

`npm install -g vue-cli`

`npm install -g quasar-cli`

`quasar init quasar_test` 入门套件

`cd quasar_test` 进入目录

`npm install -g cordova`

`export ANDROID_HOME="$HOME/Android/Sdk"`

`PATH=$PATH:$ANDROID_HOME/tools; PATH=$PATH:$ANDROID_HOME/platform-tools`

`quasar mode -a cordova` 开始出错

``` bash
app:mode-cordova Creating Cordova source folder... +0ms
 app:spawn [sync] Running "cordova create src-cordova org.cordova.quasar.app Quasar App" +0ms

Creating a new cordova project.
(node:8500) UnhandledPromiseRejectionWarning: Error: Unhandled "error" event. (  Error from Cordova Fetch: Error: cmd: Command failed with exit code 1 Error output:
npm ERR! code ENOLOCAL
npm ERR! Could not install from "..\AppData\Roaming\npm\node_modules\cordova\node_modules\_cordova-app-hello-world@3.12.0@cordova-app-hello-world\index.js" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2018-09-17T05_59_50_394Z-debug.log)
    at EventEmitter.emit (events.js:186:19)
    at EventEmitter.module.exports.emit (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_cordova-common@2.2.5@cordova-common\src\events.js:71:17)
    at C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_cordova-create@1.1.2@cordova-create\index.js:206:32
    at _rejected (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:864:24)
    at C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:890:30
    at Promise.when (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:1142:31)
    at Promise.promise.promiseDispatch (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:808:41)
    at C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:624:44
    at runSingle (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:137:13)
    at flush (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_q@1.5.1@q\q.js:125:13)
(node:8500) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:8500) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
 app:mode-cordova Cordova support was installed +3s
 app:mode-cordova App name was taken from package.json: "Quasar App" +0ms

 app:mode-cordova If you want a different App name then remove Cordova support, edit productName field from package.json then add Cordova support again. +0ms

 app:mode-cordova Please manually add Cordova platforms using Cordova CLI from the newly created "src-cordova" folder. +0ms

```

解决方式：用`npm`代替`cnpm`安装cordova


`cd src-cordova`

`cordova requirements` 报错

``` bash
 UnhandledPromiseRejectionWarning: CordovaError: No platforms added to this project. Please use `cordova platform add <platform>`.
```

`cordova platform` 可知道可以添加的平台

`cordova platform add android`


### 在quasar_mszm项目中尝试

build命令 `quasar build -m cordova -T android`

文档描述可在`/src-cordova/platforms/android/build/outputs/apk`找到apk

出现两个报错

``` bash
  app:spawn [sync] Running "cordova platform add android" +0ms

(node:6336) UnhandledPromiseRejectionWarning: CordovaError: Current working directory is not a Cordova-based project.
    at Object.cdProjectRoot (C:\Users\Administrator\AppData\Roaming\npm\node_modules\cordova\node_modules\_cordova-lib@8.0.0@cordova-lib\src\cordova\util.js:170                                :15)
```


``` bash
app:spawn Running "cordova build --release android" +0ms

(node:8316) UnhandledPromiseRejectionWarning: CordovaError: No platforms added to this project. Please use `cordova platform add <platform>`.
    at Object.preProcessOptions (C:\Users\Administrator\AppData\Roaming\npm\node                                _modules\cordova\node_modules\_cordova-lib@8.0.0@cordova-lib\src\cordova\util.js                                :312:15)

```

build 的时候这两个命令错误`cordova platform add android` `cordova build --release android`

`/src-cordova/`目录下面并没有`platforms`文件夹


解决方式：用`npm`代替`cnpm`安装cordova


`cd src-cordova`

`cordova requirements` 报错

``` bash
 UnhandledPromiseRejectionWarning: CordovaError: No platforms added to this project. Please use `cordova platform add <platform>`.
```

`cordova platform` 可知道可以添加的平台

`cordova platform add android`

`cd ../`回到项目目录

`quasar build -m cordova -T android`


### 研究cordova

创建项目`cordova create myApp com.myCompany.myApp myApp` 立即报错

``` bash
Creating a new cordova project.
(node:8308) UnhandledPromiseRejectionWarning: Error: Unhandled "error" event. (  Error from Cordova Fetch: Error: cmd: Command failed with exit code 1 Error output:
npm ERR! code ENOLOCAL
npm ERR! Could not install from "..\AppData\Roaming\npm\node_modules\cordova\node_modules\_cordova-app-hello-world@3.12.0@cordova-app-hello-world\index.js" as it does not contain a package.json file.

```

解决方式：用`npm`代替`cnpm`安装cordova