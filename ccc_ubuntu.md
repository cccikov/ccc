# ubuntu使用 & linux命令

### 打开终端

<kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>


### 更新软件源

两个略有些不一样

	sudo apt-get update 或者 sudo apt-get upgrade

如果有软件在软件中心安装或者更新，sudo apt-get update有可能会失败

### 第三方deb

gdebi 安装第三方deb 2017/5/7更新后发现不用安装gdebi都可以安装第三方deb

### 设置鼠标灵敏度

1. 临时设置

   设置鼠标灵敏度 可以设置其他数值以及 default

		xset m 1  

### 安装git

	sudo apt-get install git
	git config --global user.name "ccc_ubuntu"
	git config --global user.email "522978139@qq.com"
	ssh-keygen -t rsa -C "522978139@qq.com"
	/home ctrl+m 显示隐藏文件夹

### 安装nodejs

1. 简单

		sudo apt install nodejs-legacy ubuntu

	输入node时，系统提示 ; 安装的版本时4.2.6 未安装npm

2. 最新

	解压，也可以直接解压

		xz -d node-v6.10.3-linux-x64.tar.xz
		tar -xvf node-v6.10.3-linux-x64.tar

	移到通用的软件安装目录 /opt/

		sudo mv node-v6.10.3-linux-x64 /opt/

	安装 npm 和 node 命令到系统命令 (不用切换目录)(从 软件安装目录 /opt/　安装到．．．)

		sudo ln -s /opt/node-v6.10.3-linux-x64/bin/node /usr/local/bin/node
		sudo ln -s /opt/node-v6.10.3-linux-x64/bin/npm /usr/local/bin/npm

	测试

		node -v
		npm -v

*node-v6.10.3-linux-x64* 为当前版本node的目录名

### 安装　cnpm

下载 cnpm

	npm install cnpm -g --registry=https://registry.npm.taobao.org

或者 用下面这个下载 cnpm

	sudo npm -g install cnpm

下载好后，会在/opt/node-v6.10.3-linux-x64目录下有cnpm

安装 cnpm

	sudo ln -s /opt/node-v6.10.3-linux-x64/bin/cnpm /usr/local/bin/

*node-v6.10.3-linux-x64* 为当前版本node的目录名

**其实全部的npm插件在linux里面都要再次移到/usr/local/bin/**

插件安装方法

	npm install [-g] [--save-dev] <name>
	cnpm install [-g] [--save-dev] <name>

	sudo ln -s /opt/node-v6.10.3-linux-x64/bin/<> /usr/local/bin/




### python 问题

	python

显示的是2.7.12版本

	python3

显示的是3.5.2版本

这是由于桌面版的是 python2 ，服务器的是 python3

### chromium

直接Ubuntu软件中心搜索 可能之前要更新一下软件源

### 实时显示网速

	sudo add-apt-repository ppa:fossfreedom/indicator-sysmonitor
	sudo apt-get update
	sudo apt-get install indicator-sysmonitor

终端执行

	indicator-sysmonitor &

### 任务栏位置

	gsettings set com.canonical.Unity.Launcher launcher-position Bottom
	                                                             Top
	                                                             Left
	                                                             Right

### 查看连接设备

	xinput --list

### 安装flash

	sudo apt install adobe-flashplugin

### openvpn

	sudo apt-get install -y network-manager-openvpn network-manager-openvpn-gnome

“终端”里运行以下命令重启网络。

	sudo /etc/init.d/network-manager restart
