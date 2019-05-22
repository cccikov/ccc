# quasar 部署流程

`npm install -g vue-cli`

`npm install -g quasar-cli`

`quasar init quasar_test` 入门套件

`cd quasar_test` 进入目录

`npm install -g cordova`

`export ANDROID_HOME="$HOME/Android/Sdk"`

`PATH=$PATH:$ANDROID_HOME/tools; PATH=$PATH:$ANDROID_HOME/platform-tools`

设置环境变量

Cordova的CLI工具需要设置一些环境变量才能正常运行。CLI将尝试为您设置这些变量，但在某些情况下，您可能需要手动设置它们。应更新以下变量：

1. 将JAVA_HOME环境变量设置为JDK安装的位置
2. 将ANDROID_HOME环境变量设置为Android SDK安装的位置
3. 此外，还建议你添加了Android SDK的tools，tools/bin和platform-tools目录到您的PATH

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

`cordova platform add android@7`


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


解决方式：用`npm`代替`cnpm`安装cordova , 实际是因为那个文件夹不是完整的cordova文件夹 ，删除`/src-cordova/`文件夹，在quasar项目目录执行`quasar mode -a cordova`再次创建`/src-cordova/`



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


`cd myApp/`

`cordova platform add android`

`cordova build`

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
    Android target: installed android-28,android-27,android-26,android-25,android-24,android-23,android-22,android-21,android-19,android-18,android-17,android-16,android-15,android-14·
    Gradle: installed C:\Program Files\Android\Android Studio\gradle\gradle-4.1\bin\gradle
    ```

* `cd ../`回到项目目录

* `quasar build -m cordova -T android` 成功打包 release目录中

apk虽然打包出来了，但是安装不了

直接进入目录`src-cordova` ，由于该目录是cordova的目录，可以直接使用cordova的命令，可以直接把它当成cordova的项目

* `cordova build` 直接使用cordova命令构建app apk是在debug目录 打包的是debug版本

* `cordova build android --release` 打包发行版 发现也是不行

研究cordova打包发行版

Android APK 手动打包流程

Android app 的打包流程大致分为 build , sign , align 三部分。

build是构建 APK 的过程，分为 debug 和 release 两种。release 是发布到应用商店的版本。

sign是为 APK 签名。不管是哪一种 APK 都必须经过数字签名后才能安装到设备上，签名需要对应的证书（keystore），大部分情况下 APK 都采用的自签名证书，就是自己生成证书然后给应用签名。

align是压缩和优化的步骤，优化后会减少 app 运行时的内存开销。

debug 版本的的打包过程一般由开发工具（比如 Android Studio）自动完成的。开发工具在构建时会自动生成证书然后签名，不需要我们操心。而 release 版本则需要开发者自己生成证书文件。Cordova 作为 hybrid app 的框架不像纯 Android 开发那么自动化，所以第一次打 release 包我们需要了解一下手动打包的过程。


1. Build

    首先，我们生成一个 release APK 。这点在 cordova build 命令后加一个 --release 参数局可以。如果成功，你可以在 android-apk 目录下看到一个 android-release-unsigned.apk 文件。

    `cordova build android --release`

2. Sign

    我们需要先生成一个数字签名文件（keystore）。这个文件只需要生成一次。以后每次 sign 都用它。

    `keytool -genkey -v -keystore release-key.keystore -alias cordova-demo -keyalg RSA -keysize 2048 -validity 10000`

    上面的命令意思是，生成一个 release-key.keystore 的文件，别名（alias）为 cordova-demo 。

    报错

    ``` bash
    'keytool' 不是内部或外部命令，也不是可运行的程序或批处理文件。
    ```

    keytool是在java的bin里面 C:\Program Files\Java\jdk1.8.0_181\bin

    使用命令行跳转到`C:\Program Files\Java\jdk1.8.0_181\bin`

    运行（使用cmd 不要使用git bash）

    `keytool -genkey -v -keystore release-key.keystore -alias cordova-demo -keyalg RSA -keysize 2048 -validity 10000`

    发现也是会报错 `java.io.FileNotFoundException: android.keystore` 据说是由于c盘该目录权限问题

    `keytool -genkey -v -keystore E:/release-key.keystore -alias cordova-demo -keyalg RSA -keysize 2048 -validity 10000`

    对 APK 签名

    `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore E:/release-key.keystore C:/ccc_code/quasar_test/src-cordova/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk cordova-demo`

    签名成功

    添加系统变量`C:\Program Files\Java\jdk1.8.0_181\bin`

    为了方便使用keytool，给系统变量加上java就可以了

    增加`classpath` `.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar 2`
    增加`JAVA_HOME` `C:\Program Files\Java\jdk1.8.0_181`
    `Path` 增加`C:\Program Files\Java\jdk1.8.0_181\bin`

3. 添加系统变量后，

    `cd src-cordova`

    `cordova build android --release` 生成出来的是安装不了的

    利用已有的签名文件对apk进行签名

    `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore release-key.keystore ./platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk cordova-demo`

4. 自动打包

    一旦有了 keystore 文件，下次打包就可以很快了。你可以在 cordova build 中指定所有参数来快速打包。这会直接生成一个 android-release.apk 给你。

    将`release-key.keystore`文件放在`src-cordova`目录下

    `cordova build android --release -- --keystore="release-key.keystore" --alias=cordova-demo --storePassword=testccc --password=testccc`

5. build.json

    虽然使用上面的命令可以快速打包出来，但是太多参数，而且我们使用的quasar打包

    新建`build.json`

    ``` json
    {
      "android": {
        "release": {
          "keystore": "release-key.keystore",
          "alias": "cordova-demo",
          "storePassword": "testccc",
          "password": "testccc"
        }
      }
    }
    ```

    直接运行命令`cordova build --release`就可以了，不需要再打参数

6. 直接在quasar目录输入命令

    `quasar clean` 清空以前构建的文件

    `quasar build -m cordova -T android`

7. 让正式项目也可以直接打包

    将 `release-key.keystore` 和 `build.json` 复制到正式项目中

### 增加权限

除了要增加插件`cordova plugin add cordova-plugin-android-permissions`外

还要在配置文件`config.xml` 声明需要什么权限

``` xml
<config-file parent="/*" target="AndroidManifest.xml">
  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.RECORD_AUDIO" />
  <uses-permission android:name="android.permission.BATTERY_STATS" />
