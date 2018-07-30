node安装配置
----------------------------

[node官网](https://nodejs.org/en/)下载

双击下载好的文件就可以安装成功了

可以通过命令行去查看安装情况

node命令

    node [options] [ -e script | script.js ] [arguments]

显示node版本

    node -v

显示npm版本

    npm -v

#### npm介绍

* 说明：npm（node package manager）nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）

* 使用npm安装插件：命令提示符执行

        npm install <name> [-g|-global] [-P|--save-prod|-D|--save-dev|]

    `-g`：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量；  非全局安装：将会安装在当前定位目录；  全局安装可以通过命令行在任何地方调用它，本地安装将安装在定位目录的`node_modules`文件夹下，通过`require()`调用；

    `-P`、`--save-prod`：将保存配置信息至 `package.json`（`package.json`是`nodejs`项目配置文件）中的的dependencies节点。除非-D或-O存在，否则这是默认值。prod即production，表示产品。

    `-D`、`--save-dev`：将保存配置信息至 `package.json`的devDependencies节点。dev即Development，表示开发中需要引用的插件

    所以一般插件安装使用的是 `npm install <name>` 或 `npm install <name> -P` 或 `npm install <name> --save-prod`

    单纯开发时插件使用的是 `npm install <name> --save-dev`

    全局插件使用的是 `npm install <name> -g`

* 为什么要保存至 `package.json` ？因为node插件包（node_modules文件夹）相对来说非常庞大（而且文件小且琐碎），所以不加入版本管理，将配置信息写入 `package.json` 并将其加入版本管理，其他开发者对应下载即可（命令提示符执行 `npm install` ，则会根据 `package.json` 下载所有需要的包）。

        npm install
        //或者
        npm i

* 使用npm卸载插  PS：不要直接删除本地插件包

        npm uninstall <name> [-g] [--save-dev]

* 使用npm更新插件

        npm update <name> [-g] [--save-dev]

* 查看npm帮助

        npm help

* 当前目录已安装插件

        npm list


#### 选装cnpm

* 说明：因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，如果npm的服务器在中国就好了，所以我们乐于分享的淘宝团队干了这事。32个！来自官网：“这是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。”

* 官方网址：http://npm.taobao.org；

* 安装 `cnpm`：命令提示符执行

        npm install cnpm -g --registry=https://registry.npm.taobao.org

    注意：安装完后最好查看其版本号`cnpm -v`或关闭命令提示符重写打开，安装完直接使用有可能会出现错误；

        cnpm -v

    `cnpm` 跟 `npm` 用法完全一致，只是在执行命令时将 `npm` 改为 `cnpm`


### 用 Node.js 平台运行js

详情看这个笔记`learnNode\learn20170524\Node.js.md`

### 使用node插件来辅助开发

以下操作均在,在项目文件夹根目录下,即用终端(cmd bash等)定位到项目文件夹根目录

* 新建 `package.json` 文件,可直接采用

        npm init

    因为node插件的配置信息全部都保存在`package.json` , 所以在安装node插件前一定先要保证项目文件夹有 `package.json` 文件 .  一旦新建过后 , 以后可直接使用不需要再建.

    ps : `package.json`是一个json文件 , 所以不能有注释 , 只能使用双引号等.

* 查看package.json帮助文档

        npm help package.json

* 接下来就可以安装所需要的插件了 , 如 `gulp` `babel`

        npm install --global gulp
        npm install --g babel-cli babel-preset-env


ps :  推荐用`git bash`去运行node命令 , 因为

* `git bash` 和 `cmd` 一样也是终端(或者叫"命令提示符","命令行工具") , 基本在`cmd`可以运行的命令都可以在`git bash`中运行(暂时就只发现在运行python命令是会有所区别) , 所以可以用来运行node命令

* 在资源管理器中打开项目文件夹 , 右键 `Git Bash Here` 就可以立即定位到项目文件夹中 , 不需要再像`cmd`一样 `cd`到项目文件夹

* 可以通过 <kbd>↑</kbd><kbd>↓</kbd> 去查看或者运行历史命令

* 调用命令的同时使用 "git分布式版本控制工具"

* 常用命令

    1. `cd + 路径` 定位目录
    2. `dir` 列出文件列表
    3. `ls` 列出文件列表 (linux命令 `git bash`可用)
    4. `cls` 清空命令提示符窗口内容
    5. <kbd>ctrl</kbd> + <kbd>c</kbd> 终止命令
    6. <kbd>ctrl</kbd> + <kbd>d</kbd> 退出命令 退出node shell(或者叫 REPL 模式) , python shell 等

-------------------------------------------------

## 一般使用node配置顺序

#### 全局

1. 先查看有无安装 `Node.js` , 没有就下载安装

        node -v
        npm -v

2. 先查看有无安装 `cnpm` , 在国内不装 , 坑自己啊

        npm install cnpm -g --registry=https://registry.npm.taobao.org

全局的事情基本做完了


#### 项目文件夹

1. 检查有无 `package.json` 文件

        cnpm init

2. 根据自己所需 , 安装插件 如:

        cnpm install --global gulp
        cnpm install --g babel-cli babel-preset-env

#### 版本管理后

1. `git pull`后 , 若`package.json`有所改变 , 就

        cnpm install