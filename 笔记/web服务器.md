# apache 与 tomcat 的关系

1. Apache是web服务器，Tomcat是应用（java）服务器，它只是一个servlet容器，是Apache的扩展。
2. Apache和Tomcat都可以做为独立的web服务器来运行，但是Apache不能解释java程序（jsp,serverlet）。
3. Apache是普通服务器，本身只支持html即普通网页。不过可以通过插件支持php,还可以与Tomcat连通(单向Apache连接Tomcat,就是说通过Apache可以访问Tomcat资源。反之不然)
4. 两者都是一种容器，只不过发布的东西不同：Apache是html容器，功能像IIS一样；Tomcat是jsp/servlet容器，用于发布jsp及java的，类似的有IBM的webshere、EBA的Weblogic，sun的JRun等等。
5. Apache和Tomcat是独立的，在通一台服务器上可以集成。
打个比方：Apache是一辆卡车，上面可以装一些东西如html等。但是不能装水，要装水必须要有容器（桶），Tomcat就是一个桶（装像Java这样的水），而这个桶也可以不放在卡车上。


Apache只支持静态网页，但像asp,php,cgi,jsp等动态网页就需要Tomcat来处理。

Apache和Tomcat整合使用：如果客户端请求的是静态页面，则只需要Apache服务器响应请求；如果客户端请求动态页面，则是Tomcat服务器响应请求；因为jsp是服务器端解释代码的，这样整合就可以减少Tomcat的服务开销 。

Apache是世界使用排名第一的Web服务器。它可以运行在几乎所有广泛使用的计算机平台上。

Apache 源于 NCSAhttpd服务器，经过多次修改，成为世界上最流行的Web服务器软件之一。Apache取自“a patchy server”的读音，意思是充满补丁的服务器，因为它是自由软件，所以不断有人来为它开发新的功能、新的特性、修改原来的缺陷。Apache的特点是简单、速度快、性能稳定，并可做代理服务器来使用。Apache对Linux的支持相当完美。

Apache有多种产品，可以支持SSL技术，支持多个虚拟主机。Apache是以进程为基础的结构，进程要比线程消耗更多的系统开支，不太适合于多处理器环境，因此，在一个Apache Web站点扩容时，通常是增加服务器或扩充群集节点而不是增加处理器。到目前为止Apache仍然是世界上用的最多的Web服务器，市场占有率达60%左右。世界上很多著名的网站如Amazon.com、Yahoo!、W3 Consortium、Financial Times等都是Apache的产物，它的成功之处主要在于它的源代码开放、有一支开放的开发队伍、支持跨平台的应用（可以运行在几乎所有的Unix、 Windows、Linux系统平台上）以及它的可移植性等方面。

Apache的诞生极富有戏剧性。当NCSA WWW服务器项目停顿后，那些使用NCSA WWW服务器的人们开始交换他们用于该服务器的补丁程序，他们也很快认识到成立管理这些补丁程序的论坛是必要的。就这样，诞生了Apache Group，后来这个团体在NCSA的基础上创建了Apache。如果你准备选择Web服务器，毫无疑问Apache是你的最佳选择。

Tomcat是一个开放源代码、运行servlet和JSP Web应用软件的基于Java的Web应用软件容器。Tomcat Server是根据servlet和JSP规范进行执行的，因此我们就可以说Tomcat Server也实行了Apache-Jakarta规范且比绝大多数商业应用软件服务器要好。

Tomcat是Java Servlet 2.2和JavaServer Pages 1.1技术的标准实现，是基于Apache许可证下开发的自由软件。Tomcat是完全重写的Servlet API 2.2和JSP 1.1兼容的Servlet/JSP容器。Tomcat使用了JServ的一些代码，特别是Apache服务适配器。随着Catalina Servlet引擎的出现，Tomcat第四版号的性能得到提升，使得它成为一个值得考虑的Servlet/JSP容器，因此目前许多WEB服务器都是采用Tomcat。

* JSP=Java Server Pages (Java服务器网页)
* ASP=Active Server Pages (活动服务器网页)
* CGI=Common Gateway Interface (通用网关接口)
* J2EE=Java 2 Platform, Enterprise Edition (Java2平台,企业版)
* XML=eXtensible Markup Language (扩展标记语言)
* IIS=Internet Information Server (互联网信息服务器)

原文地址：http://profile.8j.com/question/111/59/260.htm