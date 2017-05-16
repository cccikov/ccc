# EasyUI

#### 必要引入文件

    <link rel="stylesheet" type="text/css" href="../../themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="../../themes/icon.css">
    <script type="text/javascript" src="../../jquery.min.js"></script>
    <script type="text/javascript" src="../../jquery.easyui.min.js"></script>

* 一个样式css 在`/themes/`里面有几个,这里选择的是`/themes/default/easyui.css`,`/themes/default/`里面也有好多不同功能的css,`easyui.css`包含其他全部,但是如果不用使用全部的功能,又不怕麻烦可以单独引用
* 图片css `/themes/icon.css`
* jq库 这里版本是1.11.3
* easyui的js

如果是移动端还要另外引入

    <script type="text/javascript" src="../../jquery.easyui.mobile.js"></script>
    <link rel="stylesheet" type="text/css" href="../../themes/mobile.css">


#### 说明

以拖拽为例子讲解一下easyui的基本用法

* 方法一:纯标签

        <div class="easyui-draggable">
            ccc
        </div>

* 方法二:标签加css

        <div class="ccc">
            ccc-js
        </div>

        <script type="text/javascript">
            $(".ccc").draggable();
        </script>

====

    <div id="dd" style="width:100px;height:100px;">
        <div id="title" style="background:#ccc;">title</div>
    </div>
    <script type="text/javascript">
    var opt = $('#dd').draggable({
        handle: '#title'
    }).draggable("options");
    opt.cursor = "pointer";
    </script>


可以直接通过改options来修改配置,至少要用js代码初始化一次才可以使用`options`方法,`options`就是获取属性,由于js里面对象都是引用内存地址,所以我们一旦修改,就相当直接修改这个对象。

    var opt = $('#dd').draggable({}).draggable("options")