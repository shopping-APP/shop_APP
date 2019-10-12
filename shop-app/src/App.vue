<template>
  <div id="app">
    <div class="list-tabber">
      <router-link to='/index'>
        <p class="iconfont icon-shouye"></p>
        <p>首页</p>
      </router-link>
      <router-link to='/freeShipping'>
        <p class="iconfont icon-99"></p>
        <p>9.9包邮</p>
      </router-link>
      <router-link to='/sort'>
        <p class="iconfont icon-leimupinleifenleileibie"></p>
        <p>分类</p>
      </router-link>
      <router-link to='/collection'>
        <p class="iconfont icon-shoucang"></p>
        <p>收藏</p>
      </router-link>
      <router-link to='/main'>
        <p class="iconfont icon-wode"></p>
        <p>我的</p>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    swiper,
    // eslint-disable-next-line vue/no-unused-components
    swiperSlide
  }
}
</script>

<style>
@import url('http://at.alicdn.com/t/font_1395397_2dz70mxs4x9.css'); 
@import url('http://at.alicdn.com/t/font_1401731_wgaw4fxxu6.css');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  overflow-x: hidden;
  width: 100%;
  height:100%;
  margin:0;
  padding: 0;
  background: #f5f5f5;
}
p{
  margin: 0;
}
.iconfont{
  font-size:24px;
}
.list-tabber{
  z-index: 99;
  background: #fff;
  font-size: 12px;
  width:100%;
  position:fixed;
  bottom:0;
  left:0;
  display:flex;
  height:50px;
  justify-content: space-around;
  align-items: center;
  border-top:1px solid #cccccc;
}
.router-link-exact-active{
  color:#fd575c;
}
a{
  text-decoration: none;
  color: #666;
}
a:link{
  color: none;
}
a:active{
  color: none;
}
a:hover{
  color: none;
}
a:visited{
  color: none;
}
</style>
