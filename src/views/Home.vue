<template>
  <div style="background:#e0e0e0">
    <div style="background:#000">
      <div class="Videocontainer">
          <!-- 视频轮播 -->

                <div class="video_list" ref="videoList">
                  <div class="video_ls clear"  ref="videoLs">
                    <div class="video_shows" v-for="(item,index) in srclist" :key="item">
                      <div v-if="item.imsrc" class="div_videos"  >
                        <b-img :src=item.imsrc :ref="index"></b-img>
                        <!-- <img :src=item.imsrc /> -->
                      </div>
                      <div v-if="item.videosrc"  class="div_videos" >
                        <video-player class="video-player vjs-custom-skin"
                                      :ref="index"
                                      :options="playerOptions"
                                      :playsinline="true"
                                      @play="onPlayerPlay($event)"
                                      @pause="onPlayerPause($event)"
                                      @ended="onPlayerEnded($event)"
                                      @loadeddata="onPlayerLoadeddata($event)"
                                      @waiting="onPlayerWaiting($event)"
                                      @playing="onPlayerPlaying($event)"
                                      @timeupdate="onPlayerTimeupdate($event)"
                                      @canplay="onPlayerCanplay($event)"
                                      @canplaythrough="onPlayerCanplaythrough($event)"
                                      @ready="playerReadied"
                                      @statechanged="playerStateChanged($event)"
                        >
                        </video-player>
                      </div>
                    </div>
                  </div>
                </div>












        <!-- <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          background="#0e0e0e"
          fade
          indicators
          controls
          img-width="800"
          img-height="533"
          interval:2000
        >
          <b-carousel-slide v-for="(item,index) in dataimg" :key="index"
            :caption="item.txt"
            :img-src="item.src"
            img-width="800"
            img-height="533"
          ></b-carousel-slide>
          
        </b-carousel> -->
      </div>
    </div>
      <div  style="background:#F2F2F2;width:100%;margin:10px auto;">
          <div class="Iconcontainer">
            <b-container class="bv-example-row"  >
              <b-row>
                <b-col class="icon-1 HomeIcon">
                              <router-link to="/Desc" >
                                <span>
                                <i class="iconfont icon-wenhua icon"></i>
                                <p >企业文化</p>
                                </span>

                              </router-link>
                </b-col>
                <b-col class="icon-2 HomeIcon">
                              <router-link to="/product" >
                              <span>
                                <i class="iconfont icon-keyan icon"></i>
                                <p>产品展示</p>
                              </span>
                              </router-link  >
                </b-col>
                <b-col class="icon-3 HomeIcon">
                              <router-link to="/tech" >
                              <span>
                                <i class="iconfont icon-jishu icon"></i>
                                <p>技术支持</p>
                              </span>
                              </router-link  >
                </b-col>
                <b-col class="icon-4 HomeIcon">
                              <router-link to="/contact" >
                              <span>
                                <i class="iconfont icon-dianhua icon"></i>
                                <p>联系我们</p>
                              </span>
                              </router-link  >
                </b-col>
                
              </b-row>

            </b-container>

          </div>
      </div>
  <div class="Home-main " style="background:#F2F2F2;width:100%;height:400px">
      <div class="corpDecs container" >
          <div class="Decstitle">
              <h1>PioneerTools</h1>
          </div>
          <div class="Desc">
              <p>浙江帕尼尔工具有限公司（缙云县先锋工具有限公司）坐落于全国最大的锯床生产基地—浙江省壶镇镇，公司成立于2004年，专业致力于金属锯切工具领域，集研发，生产，销售为一体，已通过ISO9001认证，拥有多项专利的科技创新型企业。

    公司自成立之初，制定了清晰的发展目标—最专业的金属冷锯切锯片企业，为锯切行业提供高效率，高精度，高质量的锯切产品。本着以“人无我有，人有我优，人有我新”的宗旨，不断引进现金设备和经营理念。
              </p>
              <br>
          <b-button variant="outline-primary" class="learnmore" to="/Desc">了解更多</b-button>
          </div>
          <b-row style="position:absolute;margin-left: 10%;">
              <b-col >
                <!-- <img src="../../static/images/logohead.png" alt=""> -->
                 <b-img thumbnail fluid :src=Logo.src class="DescriptionLogo"></b-img>
              </b-col>
          </b-row>
      </div>
      
  </div>
  <div class="Home-show" style="background:#F2F2F2;height:400px">
      <div class="container" >
          <div class="Showtitle">
              <h1 class="">产品展示</h1>
              <div class="Titleline"></div>
          </div>
           
          <b-container fluid class="p-4 ">
            <b-row  > 
              <b-col v-for="(item,index) in Proimg" :key="index" @click="jump(index,item.txt,item.detail,item.bigimg)">
                <b-img  fluid :src=item.src  :class=item.className ></b-img>
                <p :class=item.subClass>{{item.txt}}</p>
              </b-col>
              
            </b-row>
          </b-container>
      </div>
  </div>
  <div class="Home-show" style="background:#F2F2F2;height:800px">
      <div class="container" >
          <div class="Showtitle">
              <h1 >新闻资讯</h1>
              <div class="Titleline"></div>
          </div>
            <!-- <img src="../../static/images/newsBanner.png" alt=""> -->
            <div style="">
                <b-img :src=newsBanner.src fluid style="width: 100%;"></b-img>
            </div>
          <b-container fluid class="p-4 ">
            <b-row  > 
              <b-col v-for="(item,index) in news" :key="index" >
                <!-- <b-card>
                      <b-media>
                      

                      
                      <p class="HomeNews">
                        {{item.body}}
                      </p>
                      

                      
                    </b-media>
              </b-card> -->
                <b-card
                  
                  :img-src="item.newsImg"
                  
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                >
                  <h5 class="mt-2 newTitle">{{item.newsTitle}} </h5>
                  <b-card-text class="HomeNews">
                    {{item.newsContent}}
                  </b-card-text>

                  <b-button href="#" variant="primary" @click="jumpNews(index,item.newsTitle,item.newsContent,item.newsImg)">阅读更多</b-button>
                </b-card>

              </b-col>
              
              
            </b-row>
          </b-container>
      </div>
  </div>
  </div>
  
