gulp 安装
---------------

全局安装 gulp , 若全局环境已经有了 , 则忽略

    npm install --global gulp

在项目文件夹 新建 `package.json` 文件

    npm init

在项目文件夹中安装 , 作为开发依赖（devDependencies）

    npm install --save-dev gulp

在项目根目录下创建一个名为 `gulpfile.js` 的文件 , 测试代码如下

    var gulp = require('gulp');

    gulp.task('default', function() {
      // 将你的默认的任务代码放在这
    });

运行

    gulp
    //或者
    gulp default

gulp 语法

    gulp <task> <othertask>

`gulp` 等价于 `gulp default`