<template>
    <div class="index">
        <IndexHeader-demo></IndexHeader-demo>
        <div class="HeaderMain">
            <!-- 首页头部颜色 -->
            <div class="HeaderBg"></div>
            <!-- 首页主体内容 -->
            <div class="HeaderContext">
                <!-- 轮播 -->
                <IndexSwiper-demo></IndexSwiper-demo>
                <!-- 首页活动 -->
                <IndexActivity-demo></IndexActivity-demo>
                <!-- 图标导航 -->
                <IndexNav-demo></IndexNav-demo>
                <!-- 优惠头条 -->
                <IndexHeadlines-demo></IndexHeadlines-demo>
                <!-- 栏目橱窗 -->

                <!-- 品牌特卖 -->

                <!-- 大家都在领 -->

                <!-- 发现好货 -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

import IndexHeader from './components/IndexHeader';
import IndexSwiper from './components/IndexSwiper';
import IndexNav from './components/IndexNav';
import IndexHeadlines from './components/IndexHeadlines';
import IndexActivity from './components/IndexActivity'

export default {
    data(){
        return {
            
        }
    },
    components:{
        "IndexHeader-demo":IndexHeader,
        "IndexSwiper-demo":IndexSwiper,
        "IndexNav-demo":IndexNav,
        "IndexHeadlines-demo":IndexHeadlines,
        "IndexActivity-demo":IndexActivity
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=-1&proModelId=1&source=3&userId=567003&tuserId=567003';
        axios.get(url)
        .then(res=>{
            // console.log(res.data.data.config);
        })
    }
}
</script>

<style scoped>
.HeaderBg{
    height:137px;
    background:#bb5c3e;
}
.HeaderContext{
    position: relative;
    top:-125px;
    padding: 0 10px;
}
</style>