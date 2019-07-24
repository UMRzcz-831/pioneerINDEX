import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios';
import VueRouter from 'vue-router'
import videoPlayer from 'vue-video-player'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

require('video.js/dist/video-js.css')

require('vue-video-player/src/custom-theme.css')


import 'video.js/dist/video-js.css'
Vue.use(VueRouter);
Vue.use(videoPlayer)
Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

Vue.prototype.$axios = axios;
export const postJsonRequest = (url,params) => {//@ReqestBody
  return axios({
      method:"post",
      url:url,
      data:params,
      dataType:"json",
      headers:{
          'Content-Type': 'application/json',
      }
  })
}

// formData
export const postRequest = (url, params) => {//@ReqestParam
return axios({
  method: 'post',
  url: url,
  data: params,
   dataType:"json",
  transformRequest:[function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
}

export const getRequest = (url, data) => {
return axios({
  method: 'get',
  params: data, 
  url: url,
});
}





new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