</config-file>
```

在`<widget>`也要加上这句话

```
 xmlns:android="http://schemas.android.com/apk/res/android"
```

`/src-cordova/platforms` 和 `/src-cordova/plugins` 也有可能出现错误，删除这两个文件夹后

再根据`package.json` 里面的 `codrova` 属性里面的 `platform` 和 `plugin` 来添加平台和插件


### 其他

项目转移后。在 cordova 项目目录中，`npm i` 可以将配置在 `package.json` 里面的 `plugins` 也添加，然后执行`cordova run` 或者 `cordova build` 会将 `platforms` 添加上

`quasar dev -m cordova -T android` 可以真机调试

`cordova\platforms\android` 目录是安卓项目目录，可以用 android studio 打开



## quasar学习

QPage必须由QPageContainer封装，而QPageContainer又必须是QLayout的子节点。

```
<q-layout>
  ...
  <q-page-container>
    <q-page>
      <!-- 页面内容 -->
    </q-page>
  </q-page-container>
</q-layout>
```

QLayout 布局是包装页面内容的元素，如导航栏或侧滑菜单。是一个组件，用于一个页面有共用（一般在切换页面的时候不变）的头部、底部、侧栏。显示的内容就在页面的中间切换，中间的内容就是q-page，切换的也是q-page。

使用 QLayout 布局一般是用在单页应用的第一级，一般二级页面再往下就没有头部底部了，所以就一般不在需要用到 Qlayout 。如果二级页面需要侧栏也可以再次使用隐藏了头部底部的QLayout。

由于 q-page 要在q-layout里面使用，所以当一个页面不需要用到q-layout的时候也不要再用q-page了



























## ios mac 打包

ios命令行需要 sudo 像 linux 一样

ios-deploy not installed
cocopods no installed

`sudo npm install -g ios-deploy`安装报错，改用下面
`sudo npm install -g ios-deploy --unsafe-perm=true`

`sudo gem install cocoapods`

xcode项目目录`Resurces/config/xxxinfo.plist` 设置权限 其实在打包好的目录info.plist里面也有

对打包好（build成功）的app进行签名（validate App）前，需要在 apple developer 网站上里面的 `app store connect` 里面添加即将需要上传的app。

1. 需要套装id（应该就是Bundle identifier）是自己定义的

总打包流程
1. 在quasar项目中执行 `quasar build -m cordova -T ios` 进行打包
2. 在`⁨quasar_mszm⁩ ▸ ⁨src-cordova⁩ ▸ ⁨platforms⁩ ▸ ⁨ios⁩` 目录中找到 `.xcodeproj` 文件
3. 打开后，点击该项目可以配置信息，可以配置名字，Bundle identifier，版本号。打包前一定要配置Bundle identifier （原项目的package.json中的`cordovaId`）
4. 测试（Development）和发布（Distribution）都需要 Provisioning Profiles , 好容易申请，可以下载
5. 在xcode最上面的顶栏那里，有一个可以选择设备的，测试时选择链接macbook的设备；打包时选择Generic iOS Device 通用设备
6. 在菜单栏 Product -> Archive 进行打包成 `.ipa` 苹果安装包
7. build successed 之后，可以选择 `Distribute App` 发布App，和 `Validate App` 对app进行签名。
8.  `Validate App` 一直done next 就好了。又要给选择证书的时候选择下载下来的 发布版（Distribution）的 `Provisioning Profiles` 是 `.mobileprovision` 后缀的
9. 签名成功后就可以 `Distribute App` 了 就可以上传到 自己的 app store connect 等待发布



苹果开发者

Certificate,IDs & Profiles -- certificates 开发者证书制作

* About Creating a Certificate Signing Request (CSR) 关于创建证书签名请求（CSR）

    
    >要手动生成证书，您需要Mac上的证书签名请求（CSR）文件。要创建CSR文件，请按照以下说明使用Keychain Access创建一个。

    >创建CSR文件。
    在Mac上的Applications（应用程序）文件夹中，打开Utilities文件夹并启动Keychain Access(可以直接搜索)。
  
    >在Keychain Access下拉菜单中，选择Keychain Access（钥匙串访问）> Certificate Assistant（证书助理）>从证书颁发机构请求证书。

    >在“证书信息”窗口中，输入以下信息：
    >在用户电子邮件地址字段中，输入您的电子邮件地址（开发者账户的）。
    >在Common Name字段中，为您的私钥创建一个名称（例如，John Doe Dev Key）。
    >CA电子邮件地址字段应保留为空。
    >在“请求是”组中，选择“保存到磁盘”选项。
    >单击Keychain Access中的Continue以完成CSR生成过程。

    **有些时候可能会报 ‘no signing certificate "ios development" found’ ,这时我们可以下载生成csr，在mac中双击打开**

* 添加设备 Devices Registering a New Device or Multiple Devices （注册新设备或多个设备）

* ios Provisioning Profiles （iOS配置文件）
    
    这个下载后也双击一下吧
 















## Quasar应用程序流程

[http://www.quasarchs.com/guide/app-plugins.html](http://www.quasarchs.com/guide/app-plugins.html)

为了更好地理解插件的功能和用途，您需要了解您的网站/应用程序是如何启动的：

Quasar初始化（组件，指令，插件，Quasar i18n，Quasar图标集）
Quasar Extras被导入（Roboto字体 - 如果使用，图标，动画…）
Quasar CSS和您的应用程序的全局CSS已导入
App.vue被加载（尚未被使用）
Store被导入（如果在src/store中使用Vuex存储）
应用程序插件已导入
除了应用程序Boot插件外，应用程序插件会执行其默认导出功能
7.（如果在Electron模式下）Electron 被导入并注入Vue原型
8.（如果在Cordova模式下）收听“deviceready”事件，然后继续执行以下步骤
9.（如果应用程序Boot插件存在）执行应用程序Boot插件
10.（如果不存在应用程序Boot插件）使用根组件实例化Vue并附加到DOM


### Cordova - 设置iOS下默认语言为中文（防止某些插件、界面显示英文）

xcode项目目录 - Resources - xxxx-info.plist - Localization native development region 设置为 china


### cordova Config.xml 详解

https://cordova.apache.org/docs/en/latest/config_ref/index.html

```
allow-navigation

