<template>
    <div class="container" style="background:#fff;height:860px">
        <h2>联系我们</h2>
        <img src="../../static/images/logo.png" alt="" class="ContactLogo">
        <img src="../../static/images/contactus.jpg" alt="" class="ContactLogo2">
        
        
        <div class="Detail_con">
            <b-row>
                <b-col>
                    <span class="iconfont icon-dizhi">地址：浙江省缙云县壶镇镇丽缙云工业园区聚贤路272号</span>
                </b-col>
            
            </b-row>
            <b-row>
                <b-col>
                    <span class="iconfont icon-dianhua">电话：0086-578-3168666　　0086-578-3548288</span>
                </b-col>
                
            </b-row>
            <b-row>
                <b-col>
                    <span class="iconfont icon-liuyan">邮箱：sales@pioneertools.com</span>
                </b-col>
                
            </b-row>
            <b-row>
                <b-col>
                    <span class="iconfont icon-fax">传真：0086-578-3125668</span>
                </b-col>
                
            </b-row>
            <b-row>
                <b-col>
                    <span class="iconfont icon-wangzhan">网址：htttp://pioneertools.com</span>
                </b-col>
                
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    data(){

        return{
            
            
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
    .ContactLogo{
        visibility: hidden;
        animation: bottom-top 1s linear forwards;
        padding-right: 30px;
        width: 50%;
    }
    .ContactLogo2{
        width: 100%;
    }
    .Detail_con{
        padding-left: 30%;
        padding-top: 20px;
    }
    
</style>
