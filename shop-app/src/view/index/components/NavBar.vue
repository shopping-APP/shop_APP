<template>
  <div class="navbar">
      <van-nav-bar left-arrow :fixed=true :border=false>
        <slot slot="left"  name="left"></slot>
        <slot slot="title" name="title"></slot>
        <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  methods: {
    scroll(){
      console.log(1)
    }
  },
}
</script>

<style scoped>
.navbar{
  padding-top: 46px;
}
.van-nav-bar{
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
        z-index: 9999!important;
}
.van-nav-bar .van-icon{
    color:#fff;
    font-size: 28px;
}
.van-nav-bar img{
    vertical-align: middle;
}
</style>