# egret 之消除游戏开发

目的:为了了解egret开发流程,以及需要掌握的知识
* 需要用到哪些api , 怎么用
* 开发流程


### 基本介绍

时间限制,消除限制,步数限制,过关条件-消除数量
地图排列,选中状态,互换判断是否消除,使用道具,消除样式
素材选择,元素 - 6种,地图可配置,道具-道具图标

*********************

1. 美术素材
1. ui元素 - 工作流
1. egret配套开发工具
1. html5 mobile game engine html5移动游戏引擎
1. lakeshore - 不使用编程制作游戏 不涉及该款工具
1. egret engine - 创建项目 - 编写代码 - 调试游戏
1. egret wing - ide工具 ui编辑器
1. egretFeather - 特效
1. inspector - chrome插件
1. textture
1. resDepot

*********************

###### egret采用逻辑语言
Typescript

*********************

###### 网页的渲染方式
* DOM(文档,文本布局)
* Canvas(2D)
* WebGL(3D)

### 游戏策划
地图,游戏介绍,海盗类型
###### 条件:
1. 步数
2. 消除数量
3. 道具(付费欲望) 游戏奖励

### Egret 之消除游戏开发 - 从逻辑到数据的程序设计方式
1. 按功能并入模块
2. 从逻辑到数据的程序设计方式
    理清玩法 , 逻辑 , 去设计原始数据类型
    定义游戏核心玩法业务逻辑
    逻辑图
    逻辑,逻辑,逻辑
3. 从全局到细节拆分法 mvc设计方式

### Egret 之消除游戏开发 - 用数字描述地图
    mapData[index]一维数组 mapData[row][column]二维数组
    json

### Egret 之消除游戏开发 - 游戏元素数据设计与对象池应用
元素数据池
[{"type":"xxx","id":"0","location":0},{"type":"xxx","id":1,"location":0}]

1. 修改项目配置文件egretProperties.json
2. src > +data > +eLement > +baseElment.ts(基本数据) & + gameElement.ts 以及分别创建类
    gameElement 继承 baseElment

### Egret 之消除游戏开发 - 游戏关卡数据结构设计
关卡数据设置
关卡元素LevelRequireElement两个属性type ,number(消除数量)
创建一个LevelRequireElement类 继承 baseElement 添加属性
在data文件创建一个LevelRequire类

### Egret 之消除游戏开发 - 游戏基础数据封装
