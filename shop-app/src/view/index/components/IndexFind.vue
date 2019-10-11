<template>
    <div class="IndexFind">
        <p class="IndexFindTitle">{{IndexFindTitle}}</p>
        <ul class="IndexFindBox">
            <li v-for="(m,i) in IndexFind" :key="i">
                <a>
                    <div class="IndexFindImgBox">
                        <img :src="m.pic">
                    </div>
                    <p class="IndexFindInfo">{{m.dtitle}}</p>
                    <p class="IndexFindZk">{{m.quanJine}}元卷</p>
                    <p class="fashionTag" v-if="m.fashionTag">{{m.fashionTag}}</p>
                    <p class="IndexFindPrice">卷后 ￥ 
                        <span>{{(m.yuanjia - m.quanJine).toFixed(2)}}</span>
                    </p>
                    <div class="IndexFindTotal">
                        <span>天猫 ￥{{m.yuanjia}}</span>
                        <span>已售{{(m.xiaoliang/10000).toFixed(2)}}万</span>
                    </div> 
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            IndexFindTitle:'发现好货',
            IndexFind:[],
        }
    },
    mounted(){
        this.axios.get('http://cmsjapi.dataoke.com/api/category/index/lingquan-live-new?pageId=1&pageSize=10&entityId=3&type=1&version=v1&tuserId=567003')
        .then((res) => {
            console.log(res.data);
            console.log(res.data.data.list);
            this.IndexFind = res.data.data.list
        })

    },
}
</script>

<style>
.IndexFindTitle{
    margin:10px auto 0;
    width:107px;
    height:21px;
    line-height:21px;
    font-size:15px;
}
.IndexFindBox{
    display: flex;
    flex-wrap: wrap;
}
.IndexFindBox>li{
    width: 48%;
    background:#fff;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 10px;
    text-align: left;
    font-size: 12px;
}
.IndexFindBox>li:nth-of-type(odd){
    margin-right: 10px;
}
.IndexFindImgBox{
    width: 100%;
}
.IndexFindImgBox>img{
    width: 100%;
}
.IndexFindInfo{
    font-size: 12px;
    color: #333;
    margin: 8px;
    text-align: left;
}
.IndexFindZk{
    border: 0;
    background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
    line-height: 18px;
    border-radius: 3px;
    padding: 0 4px;
    margin: 0 5px 5px 0;
    color: #fff;
    font-size: 12px;
    text-align: center;
    display: inline-block;
    margin-left: 8px;
}
.fashionTag{
    display: inline-block;
    line-height: 18px;
    border-radius: 3px;
    border: 1px solid #ff9793;
    padding: 0 4px;
    margin: 0 5px 5px 0;
    color: #ff3b32;
}
.IndexFindPrice{
    margin-left: 8px;
    color: #ff3b32;
}
.IndexFindPrice>span{
    font-size:18px;
}
.IndexFindTotal{
    margin-left: 8px;
    display:flex;
    justify-content: space-between;
    margin: 5px 8px 8px;
    color: #999;
    line-height: 14px;
}
</style>