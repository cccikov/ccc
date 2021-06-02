# npm -- node package manager

* node package manager
* npm cli 命令行界面 (CLI) (Command-line Interface)
    - 命令行界面 (CLI)、终端 (Terminal)、Shell

https://docs.npmjs.com/cli-documentation/
    
### package.json

https://docs.npmjs.com/cli/v6/configuring-npm/package-json

npm list

也可以通过 package-lock.json 查看安装了什么包


### package-lock.json

https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json

原来`package.json`文件只能锁定大版本，也就是版本号的第一位，并不能锁定后面的小版本，你每次`npm install`都是拉取的该大版本下的最新的版本，为了稳定性考虑我们几乎是不敢随意升级依赖包的，这将导致多出来很多工作量，测试/适配等，所以`package-lock.json`文件出来了，当你每次安装一个依赖的时候就锁定在你安装的这个版本。

那如果我们安装时的包有bug，后面需要更新怎么办？

在以前可能就是直接改`package.json`里面的版本，然后再`npm install`了，但是node 5.x.x版本后就不支持这样做了，因为版本已经锁定在`package-lock.json`里了，所以我们只能`npm install xxx@x.x.x`  这样去更新我们的依赖，然后`package-lock.json`也能随之更新。

`npm i` 与 `cnpm i` 生成出来的 package-lock.json 文件是不一样的，如果  `cnpm i` 生成的  package-lock.json ，之后用 `npm i` 命令，好大机会会出错。这时，可以删除  package-lock.json ，然后使用 `npm i` 命令安装，重新记录依赖的包的来源及版本


### npm i

有些时候 `npm i` 失败，有可能是 `node_modules` 里面存在目录了，无法删除导致的，所以可以将整个 `node_modules` 删除再运行 `npm i` 命令。

要是再不行，就用取得“管理员”权限的 cmd 或者 Windows PowerShell 运行 `npm i` 命令

`npm init -y` 自动配置package.json

``` bash
npm list  // 查看本地已安装模块清单
npm list [packageName] // 查看本地已安装模块版本
npm info [packageName] //查看模块的详细信息 包括各版本号等
npm view [packageName] version // 查看模块远程最新版本
npm view [packageName] versions // 查看模块远程所有版本
npm ls [packageName] // 查看本地版本
npm ls [packageName] -g // 查看本机全局版本

npm install [packageName] //安装模块
npm install [packageName]@xxx.xx //安装模块的指定版本
npm install [packageName]@latest //安装模块的最新的一个版本 @latest是一个tag标签
npm install [packageName]  -g //全局安装模块
npm install [packageName] --save 安装好后写入package.json的dependencies中（生产环境依赖）
npm install [packageName] --save-dev 安装好后写入package.json的devDepencies中（开发环境依赖）

npm uninstall [packageName] // 删除模块
npm uninstall [packageName] -g //卸载全局模块
npm uninstall [packageName] --save  // 删除模块，同时删除模块留在package.json中dependencies下的对应信息
npm uninstall [packageName] --save-dev  // 删除模块，同时删除模块留在package.json中devDependencies下的对应信
```

