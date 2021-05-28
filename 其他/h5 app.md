
# 开发app

https://segmentfault.com/a/1190000011154120

* WebApp

    移动端的网站，常被称为H5应用，说白了就是特定运行在移动端浏览器上的网站应用。一般泛指 SPA(Single Page Application)模式开发出的网站，与MPA（Multi-page Application）对应。

* Hybrid App

    混合模式移动应用，介于Web App、Native App这两者之间的App开发技术，兼具“Native App良好交互体验的优势”和“Web App跨平台开发的优势”（百度百科解释）

    主要的原理是，由Native通过JSBridge等方法提供统一的API，然后用Html+Css实现界面，JS来写逻辑，调用API，最终的页面在Webview中显示，这种模式下，Android、iOS的API一般有一致性，Hybrid App所以有跨平台效果。

    可以通过一个Webview切换页面，比较想浏览器。或者多个Webview来切换来页面，比较像app

    优点：开发和发布都比较方便，效率介于Native App、Web App之间
    缺点：学习范围较广，需要原生配合
    举个栗子：FanReact，我爱我家App，东方航空App，富国基金-富国钱包App
    应用技术：PhoneGap(cordova)，AppCan，Wex5，APICloud等

* React Native App

    Facebook发现Hybrid App存在很多缺陷和不足，于是发起开源的一套新的App开发方案RN。使用JSX语言写原生界面，js通过JSBridge调用原生API渲染UI交互通信。

    优点：效率体验接近Native App，发布和开发成本低于Native App
    缺点：学习有一定成本，且文档较少，免不了踩坑
    举个栗子：Facebook、Youtube、Discord、QQ、百度等等

* Weex App

    阿里巴巴开发团队在RN的成功案例上，重新设计出的一套开发模式，站在了巨人肩膀上并有淘宝团队项目做养料，广受关注，2016年4月正式开源，并在v2.0版本官方支持Vue.js，与RN分庭抗礼。

    优点：单页开发模式效率极高，热更新发包体积小，并且跨平台性更强
    缺点：刚刚起步，文档欠缺；社区没有RN活跃，功能尚不健全，暂不适合完全使用Weex开发App
    举个栗子：淘宝、天猫、阿里云、优酷、闲鱼、饿了么等

* pwa
    
    https://segmentfault.com/a/1190000012353473

* 微信小程序
    
* flutter
