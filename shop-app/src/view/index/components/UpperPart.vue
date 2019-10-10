<template>
  <ul>
      <li>
        <van-grid :column-num="1">
          <van-grid-item v-for="(item,index) in gettitle.left" :key='index'>
              <img :src="item.img">
              <div class="explain">
                  <h3 :style="'color:'+item.color">{{item.title}}</h3>
                  <p>{{item.remsrks}}</p>
              </div>
          </van-grid-item>
        </van-grid>
      </li>
      <li>
        <van-grid :column-num="2">
          <van-grid-item v-for="(item,index) in gettitle.right" :key='index'>
              <img :src="item.img">
              <div class="explain">
                  <h3 :style="'color:'+item.color">{{item.title}}</h3>
                  <p>{{item.remsrks}}</p>
              </div>
          </van-grid-item>
        </van-grid>
      </li>
    </ul>
</template>

<script>
export default {
    props:['gettitle']
}
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
}
ul li {
  width: 50%;
}
ul li img{
    max-width: 100%;
}
ul li .explain{
    position: absolute;
    left: 0;
    top:0;
    padding-left: 10px;
}
ul li .explain h3{
    padding: 5px 0 3px 0;
    line-height: 23px;
    font-size: 15px;
    font-weight: 400;
}
ul li .explain p{
    text-align: left;
    color: #888;
    font-size: 12px;
    line-height: 18px;
}
</style>