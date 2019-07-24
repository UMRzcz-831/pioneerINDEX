<template>
    <div class="container" style="background:#FAFAFA;height:auto">
        
        <h2>产品展示</h2>
        
        <div class="Dropdowncontainer Dropdown">
            <Dropdown>
                <a href="javascript:void(0)" @click="toClassAll">
                    全部
                    
                </a>
                
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)" @click="toClass1">
                    高速钢圆锯片
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list" >
                    <DropdownItem v-for="(items,sindex) in classifiedPro[1]" :key="sindex">
                        {{items.productName}}
                    </DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)" @click="toClass2">
                    TCT冷切锯片
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem v-for="(items,sindex) in classifiedPro[2]" :key="sindex">
                        {{items.productName}}
                    </DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)" @click="toClass3">
                    数控磨齿机
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem v-for="(items,sindex) in classifiedPro[3]" :key="sindex">
                        {{items.productName}}
                    </DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
            <Dropdown>
                <a href="javascript:void(0)" @click="toClass4">
                    高速圆锯片床
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem v-for="(items,sindex) in classifiedPro[4]" :key="sindex">
                        {{items.productName}}
                    </DropdownItem>
                    
                </DropdownMenu>
            </Dropdown>
        
        </div>

        <b-img  fluid :src=ProHeadImg.src   ></b-img>
        <!-- <b-row  > 
              <b-col v-for="(item,index) in Productimg" :key="index" @click="jump(index,item.txt,item.detail,item.bigimg)">
                <b-img  fluid :src=item.bigimg  :class=item.className ></b-img>
                <div class="Cardline"></div>
                <p :class=item.subClass style="text-align:center">{{item.txt}}</p>
              </b-col>
              
        </b-row> -->
        <div v-if="classNow==0">
            <b-row  class="ProRow" v-for="(items,index) in newProImg" :key="index"> 
              <b-col class="proBox" v-for="(item,subindex) in items" :key="subindex" @click="jump(item.productId,item.productName)">
                <b-img  fluid :src=item.productImg  class="ProductImg" ref="Imgs"></b-img>
                <div class="Cardline"></div>
                <p :class=item.subClass style="text-align:center">{{item.productName}}</p>
              </b-col>
              
            </b-row>
        </div>
        <div v-else>
            <b-row  class="ProRow" v-for="(items,index) in AfterClassifyImg" :key="index"> 
              <b-col class="proBox" v-for="(item,subindex) in items" :key="subindex" @click="jump(item.productId,item.productName)">
                <b-img  fluid :src=item.productImg  class="ProductImg"  ref="Imgs"></b-img>
                <div class="Cardline"></div>
                <p :class=item.subClass style="text-align:center">{{item.productName}}</p>
              </b-col>
              
            </b-row>
        </div>
    </div>
</template>

<script>
import {postRequest,postJsonRequest} from '../main'
export default {
    data(){

        return{
            picurl:"http://img.dota4.cn"
            ,
            ProHeadImg:{
						src: require('../../static/images/carousel_3.png'),
					 
					},
            cur_page:1
            ,newProImg:[]
            ,
            AfterClassifyImg:[]
            ,
            Productimg: [
						
                   
                    ] ,  
            classifiedPro:[[],[],[],[]]
            ,
            classNow:0,      
    
        }
    
    
    },
    methods:{
                getData() {
                postRequest("http://houtai.dota4.cn/public/getAllProduct",{
                    page:this.cur_page
                }).then((res)=>{
                    console.log(res);
                    let data = res.data.data.list;
                    for(let i = 0; i < data.length;i++ ){
                        // data[i].productDescription = data[i].productDescription.substring(0,20)+"..."
                        data[i].productImg = this.picurl+ data[i].productImg.replace("sxito/","") 
                    }
                    this.Productimg = data;
                    // console.log(this.Productimg[0].productClassification)


                    // this.classify()
                    let num = new Array(0,0,0,0,0)
                    console.log(num)
                    for(var i=1;i<=4;i++){
                        for(var j=0;j<this.Productimg.length;j++){
                            if(i==this.Productimg[j].productClassification){
                                this.classifiedPro[i].push(this.Productimg[j])
                                num[i]++
                            }
                        }
                    }
                    console.log(num)
                    console.log(this.classifiedPro)

                    const result=[];
                    for(var i=0;i<this.Productimg.length;i+=4){
                    result.push(this.Productimg.slice(i,i+4));      
                    }
                    console.log(result)
                    this.newProImg=result;
                    })
            },
            jump(id,title){
                 this.$router.push({
                    name:'prodetail',
                    params:{
                    id:id,
                    title:title
                }
                })
                
            },
            ClassMethod(){
                postRequest("http://houtai.dota4.cn/public/selectProductByClassification",{
                    productClassification:this.classNow
                }).then((res)=>{
                    
                    console.log(res);
                    let data = res.data.data;
                    for(let i = 0; i < data.length;i++ ){
                        // data[i].productDescription = data[i].productDescription.substring(0,20)+"..."
                        data[i].productImg = this.picurl+ data[i].productImg.replace("sxito/","") 
                    }
                    
                    const result=[];
                    for(var i=0;i<data.length;i+=4){
                    result.push(data.slice(i,i+4));      
                    }
                    console.log(result)
                    this.AfterClassifyImg=result;
                })
            },
            toClassAll(){
                this.classNow=0
            },
            toClass1(){
                this.classNow=1
                console.log(222222222)
                this.ClassMethod()
                
            },
            toClass2(){
                this.classNow=2
                // console.log(222222222)
                this.ClassMethod()
            },
            toClass3(){
                this.classNow=3
                // console.log(222222222)
                this.ClassMethod()
            },
            toClass4(){
                this.classNow=4
                // console.log(222222222)
                this.ClassMethod()
            },
            justifyImg(){
                
                if(document.body.clientWidth<500){
                    let ScreenWidth = document.body.clientWidth
                    console.log(document.body.clientHeight)
                    console.log(ScreenWidth)
                    console.log(this.$refs.Imgs)
                    this.$refs.Imgs.style.Width=153.5+"px";
                    }
                    else{
                        this.$refs.Imgs.style.width=263.5+"px";
                    }
            }
                
    },
    created:function(){
        this.getData()
        this.justifyImg()
        console.log(this.Productimg)
        
        
    },
    
    
}
</script>



<style >
@import url('../assets/css/anim.css');
    .Dropdown{
        padding-bottom: 20px
    }
    .ivu-dropdown{
        padding-left: 30px;
        
    }
    .ivu-dropdown:nth-child(1){
        padding-left: 0px
    }
    .ivu-dropdown-item {
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #515a6e;
        font-size: 14px!important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background .2s ease-in-out;
    }
    .ProductImg{
        max-height: 178px !important;
        /* min-height: 175px; */
        /* min-width: 263px; */
    }
    .proBox{
        max-width: 293.5px !important;
        max-height: 230px !important;
        margin:2px;
        background: #ffffff
        
    }
    .ProRow{
        padding-top: 10px
    }
    .Cardline{
        border: 2px solid #666;
        width:120px ;

        margin: 4px auto;
    }
    .nav-link,.nav-link a{
        color: #000
    }

    .nav-item ul a {
    color: #000 !important;
}
</style>
