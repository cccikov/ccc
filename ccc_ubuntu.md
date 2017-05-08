# ubuntu使用 & linux命令

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

	sudo apt install nodejs-legacy ubuntu

输入node时，系统提示 ; 安装的版本时4.2.6 未安装npm

### chromium

直接Ubuntu软件中心搜索 可能之前要更新一下软件源

### 实时显示网速

	sudo add-apt-repository ppa:fossfreedom/indicator-sysmonitor
	sudo apt-get update
	sudo apt-get install indicator-sysmonitor
	indicator-sysmonitor & 终端执行

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
