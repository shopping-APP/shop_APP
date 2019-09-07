import Vue from 'vue'
import App from './App.vue'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

import router from './router'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
