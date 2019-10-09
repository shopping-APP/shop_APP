<template>
    <div id="navapp">
        <ul class="IndexNav">
            <li class="IndexLis" v-for='(n,i) in nav' :key="i">
                <img :src="n.address" alt="">
                <p>{{n.name}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            nav:[]
        }
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=11418&proModelId=2&source=3&version=v1';
        axios.get(url)
        .then( res => {
            // console.log('图标导航列表',res.data.data.config.data);
            this.nav = res.data.data.config.data
        })
    }
}
</script>
<style scoped>
ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
}
.IndexNav{
    background: #fff;
    border-radius: 5px 5px 0 0;
    margin-top: 10px;
    padding: 17px 6px 13px;
    display: flex;
    justify-content: space-between;
}
.IndexLis{
    flex: 1;
}
.IndexLis>img{
    width: 48px;
    height:48px;
    display: inline-block;
}
.IndexLis>p{
    font-size: 12px;
}
</style>