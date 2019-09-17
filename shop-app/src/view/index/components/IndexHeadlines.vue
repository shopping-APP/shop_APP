<template>
    <div id="IndexHeadlines">
        <div class="IndexHeadlinesLogo">
            <img :src="IndexHeadlines.logo" alt="">
        </div>
        <div class="IndexHeadlinesList">
            <p v-for="(s,i) in IndexHeadlines.list" :key="i">
                <span>{{s.tag}}</span>
                <span>{{s.name}}</span>
                <i></i>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            IndexHeadlines:[]
        }
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=10514&proModelId=13&source=3';
        axios.get(url)
        .then(( res ) => {
            console.log('优惠头条',res.data.data.config);
            this.IndexHeadlines = res.data.data.config;
        })
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
    margin: 0 5%;
}
.IndexHeadlinesLogo>img{
    width: 100%;
    height:100%;
    display: inline-block;
}
.IndexHeadlinesList{
    width: 70%;
    height: 20px;
    overflow: hidden;
}
.IndexHeadlinesList>p{
    display: flex;
    align-items: center;
    height:14px;
    font-size: 12px;
}
.IndexHeadlinesList>p>span:nth-of-type(1){
    display: inline-block;
    min-width: .48rem;
    padding: 0 .05rem;
    height: .14rem;
    background: linear-gradient(90deg,#ff9676 0,#ff7913 100%);
    border-radius: .07rem;
    font-size: .1rem;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: #fff;
    line-height: .14rem;
    margin-right: .08rem;
}
</style>