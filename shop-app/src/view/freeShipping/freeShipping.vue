<template>
  <div>
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
    <van-tabs v-model="active" sticky title-active-color="#FC3F78" title-inactive-color="#333">
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
  </div>

  
</template>

<script>
import NavBar from "../index/components/NavBar";
import title from "@/assets/js/title.js";
import UpperPart from '../index/components/UpperPart'
export default {
  data() {
    return {
      gettitle: {},
      active: 0
    };
  },
  created() {
    this.gettitle = title;
    console.log(this.gettitle);
  },
  methods: {},
  components: {
    NavBar,
    UpperPart
  }
};
</script>

<style scoped>
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


.van-ellipsis{
    font-weight: 600;
    font-size: 14px;
}
</style>