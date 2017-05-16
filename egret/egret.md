# egret学习

## 学习内容
1. typescript回家学
2. Egret 之消除游戏开发 -- 从而了解egret开发需要掌握哪些知识
3. 开发思路，类之间如果引用

### 相关网址

* [开发者中心](http://developer.egret.com/cn/)
* [介绍文档](http://developer.egret.com/cn/github/egret-docs/Engine2D/getStarted/getStarted/index.html)
* [api文档](http://developer.egret.com/cn/apidoc/)
* [getStarted](http://developer.egret.com/cn/github/egret-docs/Engine2D/getStarted/getStarted/index.html)
* [教学代码](http://developer.egret.com/cn/example/page/index#010-disp-basic)
* [视频](http://developer.egret.com/cn/list/video/id/175)

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

            因为部分ide的问题，请将第三方库放到项目外面。

            libs/modules 下的文件均为自动生成进去的，所以不用手动拷贝到 libs/modules 下。

            使用egret build -e 会清理 libs/modules 下面的文件。

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
        * data-orientation：[旋转模式](http://developer.egret.com/cn/apidoc/index/name/egret.OrientationMode#AUTO)。
        * data-scale-mode：[适配模式](http://developer.egret.com/cn/apidoc/index/name/egret.StageScaleMode)。
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



### 显示核心类

* DisplayObject

    显示对象基类，所有显示对象均继承自此类

    1. DisplayObjectContainer

        显示对象容器接口，所有显示对象容器均实现此接口

        1. Sprite

            带有矢量绘制功能的显示容器

        2. Stage

            舞台类

    2. Bitmap

        位图，用来显示图片

    3. Shape

        用来显示矢量图，可以使用其中的方法绘制矢量图形（个人感觉有点类似canvas的绘制）

    4. TextField

        文本类

    5. BitmapText

        位图文本类


DisplayObject属性

* alpha：透明度
* width：宽度
* height：高度
* rotation：旋转角度
* scaleX：横向缩放
* scaleY：纵向缩放
* skewX：横向斜切
* skewY：纵向斜切
* visible：是否可见
* x：X轴坐标值
* y：Y轴坐标值
* anchorOffsetX：对象绝对锚点X
* anchorOffsetY：对象绝对锚点Y



显示容器的概念与实现
----------------------------------------

所有的容器全部继承自 `DisplayObjectContainer` 类，这个名称为 `DisplayObjectContainer` 的类又继承自 `DisplayObject` 。也就是说，在Egret中，所有的容器其实也继承自 `DisplayObject`.


#### Sprite

在Egret中，我们还有一个其他的容器：`Sprite`。

如果你查看Sprite类的内容,你会发现，`Sprite`仅仅是继承 `DisplayObjectContainer`。同时添加了一个Graphics功能。

#### 自定义容器

    class GridSprite extends egret.Sprite
    {
        public constructor()
        {
            super();
            this.drawGrid();
        }
        private drawGrid()
        {
            this.graphics.beginFill( 0x0000ff );
            this.graphics.drawRect( 0, 0, 50,50 );
            this.graphics.endFill();
            this.graphics.beginFill( 0x0000ff );
            this.graphics.drawRect( 50, 50, 50, 50);
            this.graphics.endFill();
            this.graphics.beginFill( 0xff0000 );
            this.graphics.drawRect( 50, 0, 50,50 );
            this.graphics.endFill();
            this.graphics.beginFill( 0xff0000 );
            this.graphics.drawRect( 0, 50, 50,50 );
            this.graphics.endFill();
        }
    }

#### 添加与删除显示对象

`addChild`

    this.addChild( spr );

`removeChild `

    this.removeChild( spr );

*this一般是继承于DisplayObjectContainer的对象,可以替换为其他对象,不一定是this*

由于如果删除对象时,父级不正确会报错,建议使用下面判断来删除显示对象.

    if( spr.parent ) {
        spr.parent.removeChild( spr );
    }

#### 深度管理

`容器.numChildren` 获取当前容器的子对象数量

`addChild`默认是放在最上面,`容器.addChildAt( 显示对象, 深度值 )`来指定深度.`removeChildAt(深度值)`来将某个深度的显示对象删除.

最大深度为`numChildren-1`,我们可以通过这个来遍历操作删除全部显示对象.

`容器.swapChildren( 显示对象, 显示对象)` `容器.swapChildrenAt( 深度值, 深度值 )` 交换深度

`容器.setChildIndex( 显示对象, 新的深度值 );`设置深度

#### 访问容器子对象

`容器.getChildAt( 深度值 );`通过子对象深度值来访问子对象

`容器.getChildByName(子对象.name)`通过子对象的`name`属性来访问子对象,要先给子对象设置`name`属性




矢量绘图
--------------------
**Shape**对象


#### 绘制矩形

    shp.graphics.beginFill( 0xff0000, 1);// 颜色 透明度
    shp.graphics.drawRect( 0, 0, 100, 200 );
    shp.graphics.lineStyle( 10, 0x00ff00 ); // 边框宽度,边框颜色
    shp.graphics.endFill();

#### 清空绘图

    shp.graphics.clear();

#### 绘制圆形

    shp.graphics.drawCircle( 0, 0, 50 );// x,y,半径

#### 绘制直线

    shp.graphics.moveTo( 10,10 );
    shp.graphics.lineTo( 100, 20 );

#### 曲线-二级贝塞尔曲线

    shp.graphics.moveTo( 50, 50);
    shp.graphics.curveTo( 100,100, 200,50);// 控制点 终点

#### 圆弧

    shp.graphics.drawArc(200,200,100,0,Math.PI,true);
    //圆心 半径 初始角度 最终角度 true为逆时针绘制圆形.

#### 遮罩

设置显示对象的`mask`属性

    // 方形遮罩
    shp.mask = new egret.Rectangle(20,20,30,50);

    //其他形状遮罩,将maskSprite设置为mySprite的遮罩
    mySprite.mask = maskSprite;



碰撞检测
----------------------------

`hitTestPoint(10,10)`



文本
----------------------------

`egret.TextField` 文本类

`text` 文本的文字内容属性,egret.TextField对象会根据内容计算对象尺寸

`size` 文字字体大小

`egret.TextField.default_size` 设置全局默认字体大小

`textColor` 文字颜色

`egret.TextField.default_textColor` 全局默认颜色

`fontFamily` 字体系列

|中文名称    |    font-family   |
|------------|------------------|
|宋体        |    SimSun        |
|黑体        |    SimHei        |
|微软雅黑    | Microsoft YaHei  |
|微软正黑体  |Microsoft JhengHei|
|新宋体      |    NSimSun       |
|新细明体    |    PMingLiU      |
|细明体      |    MingLiU       |
|标楷体      |    DFKai-SB      |
|仿宋        |    FangSong      |
|楷体        |    KaiTi         |
|仿宋_GB2312 |  FangSong_GB2312 |
|楷体_GB2312 |    KaiTi_GB2312  |

横向布局

    label.textAlign = egret.HorizontalAlign.LEFT;
    label.textAlign = egret.HorizontalAlign.RIGHT;
    label.textAlign = egret.HorizontalAlign.CENTER;

纵向布局

    label.verticalAlign = egret.VerticalAlign.TOP;
    label.verticalAlign = egret.VerticalAlign.BOTTOM;
    label.verticalAlign = egret.VerticalAlign.MIDDLE;

描边

    label.strokeColor = 0x0000ff;
    label.stroke = 2;

斜体加粗

    label.bold = true;
    label.italic = true;

多种样式文字

    tx.textFlow = <Array<egret.ITextElement>>[
        { text:"文字", style:{"textColor":0xFF0000, "size":30}},
        {text: "彩", style: {"italic": true, "textColor": 0x00ff00}}
    ];