<template>
  <div class="Item">
      <van-divider />
      <h3>
          <img src="@/assets/img/gt-标题修饰.png">
          <span>{{title}}</span>
          <img src="@/assets/img/gt-标题修饰.png">
     </h3>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in beauty" :key="index">
            <img :src="item.pic">
            <p class="p">{{item.d_title}}</p>
            <span>¥{{item.yuanjia}}</span>
        </swiper-slide>
        <swiper-slide class="last">
            <van-icon name="bag" size="45px" color='#FC7D7D'/>
            <p>公35件商品</p>
            <van-icon name="ellipsis" color='red' size='22px' :style="style"/>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>

export default {
    data() {
        return {
            
            swiperOption: {
          slidesPerView: 3.5,
          spaceBetween: 11,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        style:{
                top: '65%',
                left: '50%',
                transform: 'translateX(-50%)',
                position: 'absolute'
        }
        }
    },
    props:{
        'beauty':{
            type:Array,
             default: []
        },
        "title":{
            type:String,
            default:'补水面膜'
        }
    },
    created() {
        

        // console.log(this.beauty);
    },

}
</script>

<style scoped>
.Item{
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.03);
}
h3{
        height: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    margin: 0;
    z-index: 0;
    background: #fff;
}
    h3 span{
        top: -2px;
    padding: 0 10px;
    z-index: 1;
    font-size: 15px;
    color: #FC436D;
    }
    h3 img{
            height: 13px;
    width: 21px;
    vertical-align: middle;
    }
    .van-divider{
        margin: 0;
        line-height: 0;
    }

.van-ellipsis{
    font-weight: 600;
    font-size: 14px;
}
 .swiper-container{
     padding: 0 5px;
     background: #fff;
 }
 .swiper-slide img{
     max-width: 100%;
 }
 .swiper-slide .p{
         font-size: 12px;
    padding: 5px 0 0;
    margin-bottom: 5px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #666;
    text-align: left;
 }
 .swiper-slide span{
     text-align: left;
     color: #FF2B22;
    font-size: 14px;
    margin: 0 0 5px;
    width: 100%;
    display: inline-block;
 }
 .last{
     background: #FFF3F3;
     height: 100%;
     height:143px;
 }
 .van-icon-bag:before{
     margin: 25px 0 0;
 }
 .last p{
         font-size: 12px;
    position: absolute;
    top: 50%;
    left: 10%;
    text-align: center;
    color: #FC7D7D;
    width: 80%;
    z-index: 5;
 }
</style>