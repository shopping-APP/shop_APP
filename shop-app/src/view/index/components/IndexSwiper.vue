<template>
    <div id="swiperapp">
        <!-- Swiper -->
        <div class="swiper-container">
           <!-- swiper -->
            <swiper :options="swiperOption" v-if="swiperImg.length>1">
                <swiper-slide  
                    v-for="(s,i) in swiperImg"
                    :key="i">
                     <img class="swiperimg" :src="s.pic">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>

    </div>
</template>
<script>
// import Vue from 'vue';
import axios from 'axios';
import Swiper from 'swiper';
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return {
            swiperImg:[],
            swiperOption: {
                spaceBetween: 30,
                centeredSlides: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            }
        }
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=-1&proModelId=1&source=3&userId=567003&tuserId=567003';
        axios.get(url)
        .then(res => {
            // console.log('首页轮播',res.data.data.config);
            this.swiperImg = res.data.data.config
        })
    }
    // components:{
    //     swiper,
    //     swiperSlide
    // }
}
</script>

<style scoped>
    html, body {
      position: relative;
      height: 100%;
    }
    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color:#000;
      margin: 0;
      padding: 0;
    }
    #swiperapp{
        height: 160px;
        width: 100%;
    }
    .swiper-container {
      width: 100%;
      height: 100%;

    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiperimg{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
</style>