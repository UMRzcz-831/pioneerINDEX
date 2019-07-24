<template>
    <div class="container" style="height:880px">
        <h2>新闻资讯</h2>
        <div class="newsList">
            
            <!-- <b-card v-for="(item,index) in newsdata" :key="index" img-src="item.img" img-alt="Card image" img-left class="mb-3"
                title=" item.head"
                footer="Card Footer"
                footer-tag=""
            >
            <b-card-text >
                {{item.body}}
            </b-card-text>
            <b-button href="#" variant="primary">read more</b-button>
            
            </b-card> -->
            <b-card v-for="(item,index) in news" :key="index" :title="item.newsTitle"  header-tag="header" footer-tag="footer"
            :img-src="item.newsImg" img-alt="Card image" img-left class="mb-3">
                
                <b-card-text class="newsbody"> {{item.newsContent}}</b-card-text>
                <b-button href="#" variant="primary" @click="jumpNews(item.newsId,item.newsTitle,item.newsContent,item.newsImg)">read more</b-button>
                <b-card-text class="updateTime iconfont icon-shijian"> 发布时间{{item.newsTime}}</b-card-text>
            </b-card>
            
        </div>
        
        <div class="overflow-auto" >
            <div class="mt-3">
            
            <b-pagination v-model="currentPage" :total-rows="rows" size="lg"></b-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {postRequest,postJsonRequest} from '../main'
export default {
    data(){

        return{
            newsdata:[
                {
                    img:require('../../static/images/news_1.jpg'),
                    head: " 如何辨别PVD涂层的真伪",
                    update:"2019/7/5",
                    body :"                氧化涂层：通常也称为蒸汽涂层，英文简写为VAPO，其经过高温氧化处理，色泽为深黑色，把化学元素Fe3O4经过精准的特别处理后"
                },
                {
                    img:require('../../static/images/news_2.jpg'),
                    head: " 如何辨别PVD涂层的真伪",
                    update:"2019/5/5",
                    body :"                氮碳化钛涂层：属于PVD涂层的范畴，英文简写为TiCN,色泽一般为蓝灰色。TiCN由于其结合了TiC和TiN的性能，既结合了TiC涂层的高硬度性，又具备"
                },
                {
                    img:require('../../static/images/show_2.jpg'),
                    head: " 如何辨别PVD涂层的真伪",
                    update:"2018/12/25",
                    body :"                氮碳化钛涂层：属于PVD涂层的范畴，英文简写为TiCN,色泽一般为蓝灰色。TiCN由于其结合了TiC和TiN的性能，既结合了TiC涂层的高硬度性，又具备"
                },
                {
                    // img:require('../../static/images/news_1.jpg'),
                    head: "  市场对高速钢锯片品质需求的改变",
                    update:"2017/10/21",
                    body :"随着中国制造业的升级，环保因素的影响，人工成本的不断上涨；企业用户自动化锯切设备的更新，对生产效率的要求，以及对高端锯片使用之后的体验，越来越多的用户和经销商朋友对于高端的圆锯片呈现渴求的态势，这对锯片生产商来说，对工匠精神的坚持无疑是极大的鼓励，也因此，浅谈这些年客户对锯片品质要求的心理接受程度的改变。"
                },
            ],
            rows: 100,
            currentPage: 1,
            news:[]
            
    }
    },
    methods:{
       getNews() {
                postRequest("http://houtai.dota4.cn/public/getAllNews",{
                    page:this.currentPage
                }).then((res)=>{
                    console.log(res);
                   let data = res.data.data.list;
                    for(let i = 0; i < data.length;i++ ){
                        // data[i].newsContent = data[i].newsContent.substring(0,0)+"..."
                        // data[i].newsTime = data[i].newsTime.toLocalString()
                    }
                    this.news = data;
                    //  this.total=res.data.data.total;
                })
           
            },
            jumpNews(id,title,detail,bigimg){
                 this.$router.push({
                    name:'newsdetail',
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
        this.getNews()
    }
    
}
</script>



<style>
    .updateTime{
        color: #999;
        padding-left: 32px;
    }
    .newsbody{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3; 
        overflow: hidden;
        word-break: break-all;
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
    .newsList{
        padding-top: 10px
    }
</style>
