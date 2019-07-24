import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './views/news.vue'
import Desc from './views/Desc.vue'
import Contact from './views/Contact.vue'
import Tech from './views/Tech.vue'
// import video from './views/video.vue'
import ProDetail from './views/Pro-detail.vue'
import Product from './views/Product.vue'
import NavBar from './components/NavBar.vue'
import NewsDetail from './views/News-detail .vue'
import TechDetail from './views/Tech-detail.vue'
import test from './views/testVideo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NavBar',
      component: NavBar,
      redirect:'/home',
      children:[
        {
          path:'/home',
          name:'home',
          component:Home,
          
        },
        {
          path:'/news',
          name:'news',
          component:News
        },
        {
          path:'/desc',
          name:'Desc',
          component:Desc
        },
        {
          path:'/contact',
          name:'Contact',
          component:Contact
        },
        {
          path:'/tech',
          name:'tech',
          component:Tech
        },
        {
          path:'/prodetail/:id',
          name:'prodetail',
          component:ProDetail
        },
        {
          path:'/newsdetail/:id',
          name:'newsdetail',
          component:NewsDetail
        },
        {
          path:'/techdetail/:id',
          name:'techdetail',
          component:TechDetail
        },
        {
          path:'/product',
          name:'product',
          component:Product
        }
        ,
        {
          path:'/test',
          name:'test',
          component:test
        }
      ]
    },
    
  ]
})
