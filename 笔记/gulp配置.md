# gulp配置

以下命令行操作全在 **命令行程序（windows为cmd，linux为终端，或者git bash）** 中执行

### 安装gulp

* 安装淘宝npm镜像--cnpm

		npm install cnpm -g --registry=https://registry.npm.taobao.org

	安装完成后查看cnpm版本

		cnpm -v

* 全局安装gulp

		cnpm install gulp -g

	安装完成后查看gulp版本

		gulp -v

安装完成

### 安装 Browsersync

* 全局安装 Browsersync

		cnpm install -g browser-sync

* 指定项目安装 Browsersync

		cnpm install --save-dev browser-sync

* 调用 Browsersync

		browser-sync start --server --files "**/*.css,**/*.js,**/*.html"

	browser-sync start --server --files 后面加需要响应改动的文件