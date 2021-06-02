# 自动播放策略

* [chrome](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

    ### Chrome's autoplay policies are simple:

    * Muted autoplay is always allowed.
    * Autoplay with sound is allowed if:
        - User has interacted with the domain (click, tap, etc.).
        - On desktop, the user's [Media Engagement Index](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#mei) threshold has been crossed, meaning the user has previously played video with sound.
        - The user has [added the site to their home screen](https://developers.google.com/web/updates/2017/02/improved-add-to-home-screen) on mobile or [installed the PWA](https://developers.google.com/web/progressive-web-apps/desktop) on desktop.
    * Top frames can [delegate autoplay permission](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#iframe) to their iframes to allow autoplay with sound.

    ### Chrome的自动播放政策很简单：

    * 始终允许静音自动播放。
    * 在以下情况下，允许自动播放声音：
        - 用户已与域进行了交互（单击，点击等）。
        - 在pc上，已经超过了用户的“媒体参与度索引”阈值` chrome://media-engagement/`，这意味着该用户以前曾播放带声音的视频。
        - 用户已将该网站添加到移动设备上的主屏幕上，或在桌面上 安装了PWA。
    * 顶部框架可以将自动播放权限委派给其内嵌框架，以允许自动播放声音。



    ### 开发人员开关

    作为开发人员，您可能需要在本地更改Chrome自动播放策略的行为，以根据用户的参与度来测试您的网站。

    您可以通过将位于的Chrome标志“自动播放策略”设置为“不需要用户手势”来决定完全禁用自动播放策略 `chrome://flags/#autoplay-policy`。这样，您就可以像测试用户强烈参与您的网站一样测试您的网站，并且始终允许播放自动播放功能。

    您还可以通过禁用MEI，将自动播放策略应用于Web Audio以及总体MEI最高的站点是否默认为新用户播放自动播放，来确定禁止播放自动播放。这可以用三个完成内部开关用`chrome.exe --disable-features=PreloadMediaEngagementData,AutoplayIgnoreWebAudio, MediaEngagementBypassAutoplayPolicies`。

    [媒体参与度索引](chrome://media-engagement/)
    [禁用自动播放策略](chrome://flags/#autoplay-policy)


    ### Web开发人员的最佳做法

    ``` javascript
    var promise = document.querySelector('video').play();
    if (promise !== undefined) {
        promise.then(_ => {
            // Autoplay started!
        }).catch(error => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
        });
    }
    ```

* [apple](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/)