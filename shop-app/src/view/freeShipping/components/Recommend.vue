<template>
  <div>
      <h3>
          <img src="@/assets/img/两个点右.png">
          <span>精选推荐</span>
          <img src="@/assets/img/两个点左.png">
     </h3>
     <ul>
       <li v-for="(item,index) in recommend" :key="index">
          <img v-lazy="item.pic" attempt=10>
         <div class="bottom">
           <h3>{{item.d_title}}</h3>
          <div>
            <li class="num1">天猫价 ¥{{item.yuanjia}}</li>
            <li class="num">已售<span>{{item.xiaoliang | simplify}}</span>件</li>
          </div>
          <div>
            <li>券后价 ¥<span>{{(item.yuanjia-item.quan_jine) | simplify2}}</span></li>
            <li>
              <i class="iconfont">&#xe604;</i>
              <p>{{item.quan_jine}}元券</p>
            </li>
          </div>
         </div>
       </li>
     </ul>
     
  </div>
</template>

<script>
export default {
  props:['recommend'],
  filters:{
    'simplify':function(value){
      return (value/10000).toFixed(2)+'万'
    },
    'simplify2':function(value){
      return value.toFixed(1)
    },
  }

}
</script>

<style scoped>
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
    width:25px;
    vertical-align: middle;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
    }
  ul>li{
    width: 50%;
  }
ul>li:nth-of-type(2n+1){
  box-sizing: border-box;
  padding: 0 2.5px 5px 0;
}
ul>li:nth-of-type(2n){
  box-sizing: border-box;
  padding: 0 0 5px 2.5px;
}
ul>li>img{
  max-width: 100%;
  vertical-align: top;
}
ul>li>.bottom{
    padding: 0 10px 13px 10px;
    background: #fff;
}
ul>li>.bottom>h3{
  height: 30px;
    line-height: 30px;
    font-size: 14px;
    overflow: hidden;
    font-weight: 400;
    margin: 0;
    color: #333;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
ul>li>.bottom>div:nth-of-type(1){
  display: flex;
  font-size: 12px;
    color: #888;
    padding: 5px 0 10px;
    flex-wrap: wrap;
}
ul>li>.bottom>div>li{
  width: 50%;
  text-align: left;
}
ul>li>.bottom>div>li:nth-of-type(2){
  text-align: right;
}
ul>li>.bottom>div>li.num{
  text-align: left;
  width: 53%;
}
ul>li>.bottom>div>li.num1{
  width: 47%;
}
ul>li>.bottom>div>li span{
      color: #FF2B22;
}
ul>li>.bottom>div:nth-of-type(2){
  display: flex;
}
ul>li>.bottom>div:nth-of-type(2) li{
    white-space: nowrap;
    position: relative;
    top: 2px;
    line-height: 22px;
    height: 22px;
    color: #FF2B22;
    font-size: 12px;
}
ul>li>.bottom>div:nth-of-type(2) li span{
  font-size: 18px;
}
.iconfont{
  font-size: 52px;
}
ul>li>.bottom>div:nth-of-type(2) li p{
      position: absolute;
    top: 50%;
    right: 13%;
    transform: translate(0,-50%);
}
@font-face {
  font-family: 'iconfont';  /* project id 1451674 */
  src: url('//at.alicdn.com/t/font_1451674_yonfhufofq.eot');
  src: url('//at.alicdn.com/t/font_1451674_yonfhufofq.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1451674_yonfhufofq.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1451674_yonfhufofq.woff') format('woff'),
  url('//at.alicdn.com/t/font_1451674_yonfhufofq.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1451674_yonfhufofq.svg#iconfont') format('svg');
}
</style>