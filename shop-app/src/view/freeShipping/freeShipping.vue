<template>
  <div class="free shop">
    <NavBar>
      <img
        slot="title"
        src="https://cmsstatic.dataoke.com//web/nine_special/images/nine_title.svg?v=201910082310"
      />
      <img slot="right" style="width:28px;" src="@/assets/img/3点.png" />
    </NavBar>
    <!-- 上部分展示 -->
    <UpperPart :gettitle="gettitle"/>
    <!-- tab导航标签 -->
    <div ref='tab'></div>
    <van-tabs v-model="active" :sticky="isFixed" title-active-color="#FC3F78" title-inactive-color="#333" @scroll='top' @click="skp">
        <van-tab title="精选"></van-tab>
        <van-tab title="居家百货"></van-tab>
        <van-tab title="美食"></van-tab>
        <van-tab title="服装"></van-tab>
        <van-tab title="配饰"></van-tab>
        <van-tab title="美妆"></van-tab>
        <van-tab title="内衣"></van-tab>
        <van-tab title="母婴"></van-tab>
        <van-tab title="箱包"></van-tab>
        <van-tab title="数码配件"></van-tab>
        <van-tab title="文娱车品"></van-tab>
    </van-tabs>
    <Item :beauty='beauty' title='补水面膜' v-if='bool' :xb=0></Item>
    <Item :beauty='headest' title='潮牌耳机' v-if='bool' :xb=1></Item>
    <Item :beauty='bed' title='床上用品' v-if='bool' :xb=2></Item>
    <div style="height:5px"></div>

    <!-- 精选推荐 -->
    <Recommend :recommend='recommend[active].data.data'></Recommend>
  </div>

  
</template>

<script>
import NavBar from "../index/components/NavBar";
import title from "@/assets/js/title.js";
import UpperPart from '../index/components/UpperPart'
import Item from './components/Item'
import Recommend from './components/Recommend'
import beautys from '@/assets/js/beauty.js'
import headest from '@/assets/js/headset.js'
import bed from '@/assets/js/bed.js'
import recommend from '@/assets/js/recommend.js'
export default {
  data() {
    return {
      bools:true,
      isFixed:true,
      gettitle: {},
      active: 0,
      beauty:[], //补水面膜数据
      headest:[],  //潮牌耳机数据
      bed:[],  //床上用品数据
      recommend:[],  //精选推荐
    };
  },
  created() {
    this.gettitle = title;

    this.beauty=beautys.data.data.slice(0, 10)
    this.headest=headest.data.data.slice(0, 10)
    this.bed=bed.data.data.slice(0, 10)
    this.recommend=recommend
    // console.log(this.recommend)
  },
  methods: {
    top(a){
      this.bools=true
    },
    skp(){
      if(this.bools){
        let y=this.$refs.tab.offsetTop
        document.body.scrollTo(0,y-44)
        this.bools=false
      }
    }
  },
  components: {
    NavBar,
    UpperPart,
    Item,
    Recommend
  },
  computed: {
    bool(){
      if(this.active==0){
        return true
      }else{
        return false
      }
    }
    
  },
};
</script>

<style>
.free{
  background: #f5f5f5;
}
.van-nav-bar {
  background: linear-gradient(to left, #fa4dbe 0, #fbaa58 100%);
}
.van-nav-bar .van-icon {
  color: #fff !important;
  font-size: 28px;
}
.van-nav-bar img {
  vertical-align: middle;
}



</style>