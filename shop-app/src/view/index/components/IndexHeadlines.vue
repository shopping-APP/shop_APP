<template>
    <div id="IndexHeadlines">
        <div class="IndexHeadlinesLogo">
            <img :src="IndexHeadlinesLogo" alt="">
        </div>
        <div class="IndexHeadlinesList">
            <!-- <p :style="starttimer()" v-for="(s,i) in IndexHeadlines.list" :key="i">
                <span>{{s.tag}}</span>
                <span>{{s.name}}</span>
                <i class="iconfont icon-zuoyoujiantou-copy"></i>
            </p> -->
             <!-- swiper -->
            <swiper class="HeadlinesListBox" :options="swiperOption"  v-if="IndexHeadlines.length>0">
                <swiper-slide class="swiper-slide" v-for="(s,i) in IndexHeadlines" :key="i">
                    <span class="HeadlinesListTag">{{s.tag}}</span>
                    <span class="HeadlinesListName">{{s.name}}</span>
                    <i class="HeadlinesListIcon iconfont icon-zuoyoujiantou-copy"></i>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            IndexHeadlinesLogo:'',
            IndexHeadlines:[],
            list:[],
            number:-1,
            swiperOption: {
                direction: 'vertical',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                loop:true,
                speed:2000
            }
        }
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=10514&proModelId=13&source=3';
        axios.get(url)
        .then(( res ) => {
            // console.log('优惠头条',res.data.data.config);
            this.IndexHeadlinesLogo = res.data.data.config.logo;
            this.IndexHeadlines = res.data.data.config.list;
        })
    },
    methods:{
        
    }
}
</script>
<style scoped>
#IndexHeadlines{
    border-top: 2px solid #f5f5f5;
    height: 40px;
    width: 100%;
    background: #fff;
    display: flex;
    align-items: center;
}
.IndexHeadlinesLogo{
    width: 20%;
    height: 14px;
    margin: 0 2.5%;
}
.IndexHeadlinesLogo>img{
    width: 100%;
    height:100%;
    display: inline-block;
}
.IndexHeadlinesList{
    width: 75%;
    height: 20px;
    overflow: hidden;
}
.HeadlinesListBox{
    width: 100%;
    height: 20px;
    overflow: hidden;
}
.HeadlinesListBox>.swiper-slide{
    transition: all 3s;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    height:20px;
    font-size: 12px;
    justify-content:space-between;
}
.HeadlinesListIcon{
    font-size: 13px;
    margin-top:3px;
}
.HeadlinesListTag{
    display: inline-block;
    min-width: 48px;
    padding:0 5px;
    height: 14px;
    background: linear-gradient(90deg,#ff9676 0,#ff7913 100%);
    border-radius: 7px;
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    line-height: 14px;
    margin-right: 5px;
}
.HeadlinesListName{
    height: 14px;
    overflow: hidden;
    line-height: 14px;
    font-size: 12px;
}

</style>