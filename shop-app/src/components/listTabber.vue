<template>
<!-- Tabber组件 -->
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
</template>

<script>
export default {

}
</script>

<style>

</style>