<template>
    <div>
        <div class="container">
            <h2>技术支持</h2>
            <div class="TechList">
                
                <!-- <b-card v-for="(item,index) in Techdata" :key="index" img-src="item.img" img-alt="Card image" img-left class="mb-3"
                    title=" item.head"
                    footer="Card Footer"
                    footer-tag=""
                >
                <b-card-text >
                    {{item.body}}
                </b-card-text>
                <b-button href="#" variant="primary">read more</b-button>
                
                </b-card> -->
                <b-card v-for="(item,index) in Tech" :key="index" :title="item.tecTitle"  header-tag="header" footer-tag="footer"
                :img-src="item.tecImg" img-alt="Card image" img-left class="mb-3">
                    
                    <b-card-text> {{item.tecContent}}</b-card-text>
                    <b-button href="#" variant="primary" @click="jumpNews(item.tecId,item.tecTitle,item.tecContent,item.tecImg)">read more</b-button>
                    <b-card-text class="updateTime iconfont icon-shijian"> 发布时间{{item.tecTime}}</b-card-text>
                </b-card>
                
            </div>
            
            
        </div>
            
    </div>
</template>

<script>
import {postRequest,postJsonRequest} from '../main'
export default {
    data(){

        return{
            Techdata:[
                {
                    
                    head: " 原材料真空热处理的优点",
                    update:"2017-10-21 14:37:24  ",
                    body :" 真空热处理是真空技术与热处理技术相结合的新型热处理技术，实际也属于气氛控制热处理，热处理工艺的全部和部分在真空状态下进行的，它可以实现几乎所有的常规热处理所能涉及的热处理工艺，但热处理质量大大提高。与常规热处理相比，真空热处理的同时，可实现无氧化、无脱碳、无渗碳，可去掉工件表面的磷屑，并有脱脂除气等作用，表面也可以达到光亮净化的效果。而且真空热处理后的工件比普通热处理工件抗氧化和耐腐蚀性强，且微观结构更为致密，大大提高高速钢原材料的性能。"
                },
                {
                    img:require('../../static/images/tech_1.jpg'),
                    head: " 高速钢锯片齿数过多的优势和劣势",
                    update:"2017-10-21 14:28:59 ",
                    body :"圆锯片在选择锯齿数的时候，不宜过多，准确的数据需要根据锯切的材料进行判定，过多会导致锯距（齿距的选择和最长切屑距离，工件材质有特定的关联性）变小，引起弹性偏低或是容易造成金属圆锯片锯齿的损坏，如果确实需要细齿量多的也必须严谨使用，特别是注意锯切时铁屑的走向，防止进入锯齿缝内部。 "
                },
                {
                    
                    head: " 研磨高速钢锯片的砂轮知识",
                    update:"2017-10-21 14:24:58 ",
                    body :" 1. 砂轮的规格及材质高速钢锯片研磨机所使用的砂轮规格直径为150mm，孔径为25mm，厚度则依锯片的齿型和齿距来选择。砂轮质料是依锯片材质来选择，依据经验其颗粒介于 60到100 之间，硬度介于K和N之间，主要采用瓷质烧结法的砂轮，其它如树脂和橡胶粘结法的砂轮使用也很普遍。在各种情况下选用品质好及平衡安定的砂轮是很重要的。"
                },
                {
                    // img:require('../../static/images/Tech_1.jpg'),
                    head: "  锯片品质常用检查方法",
                    update:"2017-10-21 14:21:48  ",
                    body :"1、新基体表面夹层或表面划痕方法：将基体水平放置，在夹层或划痕面上及周围注入少量清水或机油，并用硬物轻击夹层或划痕处3分钟左右，再将基体翻面，用肉眼观察基体背面是否有清水或油类渗透，有渗透为裂纹，否则为夹层或划痕。"
                },
            ],
            rows: 100,
            currentPage: 1,
            Tech:[]
    }
    },
    methods:{
        getData() {
                postRequest("http://houtai.dota4.cn/public/selectAllTec",{
                    page:this.currentPage
                }).then((res)=>{
                    console.log(res);
                    let data = res.data.data.list;
                    for(let i = 0; i < data.length;i++ ){
                        // data[i].tecContent = data[i].tecContent.substring(0,20)+"..."
                    }
                    this.Tech = data;
                    //  this.total=res.data.data.total
                    // this.tableData=res.data.data.list|filterFun};
                })
           
            },
            jumpNews(id,title,detail,bigimg){
                 this.$router.push({
                    name:'techdetail',
                    params:{
                    title:title,
                    id:id,
                    detail:detail,
                    bigimg:bigimg
                }
                })
                
            }
    },
    created(){
        this.getData()
    }
    
}
</script>



<style>
    .updateTime{
        color: #999;
        padding-left: 32px;
    }
    .card{
        width: 100%;
    }
    .card img{
        /* width: 150px !important; */
        height: 150px;
        margin-top: 35px;
    }
    .card-text{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; 
        overflow: hidden;
        word-break: break-all;
    }
    .TechList{
        padding-top: 10px
    }
    .pageIndex{
        margin: 0 auto;
    }
</style>
