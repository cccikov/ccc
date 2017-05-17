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

## EasyUI每个组件的属性，方法和事件。用户可以很容易地扩展他们。

#### 属性

所有的属性都定义在`jQuery.fn.{plugin}.defaults`里面。例如，对话框属性定义在`jQuery.fn.dialog.defaults`里面。

#### 事件

所有的事件（回调函数）也都定义在`jQuery.fn.{plugin}.defaults`里面。

#### 方法

调用方法的语法：`$('selector').plugin('method', parameter);`

解释：
`selector` 是jQery对象选择器。
`plugin` 是插件的名称。
`method` 是相应插件现有的方法。
`parameter` 是参数对象，可以是一个对象、字符串等。
所有方法都定义在`jQuery.fn.{plugin}.methods`。每个方法都有2个参数：jq和param。第一个参数'jq'是必须的，这是指的jQuery对象。第二个参数'param'是指传入方法的实际参数。例如，为dialog组件扩展一个方法名为'mymove'，代码如下：

    $.extend($.fn.dialog.methods, {
        mymove: function(jq, newposition){
            return jq.each(function(){
                $(this).dialog('move', newposition);
            });
        }
    });

现在你可以调用'mymove'方法将对话框移动到指定位置：

    $('#dd').dialog('mymove', {
        left: 200,
        top: 100
    });

### jQuery EasyUI 入门指南

下载程序库并导入EasyUI的CSS和Javascript文件到您的页面。

    <link rel="stylesheet" type="text/css" href="easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="easyui/themes/icon.css">
    <script type="text/javascript" src="easyui/jquery-1.7.2.min.js"></script>
    <script type="text/javascript" src="easyui/jquery.easyui.min.js"></script>

一旦你导入了EasyUI必须的文件，你就可以通过标记或Javascript定义一个EasyUI组件。例如：定义一个带可折叠功能的面板，你需要写的HTML代码如下：

    <div id="p" class="easyui-panel" style="width:500px;height:200px;padding:10px;"
            title="My Panel" iconCls="icon-save" collapsible="true">
        The panel content
    </div>

当通过标记创建一个组件的时候，从EasyUI 1.3版开始可以用HTML5标准的'data-options'属性来改写上面的代码为：

    <div id="p" class="easyui-panel" style="width:500px;height:200px;padding:10px;"
            title="My Panel" data-options="iconCls:'icon-save',collapsible:true">
        The panel content
    </div>

下面的代码演示了如何创建一个组合框，并绑定onSelect事件。

    <input class="easyui-combobox" name="language"
            data-options="
                url:'combobox_data.json',
                valueField:'id',
                textField:'text',
                panelHeight:'auto',
                onSelect:function(record){
                    alert(record.text)
                }" />



#### 例子

以**拖拽 draggable**为例子讲解一下easyui的基本用法

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

添加属性，事件

* 标签

        <div class="easyui-draggable wrap"
            data-options="handle:'.content',
                        cursor:'pointer',
                        onDrag:function(e){
                            console.log(e.data);
                        }">
            <span class="content">title</span>
        </div>

    传的参数全部写在标签的` data-options `里面；` easyui-draggable `代表就是这个是 *拖拽* 功能

* 标签+js

        <div class="easyui-draggable wrap">
            <span class="content">title</span>
        </div>

        <script type="text/javascript">
            $(".wrap").draggable({
                "handle":".content",
                "cursor":"pointer",
                "onDrag":function(e){
                    console.log(e.data);
                }
            });
        </script>

    调用jq方法` draggable() ` 代表 *拖拽* 功能；参数以js对象格式传入那个` draggable() `里面

方法只能通过js调用

* 标签

        <div class="easyui-draggable wrap"
            data-options="handle:'.content',
                        cursor:'pointer',
                        onDrag:function(e){
                            console.log(e.data);
                        }">
            <span class="content">title</span>
        </div>

        <script type="text/javascript">
            $(".wrap").draggable("disable");
        </script>

* 标签+js

        <div class="wrap">
            <span class="content">title</span>
        </div>

        <script type="text/javascript">
            $(".wrap").draggable({
                "handle":".content",
                "cursor":"pointer",
                "onDrag":function(e){
                    console.log(e.data);
                }
            }).draggable("disable");

            var opt = $(".wrap").draggable("options");
            console.log(opt);
            opt.cursor = "move";
        </script>

可以直接通过改options来修改配置,至少要用js代码初始化一次才可以使用`options`方法,`options`就是获取属性,由于js里面对象都是引用内存地址,所以我们一旦修改,就相当直接修改这个对象。

    var opt = $('#dd').draggable().draggable("options")
