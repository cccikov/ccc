# web直播概览

## 常见直播协议

1. **RTMP(主流)**

    RTMP，全称 Real Time Messaging Protocol，即实时消息传送协议。

    底层基于`TCP`，在浏览器端依赖Flash。

    Adobe，Flash

    1. 基于TCP
    2. adobe垄断，国内支持度高（FALSH）
    3. 浏览器端依赖Flash进行播放
    4. 2~5秒的延迟

    * 格式

        `rtmp://8888.live.com/live/8888_test_123`

    * 优点：

        主流，稳定，延迟相对较低，适合pc端（需要Flash）

    * 缺点

        TCP 传输，被防火墙阻拦

        无法支持移动端播放

2. **HLS(主流)**

    http live streaming

    HTTP Live Streaming（HLS）是苹果公司实现的基于HTTP的流媒体传输协议，可实现流媒体的直播和点播。原理上是将视频流分片成一系列HTTP下载文件。

    hls更准确的说是一种视频协议，文件对应的后缀是ts，适配Safari浏览器，是苹果推出的视频协议

    Http Live Streaming，苹果提出基于`HTTP`的流媒体传输协议。移动端`HTML5`可以直接打开播放。

    apple， Apple 的全系列产品，Android，Edge

    1. HTML5直接支持(video)，适合APP直播，PC断只有Safari、Edge支持
    2. 必须是H264+AAC编码
    3. 因为传输的是切割后的音视频片段，导致内容延时较大

    * 格式

        `m3u8` `ts`

        `http://8888.live.com/live/8888_test_123.m3u8`

    * 优点

        android/ios移动端支持，mac系统支持，Edge支持，穿透防火墙

    * 缺点

        实时性差，延迟高。

3. HTTP-FLV / Websocket-FLV

    HTTP-FLV 即将流媒体数据封装成 FLV 格式，然后通过 HTTP 协议传输给客户端。本质就是传输flv

    基于`HTTP`流式IO传输FLV，依赖浏览器支持播放FLV。

    基于`WebSocket`传输FLV，依赖浏览器支持播放FLV。`WebSocket`建立在`HTTP`之上，建立`WebSocket`连接前还要先建立`HTTP`连接。

    Adobe，Flash，flv

    1. 使用HTTP的流式IO(fetch或stream)或WebSocket协议流式的传输媒体内容

    * 格式

        `flv`

        `http://8888.live.com/live/8888_test_123.flv`

    * 优点

        相较于 RTMP 协议，HTTP-FLV 能够好的穿透防火墙

        可采用 `flv.js` 开源库解码，兼容各个端

    * 缺点

        流媒体资源缓存在本地客户端，在保密性方面不够好。

4. WebRTC协议

    1. Google力推，已成为W3C标准
    2. 现代浏览器支持趋势，X5也支持（微信、QQ）
    3. 基于UDP，低延迟，弱网抗性强，比flv.js更有优势

        | 方案 |CPU占用|帧率|码率|延时|首帧|
        |------|---|--|---------|----|----|
        |flv.js|0.4|30|700kbit/s|1.5s|2s  |
        |WebRTC|1.9|30|700kbit/s|0.7s|1.5s|

    4. 支持Web上行能力
    5. 编码为H264+OPUS
    6. 提供NAT穿透技术（ICE）

5. RTP协议

    1. Real-time Transport Protocol，IETF于1996提出的一个标准
    2. 基于UDP
    3. 实时性强
    4. 用于视频监控、视频会议、IP电话
    5. CDN厂商、浏览器不支持

### 来源：

概述

