<template>
  <div id="app">
    <div class="list-tabber">
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index/index'
import FreeShipping from '@/pages/freeShipping/freeShipping'
import Collection from '@/pages/collection/collection'
import Main from '@/pages/main/main'
import Sort from '@/pages/sort/sort'

export default {
  name: 'app',
  components: {
    Index,
    FreeShipping,
    Collection,
    Main,
    Sort
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,body{
  margin:0;
  padding: 0;
}
</style>
