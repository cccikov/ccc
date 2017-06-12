babel 安装 使用
----------------------------------

[babel](https://babeljs.io/)

### babel版本

> Each yearly preset only compiles what was ratified in that year. babel-preset-env replaces es2015, es2016, es2017, latest

* env
* es2015
* es2016
* es2017
* latest (deprecated in favor of env)
* react
* flow

> **preset-latest** is deprecated
`{ "presets": ["latest"] } === { "presets": ["env"] }`

> Use **preset-env** instead.

This is a special preset that will contain all yearly presets so user’s won’t need to specify each one individually.
It currently includes:

* es2017
* es2016
* es2015

**总体来说 , 就是安装env版本就好了**

## babel 官方安装配置

### 安装

由于墙的关系 , 全部 ` npm ` 实际使用时全部改为 ` cnpm `

全局安装 babel-cli babel-preset-env

    npm install --g babel-cli babel-preset-env

移到项目文件夹 ` npm init ` , 创建package.json

1. 安装

    虽然您可以在您的机器上全局安装Babel CLI，但更好的是按项目在本地安装项目。

    这主要有两个原因:

    1. 同一台机器上的不同项目可能依赖于不同版本的Babel，允许您一次更新一个。
    2. 这意味着您没有对您正在工作的环境有隐含的依赖性。使您的项目更加便携，更易于设置。

    在项目

        npm install --save-dev babel-cli

    package.json中 会出现

        {
            "name": "my-project",
            "version": "1.0.0",
            "devDependencies": {
                "babel-cli": "^6.0.0"
            }
        }

2. 使用

    只需在`package.json`添加一个`"scripts"`字段，并将babel命令放在里面`build`。[详情cli语法](https://babeljs.io/docs/usage/cli/)

        {
            "name": "my-project",
            "version": "1.0.0",

            "scripts": {
                "build": "babel src -d lib"
            },

            "devDependencies": {
                "babel-cli": "^6.0.0"
            }
        }

    现在从我们的终端我们可以运行 , 就会把src的js文件转换es5放在lib文件夹(一定要有src文件夹)

        npm run build

    但是只会是复制一个副本而不是转换

3. 配置 ` .babelrc ` 配置文件

    虽然已经配置了 babel 但是并不能进行转换 , 在的项目根目录中创建一个 ` .babelrc ` 配置并启用一些插件。

    先安装 `preset-env`

        npm install babel-preset-env --save-dev

    为了启用 preset-env，必须在`.babelrc`文件中定义它，如下所示：

        {
            "presets": ["env"]
        }

4. 转换

    现在再次运行`build`就可以了

        npm run build