* ★ [RTMP、HTTP-FLV、HLS，你了解常见的三大直播协议吗](https://www.jianshu.com/p/f5eaeb3fe953)
* ★ [RTMP、HTTP-FLV、HLS，你了解常见的三大直播协议吗](https://www.cnblogs.com/upyun/p/9881865.html)
* ★ [大前端介绍与直播原理](https://blog.csdn.net/qq_34829447/article/details/83834796?depth_1-utm_source=distribute.pc_relevant.none-task&utm_source=distribute.pc_relevant.none-task)
* ★ [Web直播，你需要先知道这些](https://imweb.io/topic/5a542e43a192c3b460fce3a8) 包括微信小程序
* [视频直播前端方案](https://www.cnblogs.com/chris-oil/p/9754088.html)
* [前端移动端](https://blog.csdn.net/m0_37852904/article/details/79026189)
* [直播协议对比](https://www.jianshu.com/p/cf02eb8080ec)
* [几种直播协议比较](https://www.jianshu.com/p/4ff943817436)

总知识点

* [直播技术框架](https://blog.csdn.net/qingfengtsing/article/details/52761394)

其他知识点

* [音视频技术参考资料](https://github.com/gwuhaolin/blog/issues/5)
* [小程序音视频能力技术负责人解读“小程序直播”](https://segmentfault.com/a/1190000012636142)
* [WebSockets 进行 HTML5 视频直播](http://bbs.zzfriend.com/thread-2303-1-9.html)
* [关于主流直播平台(虎牙，斗鱼)用到的一些技术](https://blog.csdn.net/u014162133/article/details/81911933)

技术

* [直播中前端技术](https://www.jianshu.com/p/25da0d497f48)
* socket.io
* [video.js 结合 flv.js播放flv视频](https://blog.csdn.net/boyit0/article/details/84395347)

## 框架

* flv.js

    * [github](https://github.com/Bilibili/flv.js)

    - Bilibli开源，解析flv数据，通过MSE封装成fMP4喂给video标签
    - 编码为H264+AAC
    - 使用HTTP的流式IO(fetch或stream)或WebSocket协议流式的传输媒体内容
    - 2~5秒的延迟，首帧比RTMP更快
    - 由于浏览器对原生Video标签采用了硬件加速，性能很好，支持高清。
    - 同时支持录播和直播
    - 去掉对Flash的依赖

    [使用flv.js做直播](https://github.com/gwuhaolin/blog/issues/3)

* video.js

    * [github](https://github.com/videojs/video.js)
    * [官网](https://videojs.com/)
    * [videojs用到的插件](https://videojs.com/plugins)

    - 即使没有本地支持，也可以使用video.js播放HLS。

    * node_modules\video.js\dist\video.min.js
    * node_modules\video.js\dist\video.cjs.js  commonjs 规范
    * node_modules\video.js\dist\video.es.js es6 规范

## 直播源

* hls

    + CCTV1高清：http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8
    + CCTV3高清：http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8
    + CCTV5高清：http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8
    + CCTV5+高清：http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8
    + CCTV6高清：http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8
    + 香港卫视：http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8
    + 苹果提供的测试源（点播）：http://devimages.apple.com.edgekey.net/streaming/examples/bipbop_4x3/gear2/prog_index.m3u8

* RTMP协议直播源

    + 香港卫视：rtmp://live.hkstv.hk.lxdns.com/live/hks
    + 香港财经：rtmp://202.69.69.180:443/webcast/bshdlive-pc
    + 韩国GoodTV：rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp
    + 韩国朝鲜日报：rtmp://live.chosun.gscdn.com/live/tvchosun1.stream
    + 美国1：rtmp://ns8.indexforce.com/home/mystream
    + 美国2：rtmp://media3.scctv.net/live/scctv_800
    + 美国中文电视：rtmp://media3.sinovision.net:1935/live/livestream
    + 湖南卫视：rtmp://58.200.131.2:1935/livetv/hunantv

* RTSP协议直播源

    + 珠海过澳门大厅摄像头监控：rtsp://218.204.223.237:554/live/1/66251FC11353191F/e7ooqwcfbqjoo80j.sdp
    + 大熊兔（点播）：rtsp://184.72.239.149/vod/mp4://BigBuckBunny_175k.mov

* http://ivi.bupt.edu.cn/

## 兼容解决方案

* RTMP

    |             pc           | mac | ios | android |
    |:------------------------:|:---:|:----|:-------:|
    | Flash , Flash + video.js |  ×  |  ×  |    ×    |

    video.js + Flash，需要安装了 Flash play（chrome自带 Flash 插件），并且浏览器允许运行Flash

    1. video.js

        * [使用videojs播放rtmp视频](https://blog.csdn.net/qq_30152271/article/details/84334734)
        * [video.js播放rtmp](https://www.cnblogs.com/dwj192/p/7040250.html)

* hls

    | pc edge | pc chrome | mac | ios | android |
    |:-------:|:---------:|:---:|:---:|:-------:|
    |    √    | video.js  |  √  |  √  |    √    |

    1. video.js

        * https://github.com/videojs/videojs-contrib-hls

            > this project will be deprecated and is succeeded by `videojs-http-streaming`. VHS supports HLS and DASH and is built into video.js 7, see the video.js 7 blog post

        * https://github.com/videojs/http-streaming
        * https://blog.videojs.com/video-js-7-is-here/

            > I’m happy to announce that Video.js 7 is now out! It brings to Video.js support for HLS

        * https://videojs.com/

            > HLS supported everywhere. DASH supported everywhere but iOS Safari.

        * [videojs+hls+rtmp流媒体播放](https://www.cnblogs.com/FHC1994/p/9981440.html)

    2. hls.js

        * [H5解决m3u8视频直播流问题](https://blog.csdn.net/hero2040407/article/details/80541255)

* http-flv / websocket-flv

    |    pc  |  mac   |  ios   |  android   |
    |:------:|:------:|:-------|:----------:|
    | flv.js | flv.js | flv.js |   flv.js   |


* 坑
    1. 拉流地址一定要要是**证书未过期**的https请求
    2. ios可以，android不可以 https://blog.csdn.net/wangjingkaibear/article/details/53762656