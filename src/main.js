// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '../static/css/common.css'
import './assets/font/font.css';
import BaiduMap from 'vue-baidu-map'//地图
import {post,get,patch,put} from './utils/htttp.js'

Vue.config.productionTip = false;


//定义http请求全局变量
Vue.prototype.$post=post;
Vue.prototype.get=get;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;


Vue.use(VueAwesomeSwiper, /* { default global options } */);
Vue.use(BaiduMap, {
  ak: 'oWk8ofl3pI7jt4P9nng4cw2zyOQhY3pi'
});
import animated from 'animate.css'
Vue.use(animated);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
