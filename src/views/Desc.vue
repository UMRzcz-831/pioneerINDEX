<template>
    <div class="container" style="background:#fff;width:100%">
        <h2>公司简介</h2>
         


        <img src="../../static/images/logo.png" alt="" class="DescLogo">
        <img src="../../static/images/Decs_banner2.png" alt="" class="DescLogo2">
        
         <p class="Desc_main">
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江帕尼尔工具有限公司（缙云县先锋工具有限公司）坐落于全国最大的锯床生产基地—浙江省壶镇镇，公司成立于2004年，专业致力于金属锯切工具领域，集研发，生产，销售为一体，已通过ISO9001认证，拥有多项专利的科技创新型企业。
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司自成立之初，制定了清晰的发展目标—最专业的金属冷锯切锯片企业，为锯切行业提供高效率，高精度，高质量的锯切产品。本着以“人无我有，人有我优，人有我新”的宗旨，不断引进现金设备和经营理念。同时随着企业的发展和锯切行业的变革，先后与国内外知名企业进行深度合作，技术交流，公司的产品线也从单一高速钢圆锯片产品从横向和纵向拓展，涵盖高速钢圆锯片，TCT冷切圆锯片，真空热处理设备，PVD涂层服务，满足客户更广泛与高端的锯切需求和服务。
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先锋工具市场份额不断扩大，奠定了在同行中的领先地位和强势的品牌知名度，以饱满的热情不断开拓创新，创一流的质量，树一流的信誉，将我们的民族品牌发扬光大，竭诚为海内外客户服务。
        
         </p>

            <div class="player">
            <video-player  class="video-player vjs-custom-skin"
                            muted
                            autoplay
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
            >
            </video-player>
          </div>
    </div>
</template>

<script>
export default {
    data(){

        return{
        // 视频播放
      playerOptions : {
        playbackRates: [0.75, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          src: 'http://umr831.com/video/index.mp4'//url地址
          // src: 'http://www.html5videoplayer.net/videos/madagascar3.mp4'//url地址
          // src: "" //url地址
        }],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    }

            
    }
    }
    
}
</script>



<style>
@import url('../assets/css/anim.css');

    .container h2{
        visibility: hidden;
        animation: top-bottom 1s linear forwards;
    }
    .DescLogo{
        visibility: hidden;
        animation: bottom-top 1s linear forwards;
        padding-right: 30px;
        width: 50%
    }
    .DescLogo2{
        width: 100%;
    }
    .Desc_main{
        font-size: 18px;
        padding-top: 20px;
    }
    
</style>