该URL的webView控件本身可以浏览到。仅适用于顶级导航。

属性(类型) href(string)
描述 Required 定义组的WebView允许导航到外部域的

例子:

<!-- Allow links to example.com -->
<allow-navigation href="http://example.com/*" />

<!-- Wildcards are allowed for the protocol, as a prefix to the host, or as a suffix to the path -->
<allow-navigation href="*://*.example.com/*" />
```


```
allow-intent

允许通过系统应用打开这个url

属性(类型) href(string)
描述 允许通过系统应用打开这个链接

例子:

<!-- Allow links to web pages to open in a browser -->
<allow-intent href="http://*/*" />
<allow-intent href="https://*/*" />

<!-- Allow links to example.com to open in a browser -->
<allow-intent href="http://example.com/*" />

<!-- Wildcards are allowed for the protocol, as a prefix
     to the host, or as a suffix to the path -->
<allow-intent href="*://*.example.com/*" />

<!-- Allow SMS links to open messaging app -->
<allow-intent href="sms:*" />

<!-- Allow tel: links to open the dialer -->
<allow-intent href="tel:*" />

<!-- Allow geo: links to open maps -->
<allow-intent href="geo:*" />

<!-- Allow all unrecognized URLs to open installed apps
     *NOT RECOMMENDED* -->
<allow-intent href="*" />
```
