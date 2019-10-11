<template>
  <div class="div">
    <NavBar>
      <h3 slot="title" class="title">{{text[xb]}}</h3>
      <img slot="right" style="width:28px;" src="@/assets/img/3点.png" />
    </NavBar>
    <h3 class="fiery">
          <img src="@/assets/img/两个点右.png">
          <span>大家都在买</span>
          <img src="@/assets/img/两个点左.png">
     </h3>
     <ul class="BestSellers">
       <li v-for="(item,index) in popularlist.slice(0, 3)" :key="index">
         <img :src="item.pic">
         <p class="text">
           <van-icon name="fire" color="red"/>{{item.xiaoliang | simplify}}人已买
         </p>
         <p class="name">{{item.d_title}}</p>
         <p class="money">¥{{(item.yuanjia-item.quan_jine) | simplify2}} <span>卷后</span></p>
       </li>
     </ul>
     <i style="height:10px;display:block;"></i>
     <Recommend :recommend="popularlist.slice(3)"/>
  </div>
</template>

<script>
import popularlist from "@/assets/js/popularlist";
import NavBar from "../index/components/NavBar";
import Recommend from "../freeShipping/components/Recommend"
export default {
  data() {
    return {
      popularlist: [],
      xb:null,
      text:['补水面膜','潮牌耳机','床上用品']
    };
  },
  created() {
    this.xb=this.$store.state.xb
    this.popularlist = popularlist[this.xb].data.data;
    console.log(popularlist)
    console.log(this.xb)
  },
  components: {
    NavBar,
    Recommend
  },
  computed: {
    // this.popularlist.
  },
  filters:{
    'simplify':function(value){
      return (value/10000).toFixed(2)+'万'
    },
    'simplify2':function(value){
      return value.toFixed(1)
    },
  }
};
</script>

<style scoped>
.div{
      background: #f5f5f5;
}
.list-tabber {
  display: none !important;
}
.fiery{
        height: 40px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    margin: 0;
    z-index: 0;
    background: #fff;
}
    .fiery span{
        top: -2px;
    padding: 0 10px;
    z-index: 1;
    font-size: 15px;
    color: #FC436D;
    }
    .fiery img{
            height: 25px;
    width: 25px;
    vertical-align: middle;
    }

    .BestSellers{
      display: flex;
      justify-content: space-evenly;
      margin-top: 1px;
     background: #fff;
    }
    .BestSellers li{
      flex-grow:1;
      box-sizing: border-box;
      padding: 10px 5px 15px 5px;
    }
    .BestSellers li>img{
      max-width: 100%;
    }
    .BestSellers li>.text{
          background: #FFF3F3;
    border: 1px solid #ffbdbf;
    color: #fc4d52;
    font-size: 12px;
    }
    .BestSellers li>.name{
      -webkit-line-clamp: 2;
    color: #333;
        font-size: 13px;
            padding: 5px 0 0;
    margin-bottom: 5px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
        overflow: hidden;
        text-align: left;
        height:32.4px;
    }
    .BestSellers li>.money{
      color: #FF2B22;
    font-size: 16px;
    overflow: hidden;
    margin: 0 0 5px;
    width: 100px;
    text-align: left;
    }
    .BestSellers li>.money span{
          color: #888;
    font-size: 11px;
    }
</style>