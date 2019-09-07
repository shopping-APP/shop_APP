<template>
    <div class='IndexHeader'>
        <div class="HeaderSearch">
            <i class="iconfont icon-sousuo"></i>
            输入商品名或粘贴宝贝标题搜索
        </div>
        <div class="HeaderList">
            <span>精选</span>
            <!-- <div class="listbox">
                <ul class="list">
                    <li v-for="(l,i) in HeaderList" :key="i">{{l}}</li>
                </ul>
            </div> -->
            <!-- <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(l,i) in HeaderList" :key='i'>{{l}}}</div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <span class='iconfont icon-xianshi'></span> -->
        </div>
    </div>
</template>

<script>
// import Swiper from 'vue-awesome-swiper'
export default {
    data(){
        return {
            HeaderList:[
                "美食","居家日用","女装","美妆","男装","数码家电","鞋品","文娱车品","家装家纺","配饰","箱包","母婴","内衣","户外运动"
            ]
        }
    }
}
// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     },
// });
</script>

<style scoped>
.IndexHeader{
    height:85px;
}
ul,li{
    margin: 0;
    padding:0;
    list-style:none;
}
.HeaderSearch{
    margin:8px 10px 4px;
    height: 32px;
    padding-left:12px;
    font-size:13px;
    color:#999;
    display: flex;
    align-items: center;
    background:pink;
    border-radius: 20px;
}
.HeaderList{
    display: flex;
    align-items: center;
    justify-content: center;
    height:40px;
    overflow:hidden;
    position: relative;
}
.HeaderList>span{
    line-height:40px;
    display: inline-block;
    position:absolute;
}
.HeaderList>span:nth-of-type(1){
    width:50px;
    left:0;
}
.HeaderList>span:nth-of-type(2){
    width:40px;
    right:0;
}
.listbox{
    height:40px;
    display: flex;
    margin:0 40px 0 50px;
}
.list>li{
    float: left;
}
html, body {
position: relative;
height: 100%;
}
body {
background: #eee;
font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
font-size: 14px;
color:#000;
margin: 0;
padding: 0;
}
.swiper-container {
width: 100%;
height: 100%;
}
.swiper-slide {
text-align: center;
font-size: 18px;
background: #fff;

/* Center slide text vertically */
display: -webkit-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
-webkit-align-items: center;
align-items: center;
}
</style>