</template>
<style>
@import url('../assets/css/iconfont.css');
@import url('../assets/css/anim.css');

  .b-carousel-slide img{
    width: 100%
  }
  .Titleline{
    border: 2px solid #000;
        width:140px ;

        margin: 4px auto;
  }
  .HomeNews{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; 
    overflow: hidden;
    word-break: break-all;
    font-size: 14px
  }
  .newTitle{
    font-size: 16px;
    font-weight: bolder
  }
  .product{
    visibility: hidden;
    animation: bottom-top 0.5s 1s linear forwards;
  }
  .product1{
    visibility: hidden;
    animation: bottom-top 0.5s 1s linear forwards;
  }
  .product2{
    visibility: hidden;
    animation: bottom-top 0.5s 1.5s linear forwards;
  }
  .product3{
    visibility: hidden;
    animation: bottom-top 0.5s 2s linear forwards;
  }
  .product4{
    visibility: hidden;
    animation: bottom-top 0.5s 2.5s linear forwards;
  }
  .productP1{
    visibility: hidden;
    animation: top-bottom 0.5s 1.25s linear forwards;
  }
  .productP2{
    visibility: hidden;
    animation: top-bottom 0.5s 1.75s linear forwards;
  }
  .productP3{
    visibility: hidden;
    animation: top-bottom 0.5s 2.25s linear forwards;
  }
  .productP4{
    visibility: hidden;
    animation: top-bottom 0.5s 2.75s linear forwards;
  }
  .icon-1{
    visibility: hidden;
    animation: bottom-top 0.5s 2.5s linear forwards;
  }
  .icon-2{
    visibility: hidden;
    animation: bottom-top 0.5s 2s linear forwards;
  }
  .icon-3{
    visibility: hidden;
    animation: bottom-top 0.5s 1.5s linear forwards;
  }
  .icon-4{
    visibility: hidden;
    animation: bottom-top 0.5s 1s linear forwards;
  }
  .DescriptionLogo{
    width: 80%;
    /* z-index: -99; */
    padding-top: 28% !important;
    border-style: none !important;
    background-color: none ;
  }
  /* anim */
  .w-100 {
    /* width: 100% !important; */
    margin:0 auto;
}
.Home-show{
  margin: 10px auto;
}
.Home-show p{
  text-align: center
}
  .col a:hover{
    text-decoration: none;
  }
  .learnmore{
    position: absolute;
    display: flex;
    left: 60%;
    top: 50%;
  }
  ul{
    list-style: none;
    
  }
  
  .icon{
    font-size: 54px
  }
  .Home-main{
    height: 300px;
    width: 80%;
    /* background-color: blue; */
    margin: 0 auto;
    position: relative;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;

  }
  .Decstitle h1,.Showtitle h1{
    text-align: center;
    color: #1475c4;
    visibility: hidden;
    animation: top-bottom 1s linear forwards;
  }
  .Desc p{
    /* width: 900px; */
    width: 80%;
    padding-left: 20%;
    float: left;
    color: #000 ;
    font-size: 18px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; 
    overflow: hidden;
    word-break: break-all;
  }
  .HomeIcon a{
    color: #1a1010f1
  }
  .logo{
    background: url('../../static/images/logohead.png') no-repeat;
    width:180px;
    height: 210px;
    line-height: 210px;
    float: left;
  }
  .icon p{
    font-size: 10px;
  }
  .clear {
  *zoom: 1;
}
.clear:after {
  visibility: hidden;
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.video_list {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  background: #000
}
.video_ls {
  width: 500%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /*transition: 2s;*/
}
.video_shows {
  width: 20%;
  height: 100%;
  float: left;
  /*transform: translate3d(-600px,0,0);*/
}
.div_videos {
  width: 100%;
  height: 100%;
}
.div_videos img {
  width: 100%;
  height: 100%;
  pointer-events:none
}
</style>

<script>
import {postRequest,postJsonRequest} from '../main'
  export default {
    
    data() {
      return {
        slide: 0,
        sliding: null,
        cur_page: 1,
        dataimg: [{
						src: require('../../static/images/carousel_1.jpg'),
						txt:"First slide",
					},
					{
						src: require('../../static/images/carousel_2.jpg'),
					  txt:"Second slide",
          },
          // {
					// 	src: require('../../static/images/carousel_3.png'),
					//   txt:"Second slide",
					// },
				
        ],
        Proimg: [{
						src: require('../../static/images/show_1.jpg'),
            txt:"S600玫瑰金",
            className:"product1",
            subClass:"productP1",
            bigimg:require('../../static/images/bigPic1.jpg'),
            detail:"<h3>S600玫瑰金</h3>\n抗冲击，超强韧性，切割各种钢材，尤其适用于锯切厚壁管.\n<h3>S600(Rose gold) Series</h3>\nHigh impact resistance, super toughness, cutting all kinds of steel, especially suitable for sawing thick-walled tubes"
					},
					{
						src: require('../../static/images/show_2.jpg'),
            txt:"S600珍珠黑",
            className:"product2",
            subClass:"productP2",
            bigimg:require('../../static/images/bigPic2.jpg'),
            detail:"<h3>S600珍珠黑 </h3>\n耐高温，超强韧性，切割各种钢材，不锈钢等高强钢。\n<h3>S600(pearl black)</h3>\nHigh temperature resistance, super toughness, cutting all kinds of steel, stainless steel and other high strength steel."
          },
          {
						src: require('../../static/images/show_3.jpg'),
            txt:"氮碳化钛圆锯片",
            className:"product3",
            subClass:"productP3",
            bigimg:require('../../static/images/bigPic3.jpg'),
            detail:"<h3>氮碳化钛圆锯片   TiCN </h3>\n 氮碳化钛涂层圆锯片有高硬度性，低摩擦系数，更好的抗磨损性和抗粘着性，可以进一步提高锯片的锯切速度和使用寿命。TiCN涂层锯片在锯切粘性强的金属，如铜工件和不锈钢工件，具有非常显著的效果。\n<h3>TiCN Coating saw blade </h3>\nTiCN coating is a multilayer coating with high hardness, low friction coefficient, better wear resistance and anti-adhesion, which can further improve the sawing speed and service life of the saw blade. It has a very significant effect in cutting highly viscous metals such as copper and stainless steel workpieces."
          },
          {
						src: require('../../static/images/show_4.jpg'),
            txt:"氮铝化钛圆锯片",
            className:"product4",
            subClass:"productP4",
            bigimg:require('../../static/images/bigPic4.jpg'),
            detail:"<h3>氮铝化钛圆锯片</h3>\n这是一种新型的复合抗磨损涂层，具有硬度高，耐高温，热硬性好，附着力强等特点，尤其适用于锯切高合金钢，不锈钢等高强度钢，同时推荐用于锯切厚壁管和实心工件。由于其高氧化温度和低导热性，特别适合干切。\n<h3>TiAlN</h3>\nThis is a new type of composite anti-wear coating with high hardness, high temperature resistance, good thermal hardness and strong adhesion. It is especially suitable for cutting high alloy steel, stainless steel and other high strength material. Tt is also recommended for cutting thick-walled tubes and solid workpieces. Due to its high oxidation temperature and low thermal conductivity, it is especially suitable for dry cutting."
          },
        
				
        ],
        news:[
        ],
        Logo:
          {
            src: require('../../static/images/logohead.png')
          }
        
          ,
          newsBanner:{src: require('../../static/images/newsBanner.png')}
          ,
          playerOptions: {
                height: '500',
                muted: true,//开启声音
                  autoplay: true,
                   fluid: true,
                language: 'zh-CN',
                
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                type: "video/mp4",
                src: "",
              }],
              poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
              },
            refslist:[],//对象列表
            srclist:[//视频图片列表
              {imsrc:require('../../static/images/carousel_1.jpg')},
              {imsrc:require('../../static/images/carousel_2.jpg')},
              
              {videosrc:"http://umr831.com/video/index.mp4"} ,
              {imsrc:require('../../static/images/carousel_1.jpg')},
              {imsrc:require('../../static/images/carousel_2.jpg')},
              
            ],
            num:0,
            time:''
      
      }
    },
    methods: {
      startPlay(){//图片
        this.time=setInterval(()=>{
          this.countPlay();
          if(this.srclist[this.num].videosrc){
            clearInterval(this.time);
            this.playerOptions.sources[0].src=''
            this.playerOptions.sources[0].src=this.srclist[this.num].videosrc
          }
        },4000)
      },
      stopSlider(){},
      countPlay(){
        this.num++;
        if(document.body.clientWidth<500){
          let ScreenWidth = document.body.clientWidth
          console.log(document.body.clientHeight)
          console.log(ScreenWidth)
          this.$refs.videoLs.style.left=-(ScreenWidth-30)*(this.num)+"px";
        }
        else{
          this.$refs.videoLs.style.left=-800*(this.num)+"px";
        }
        this.$refs.videoLs.style.transition="2s"
        if(this.num>=this.srclist.length){
          this.num=0;
          this.$refs.videoLs.style.left="0px"
          this.$refs.videoLs.style.transition="0s"
        }
      },
      onPlayerPlay(player) {
      },
      onPlayerPause(player) {
      },
      onPlayerEnded(player) {//播放完毕之后 src被替换
        this.countPlay()
        this.playerOptions.sources[0].src=''
        this.playerOptions.sources[0].src=this.srclist[this.num].videosrc
        if(this.srclist[this.num].imsrc){
          this.startPlay()
        }
      },
      onPlayerLoadeddata(player) {
      },
      onPlayerWaiting(player) {
      },
      onPlayerPlaying(player) {
      },
      onPlayerTimeupdate(player) {
      },
      onPlayerCanplay(player) {
      },
      onPlayerCanplaythrough(player) {
      },
      // or listen state event
      playerStateChanged(playerCurrentState) { //播放的进程中就是一直在播放
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready 从第几秒开始播放
      playerReadied(player) {
        // seek to 10s
        // console.log('example player 1 readied', player)
        // player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      },


      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      jump(id,title,detail,bigimg){
        // console.log(title)
        // this.$router.push(`prodetail/${id}`)
        this.$router.push({
          path:`/prodetail/${id}`,
          query:{
            title:title,
            id:id,
            detail:detail,
            bigimg:bigimg
          }
        });
        // this.$router.push('/desc');
      },
    
       getNews() {
                postRequest("http://houtai.dota4.cn/public/getAllNews",{
                    page:this.cur_page
                }).then((res)=>{
                    console.log(res);
                   let data = res.data.data.list;
                   let HomeNews = []
                    for(let i = 0; i < 3;i++ ){
                      HomeNews[i]=data[i]
                        // data[i].newsContent = data[i].newsContent.substring(0,0)+"..."
                        // data[i].newsTime = data[i].newsTime.toLocalString()
                    }
                    this.news = HomeNews;
                    //  this.total=res.data.data.total;
                })
           
            },
            jumpNews(id,title,detail,bigimg){
                // console.log(title)
                // this.$router.push(`prodetail/${id}`)
                this.$router.push({
                path:`/newsdetail/${id}`,
                query:{
                    title:title,
                    id:id,
                    detail:detail,
                    bigimg:bigimg
                }
                });
                // this.$router.push('/desc');
            }
    ,
    
        // this.$router.push('/desc');
      },
      created(){
        this.getNews()
    },
    mounted() {
      if(this.srclist[0].videosrc){//第一个是视频
        this.playerOptions.sources[0].src=this.srclist[this.num].videosrc
      }else{//第一个是图片
        this.startPlay()
      }
      var ScreenWidth = document.body.clientWidth
      if(ScreenWidth<500){
        this.$refs.videoList.style.height=198+"px"
      }else{
        this.$refs.videoList.style.height=500+"px"
      }
    }
      
    
    
  }
  
</script>