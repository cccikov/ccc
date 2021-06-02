# vue

## 构建

vue-cli 脚手架工具

[vue-cli](https://github.com/vuejs/vue-cli/tree/v2)（ps：此版本为2.X，现在最新为3.x）

增加less-loader好像不需要另外配置什么 只需要安装less 和less-loader就可以了 

`npm install -D sass-loader node-sass`

vue inspect >output.js  --mode production

``` bash
Usage: inspect [options] [paths...]

inspect the webpack config in a project with vue-cli-service

Options:
  --mode <mode>          
  --rule <ruleName>      inspect a specific module rule
  --plugin <pluginName>  inspect a specific plugin
  --rules                list all module rule names
  --plugins              list all plugin names
  -v --verbose           Show full function definitions in output
  -h, --help             output usage information
```