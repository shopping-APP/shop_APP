import Vue from 'vue'
import App from './App.vue'

//全局引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

//按需引入vant组件
import {NavBar,Grid, GridItem,Tab, Tabs,Divider,Swipe, SwipeItem,Icon,Image,Lazyload  } from 'vant';
import 'vant/lib/index.css'
Vue.use(NavBar).use(Grid).use(GridItem).use(Tab).use(Tabs).use(Divider).use(Swipe).use(SwipeItem).use(Icon).use(Image).use(Lazyload);
// import 'vant/lib/icon/local.css';

//引入公用样式
import './assets/css/public.css'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
