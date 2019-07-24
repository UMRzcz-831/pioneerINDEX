<template>
    <div class="Piofooter">
        
        <div class="footercontainer">
            <div class="copyright">
                
                <div class="footercolC" style="font-size:14px">
                    
                    Copyright◎缙云县先锋工具有限公司版权所有
                    <br>
                    <span class="iconfont icon-dizhi">地址：浙江省缙云县壶镇镇丽缙云工业园区聚贤路272号</span>
                    <br>
                    <span class="iconfont icon-dianhua">电话：0086-578-3168666　　0086-578-3548288</span>
                </div>
                
               
              
            </div>
        </div>
    </div>
</template>
<style>
    .z-100{
       width: 100% !important;  
    }
    .Piofooter{
        position: static;
        bottom: auto;
        height: 60px;
        left: 0;
        width: 100%;
        background: #1475c4
    }
    .copyright{
        text-align: center;
        color: aliceblue;
        font-size: 14px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
    }
    .copyright span p{
        text-align: center;
        color: aliceblue;
        font-size: 12px
    }
    .footercol{
        width: 20%;
        /* background-color: rgb(83, 8, 8); */
        float: left;
        height: 60px;
        text-align: center
    }
    .footercolC{
        
        /* background-color: rgb(83, 8, 85); */
        float: left;
        height: 60px;
        font-size: 14px;
    }
    .footercolC span{
        font-size: 14px;
    }
</style>

<script>
export default {
  name: 'Piofooter',
 
}
</script>