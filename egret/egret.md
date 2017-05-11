# egret学习

## 学习内容
1. typescript回家学
2. Egret 之消除游戏开发 -- 从而了解egret开发需要掌握哪些知识


### 相关网址

* [开发者中心](http://developer.egret.com/cn/)
* [介绍文档](http://developer.egret.com/cn/github/egret-docs/Engine2D/getStarted/getStarted/index.html)
* [api文档](http://developer.egret.com/cn/apidoc/)
* [教学代码](http://developer.egret.com/cn/example/page/index#010-disp-basic)

### 新项目目录

* src - 存放我们编写的代码
* bin-debug - debug目录，不要修改内容
* libs - 库文件，核心库，扩展库，第三方库
* resource - 资源文件 default.res.json 来配置资源
* template - 调试所需目录，不需要修改该目录
* egretProperties.json - 项目配置文件，一般常用的就是modules字段，配置所需模块[egretProperties 说明](http://developer.egret.com/cn/github/egret-docs/Engine2D/projectConfig/configFile/index.html)

        {
          "native": {
            "path_ignore": []
          },
          "publish": {
            "web": 0,
            "native": 1,
            "path": "bin-release"
          },
          "egret_version": "4.0.3",
          "modules": [
            {
              "name": "egret"
            },
            {
              "name": "game"
            },
            {
              "name": "res"
            },
            {
              "name": "tween"
            },
            {
              "name": "md5",
              "path": "../md5"
            }
          ]
        }

    1. modules

        项目所使用的第三方库。根据 egretProperties.json 生成的库文件在 libs/modules 下面

        * egret自带库，没有path属性

                "modules": [
                    {
                      "name": "egret"
                    },
                    {
                      "name": "game"
                    },
                    {
                      "name": "res"
                    },
                    {
                      "name": "tween"
                    },
                    {
                      "name": "md5",
                      "path": "../md5"
                    }
                ]

        * 其他第三方库的引用，需要带path路径的库，path是相对项目的路径，

                {
                  "name": "md5",
                  "path": "../md5"
                }
                /**
                 * 因为部分ide的问题，请将第三方库放到项目外面。
                 * libs/modules 下的文件均为自动生成进去的
                 * 使用egret build -e 会清理 libs/modules 下面的文件
                 */

    2. publish

        发布项目所需要的一些配置文件

            "publish": {
              "web": 0,
              "native": 1,
              "path": "bin-release"
            },

    3. native

        native 相关配置，只对 native 项目有用，在发布 Web 项目时，不会使用此字段相关参数。

            "native": {
              "path_ignore": []
            },

    4. web

        web 相关配置，只对 web 项目有用，在发布 Native 项目时，不会使用此字段相关参数。

            上面没有，因为这不是web项目

    5. egret_version

        项目当前的egret的版本。此版本号不可以回退，如果想回退，请手动修改。

* index.html - 入口文件 [说明](http://developer.egret.com/cn/github/egret-docs/Engine2D/projectConfig/indexFile/index.html)

    1. modules_files

        通过 egretProperties.json 生成的 js 文件列表，生成的文件在 libs/modules 下。执行 egret build [projectName] -e 会清理 libs/modules 文件夹。

            <!--modules_files_start-->
                编译项目时，这个注释块里面的内容会根据egretProperties.json 自动替换，
                如果改动这对注释后，这里面的内容将不会再根据egretProperties.json而改变
            <!--modules_files_end-->

    2. other_libs_files

        自定义所需要加入的其他的第三方库的文件。需要填写 egret=”lib” 以及 src-release。在这个块中script不会被自动替换以及清理。切记不要把这种使用方式的文件放在 libs/modules 下。

            <!--other_libs_files_start-->
                ...
            <!--other_libs_files_end-->

    3. game_files

        项目中使用的文件。在使用了 egret build -e 或者存在文件增、删时会有变动。这个块的 script 均为自动生成，请勿修改。

            <!--game_files_start-->
                这里面的内容也是会变化的，所以不要改动这对注释
            <!--game_files_end-->

    4. 配置

        * data-entry-class：文件类名称。 egretProperties.json 不再需要配置这个。
        * data-orientation：旋转模式。
        * data-scale-mode：适配模式。
        * data-frame-rate：帧频数。
        * data-content-width：游戏内stage宽。
        * data-content-height：游戏stage高。
        * data-show-pain-rect：是否显示脏矩形区域。
        * data-multi-fingered：多指最大数量。
        * data-show-fps：是否显示fps。
        * data-show-log：是否显示egret.log输出出来的信息。这些会在fps的下面显示出来，和console.log不一样。前提是fps必须打开。
        * data-log-filter：只显示过滤的log。
        * data-show-fps-style：fps面板的样式。目前只支持4种，x:0, y:0, size:30, textColor:0xffffff。


                <div style="margin: auto;width: 100%;height: 100%;"
                    class="egret-player"
                    data-entry-class="Main"
                    data-orientation="auto"
                    data-scale-mode="fixedWidth"
                    data-frame-rate="30"
                    data-content-width="640"
                    data-content-height="1136"
                    data-show-paint-rect="false"
                    data-multi-fingered="2"
                    data-show-fps="false"
                    data-show-log="false"
                    data-show-fps-style="x:0,y:0,size:12,
                                        textColor:0xffffff,bgAlpha:0.9">
                </div>


* favicon.ico - ico
* tsconfig.json

    typescript 项目的配置文件，可以通过读取它来设置 ts 编译器的编译参数

### 构建

项目 - 构建/编译 或者使用命令行

    egret build

[编译顺序说明](http://developer.egret.com/cn/github/egret-docs/Engine2D/projectConfig/compileOrder/index.html)



