<template>
    <div class="page">
    <b-navbar toggleable="lg" type="dark" variant="info" style="padding-left:10%" >
        <b-navbar-brand href="#" style="font-size:30px">Pioneer</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav id="nav">
            <b-nav-item href="/">首页</b-nav-item>
            <b-nav-item  ><router-link to="/news">新闻资讯</router-link></b-nav-item>
            <b-nav-item to="/product" >产品展示</b-nav-item>
            <b-nav-item to="/Desc" >公司简介</b-nav-item>
            <!-- <b-nav-item href="#" >视频专栏</b-nav-item> -->
            <b-nav-item to="/tech" >技术支持</b-nav-item>
            <b-nav-item to="/contact" >联系我们</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right style="color:#000">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">CN</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
        
        <div>
            <router-view></router-view>
        </div>
        <v-footer></v-footer> 
        <!-- <footer class="footer navbar-fixed-bottom ">
            <div class="fcontainer">
                footer
            </div>
        </footer> -->
    </div>
</template>
<script>
import Piofooter from './footer'
export default {
     components: {
            
            'v-footer':Piofooter
          },
    data() {
        return {
            meal: ''
        }
    },
  methods: {
    getMeal() {
      
    }
  }
}    
</script>

<style>
    .footer{
    width: 100%;
    position:relative;
    /* margin: 0 auto; */
    bottom:0;
    height: 50px;
    z-index: 99;
    background: #1475c4;
    

    }
    .page{
        background: whitesmoke
    }
    #nav  .nav-item a{
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
    }
    #nav .nav-item a:hover{
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
    }
    .nav-item ul a{
        color: rgba(0, 0, 255, 0.7);
    }
    
</style>
