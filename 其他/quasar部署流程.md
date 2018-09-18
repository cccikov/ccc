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
 UnhandledPromiseRejectionWarning: CordovaError: No platforms added to this project. Please use "cordova platform add <platform>".
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


------------------------------

### 从头开始一个新项目

* `quasar init quasar_test`

* `cd quasar_test`

* `quasar dev` 运行成功

* `quasar info` 查看quasar 依赖包信息

    ``` bash
    Operating System                Windows_NT(10.0.14393) - win32/x64
    NodeJs                          8.12.0

    Global packages
      NPM                           6.4.1
      yarn                          Not installed
      quasar-cli                    0.17.18
      vue-cli                       2.9.6
      cordova                       8.0.0

    Important local packages
      quasar-cli                    0.17.18 (Quasar Framework CLI)
      quasar-framework              0.17.15 (Build responsive SPA, SSR, PWA, Hybrid Mobile Apps and Electron apps, all simultaneously using the same codebase)
      quasar-extras                 2.0.6   (Quasar Framework fonts, icons and animations)
      vue                           2.5.17  (Reactive, component-oriented view layer for modern web interfaces.)
      vue-router                    3.0.1   (Official router for Vue.js 2)
      vuex                          3.0.1   (state management for Vue.js)
      electron                      Not installed
      electron-packager             Not installed
      electron-builder              Not installed
      @babel/core                   7.0.0-beta.54   (Babel compiler core.)
      webpack                       4.18.1  (Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.)
      webpack-dev-server            3.1.8   (Serves a webpack app. Updates the browser on changes.)
      workbox-webpack-plugin        3.5.0   (A plugin for your Webpack build process, helping you generate a manifest of local files that workbox-sw should precache.)
      register-service-worker       1.5.2   (Script for registering service worker, with hooks)

    Networking
      Host                          CMFQ8D6A8MCO7EJ
      以太网                        192.168.0.172

    ```

* `quasar mode -a cordova` 添加 cordova

* `cd src-cordova`

* `cordova platform` 查看可以添加的平台

    ``` bash
    Installed platforms:
      android 7.0.0
    Available platforms:
      browser ~5.0.1
      ios ~4.5.4
      osx ~4.0.1
      windows ~5.0.0
      www ^3.12.0
    ```

* `cordova platform add android` 增加android平台

* `cordova requirements` 验证cordova环境

    ``` bash
    Android Studio project detected

    Requirements check results for android:
    Java JDK: installed 1.8.0
    Android SDK: installed true
    Android target: installed android-28,android-27,android-26,android-25,android-24,android-23,android-22,android-21,android-19,android-18,android-17,android-16,android-15,android-14
    Gradle: installed C:\Program Files\Android\Android Studio\gradle\gradle-4.1\bin\gradle
    ```

* `cd ../`回到项目目录

* `quasar build -m cordova -T android` 成功打包 release目录中

apk虽然打包出来了，但是安装不了

直接进入目录

* `cordova build` 直接使用cordova命令构建app apk是在debug目录 打包的是debug版本

* `cordova build android --release` 打包发行版 发现也是不行

研究cordova打包发行版
