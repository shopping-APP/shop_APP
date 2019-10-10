<template>
  <div>
      <van-nav-bar left-arrow>
        <slot slot="left"  name="left"></slot>
        <slot slot="title" name="title"></slot>
        <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.van-nav-bar{
        background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
}
.van-nav-bar .van-icon{
    color:#fff;
    font-size: 28px;
}
.van-nav-bar img{
    vertical-align: middle;
}
</style>