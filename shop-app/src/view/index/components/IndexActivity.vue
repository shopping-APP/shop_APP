<template>
    <div id="IndexActivity">
        <div class="activityImgBox" v-for="(m,i) in activity" :key="i">
            <img class="activityImg" :src="m.address"/>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            activity:[]
        }
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=10512&proModelId=19&source=3';
        axios.get(url)
        .then(( res ) => {
            // console.log("限时活动:",res.data.data);
            // console.log("限时活动:",res.data.data.config);
            this.activity = res.data.data.config;
        })
    }
}
</script>
<style scoped>
#IndexActivity{
    margin-top: 10px;
    /* height: 96px; */
    overflow: hidden;
    border-radius: 5px;
}
.activityImgBox:nth-of-type(2){
    width: 48%;
    float: left;
}
.activityImgBox:nth-of-type(3){
    width: 48%;
    float: right;
}
.activityImg{
    width: 100%;
    display: inline-block;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>