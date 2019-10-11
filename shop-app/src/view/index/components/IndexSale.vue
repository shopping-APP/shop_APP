<template>
    <div class="IndexSale">
        <div class="IndexSaleTitleBox">
            <h1>
                {{IndexSaleTitle}}
                <span>{{IndexSale.brandNum}}+品牌</span>
            </h1>
            <a>更多品牌<i class="iconfont icon-zuoyoujiantou-copy"></i></a>
        </div>
        <ul class="IndexSaleImgBox">
            <li v-for="(m,i) in IndexSale.config" :key="i">
                <img class="IndexSaleImg" :src="m.address">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            IndexSaleTitle:'品牌特卖',
            IndexSale:[],
        }
    },
    mounted() {
        this.axios.get('http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=11422&proModelId=21&source=3&version=v1')
        .then(res=>{
            // console.log('品牌特卖',res.data.data);
            this.IndexSale = res.data.data
        })
    },
}
</script>

<style scoped>
.IndexSale{
    border-radius: 5px;
    padding: 12px 12px 0;
    height: 303px;
    background: #fff;
    margin-top: 10px;
}
.IndexSaleTitleBox{
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.IndexSaleTitleBox>h1{
    height: 21px;
    display: flex;
    align-items: center;
    margin: 0;
    font-size: 15px;
}
.IndexSaleTitleBox>h1>span{
    margin-left: 5px;
    font-size: 12px;
    border-radius: 7px 0;
    color: #ffb91d;
    padding: 0 4px;
    background: linear-gradient(168deg,#4d4d4d 0,#202020 100%);
}
.IndexSaleTitleBox>a{
    height: 17px;
    color: #333;
    font-size: 12px;
}
.IndexSaleTitleBox>a>i{
    font-size: 13px;
    margin-left: 10px;
}
.IndexSaleImgBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.IndexSaleImgBox>li{
    width: 75px;
    height: 120px;
    background: linear-gradient(180deg,#fff 0,#f3e5e9 100%);
    border-radius: 4px;
    margin-top: 10px;
    overflow: hidden;
}
.IndexSaleImgBox>li>img{
    width: 100%;
}
</style>