<template>
    <div class="container" style="background:#fff;width:100%;min-height:840px" >
        
        

        <img src="../../static/images/logo.png" alt="" class="DescLogo">
        <h2>{{title}}</h2>
        <div v-if="bigimg">
            <b-img :src=bigimg fluid ></b-img>
        </div>
        <div v-html="detail">{{detail}} </div>
         <!-- <p class="Desc_main" v-html="text"> -->
             <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江帕尼尔工具有限公司（缙云县先锋工具有限公司）坐落于全国最大的锯床生产基地—浙江省壶镇镇，公司成立于2004年，专业致力于金属锯切工具领域，集研发，生产，销售为一体，已通过ISO9001认证，拥有多项专利的科技创新型企业。
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公司自成立之初，制定了清晰的发展目标—最专业的金属冷锯切锯片企业，为锯切行业提供高效率，高精度，高质量的锯切产品。本着以“人无我有，人有我优，人有我新”的宗旨，不断引进现金设备和经营理念。同时随着企业的发展和锯切行业的变革，先后与国内外知名企业进行深度合作，技术交流，公司的产品线也从单一高速钢圆锯片产品从横向和纵向拓展，涵盖高速钢圆锯片，TCT冷切圆锯片，真空热处理设备，PVD涂层服务，满足客户更广泛与高端的锯切需求和服务。
    <br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;先锋工具市场份额不断扩大，奠定了在同行中的领先地位和强势的品牌知名度，以饱满的热情不断开拓创新，创一流的质量，树一流的信誉，将我们的民族品牌发扬光大，竭诚为海内外客户服务。
         -->
         <!-- {{detail}}
         </p> -->
        
    </div>
</template>

<script>
import {postRequest,postJsonRequest} from '../main'
export default {
    name:'tecdetail',
    data(){

        return{
           
               title:'',
                id:'' ,
                detail:'',
                bigimg:'',
                temp:''
            
    }
    },
    methods:{
        getTechById(){
            this.is_search = true;
            postRequest("http://houtai.dota4.cn/public/getTecById",{
                    tecId:this.id
                }).then((res)=>{
                    
                    console.log(res);
                    let data = res.data.data;
                    
                    this.title = data.tecTitle;
                    this.temp=data.tecContent;
                    this.detail=this.temp.replace(/\n|\r\n/g,"<br/>");
                })
        }
    },
    mounted: function () {
      this.id = this.$route.params.id
      this.getTechById()
    //   this.title = this.$route.params.title
    //   var temp = this.$route.params.detail
    //   this.detail=temp.replace(/\n|\r\n/g,"<br/>");
    //     //   this.detail=temp.replace("\n","<br/>");

    //    console.log(this.detail)
    //   this.bigimg = this.$route.params.bigimg
    //   console.log(this.title)
    },
    

    
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
