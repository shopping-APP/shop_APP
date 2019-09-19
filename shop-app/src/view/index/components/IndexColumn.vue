<template>
    <!-- 栏目橱窗 -->
    <div id="columnapp">
        <!-- 咚咚抢左 -->
        <div class="columnddq">
            <div class="titleBox">
                <h3 class="columntitle">{{columntitle}}</h3>
                <p class="columntime">
                    <span>{{columndata.field}}</span>
                    <i :style="countdown()">{{countdowntime}}</i>
                </p>
            </div>
            <div class="ddqswiperBox">
                <!-- <swiper :options="swiperOption">
                    <swiper-slide class="ddqlist" v-for="(m,i) in columnleft" :key="i">
                        <img :src="m.pic" />
                        <p>
                            <span class="ddqprice">{{m.price}}</span>
                            <span class="ddqorginPrice">{{m.orginPrice}}</span>
                        </p>
                    </swiper-slide>
                </swiper> -->
                <swiper :options="swiperOption">
                    <swiper-slide class="ddqlist" v-for="(m,i) in columnleft" :key="i">
                        <img :src="m.pic" />
                        <p>
                            <span class="ddqprice">{{m.price}}</span>
                            <span class="ddqorginPrice">{{m.orginPrice}}</span>
                        </p>
                    </swiper-slide>
                </swiper>
            </div>
            
        </div>
        <!--咚咚抢右  -->
        <div class="columnimport">

        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            columntitle:'咚咚抢',
            columndata:[],
            columnleft:[],
            columnright:[],
            countdowntime:'',
            swiperOption: {
                slidesPerView: 3,
                slidesPerColumn: 2,
                spaceBetween: 30,
            }
        }
    },
    mounted(){
        var url = 'http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=10584&proModelId=20&source=3';
        axios.get(url)
        .then( res => {
            console.log("栏目橱窗时间:",res.data.data.countTime);
            console.log("栏目橱窗左:",res.data.data.ddqGoodsList);
            console.log("栏目橱窗右:",res.data.data.config);
            this.columndata = res.data.data.countTime;
            this.columnleft = res.data.data.ddqGoodsList;
            this.columnright = res.data.data.config;

        })
    },
    methods:{
        countdown () {
            // 目标日期时间戳
            const end = Date.parse(new Date('2019-9-20'))
            // 当前时间戳
            const now = Date.parse(new Date())
            // 相差的毫秒数
            const msec = end - now
            // 计算时分秒数
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)
            let min = parseInt(msec / 1000 / 60 % 60)
            let sec = parseInt(msec / 1000 % 60)
            // 个位数前补零
            hr = hr > 9 ? hr : '0' + hr
            min = min > 9 ? min : '0' + min
            sec = sec > 9 ? sec : '0' + sec
            // 控制台打印
            // console.log(`${hr}:${min}:${sec}`)
            this.countdowntime = (`${hr}:${min}:${sec}`)
            // 一秒后递归
            setTimeout(()=>{
                this.countdown();
            }, 1000)
        }
    }
}
</script>
<style scoped>
#columnapp{
    height: 265px;
    margin-top: 10px;
    background: #fff;
    padding: 0 0 0 10px;
    display: flex;
    justify-content: flex-start;
}
.columnddq{
    border-right: 1px solid #eee;
    width: 50%;
    height: 96%;
    padding-top: 3%;
}
.columnimport{
    width: 50%;
    height: 100%;
}
.titleBox{
    margin-bottom:5%;
    display: flex;
    align-items: center;
    height:10%;
}
.columntitle{
    font-size: 14px;
    margin: 0;
}
.columntime{
    width: 102px;
    border-radius: 8px;
    border:1px solid #ff9d98;
    margin-left:5px;
    text-align: left;
    box-sizing: border-box;
    line-height: 16px;
    font-size: 12px;
    height: 14px;
    line-height: 14px;
    position: relative;
}
.columntime>span{
    z-index: 1;
    position:absolute;
    text-align: center;
    zoom: 1;
    left: -1px;
    top: -2px;
    line-height: 16px;
    width: 46px;
    background: #f44;
    border-radius: 8px;
    font-size: 12px;
    display: inline-block;
    color: #fff;
}
.columntime>i{
    padding-left: 46px;
    color: #ff9d98;
}
.ddqswiperBox{
    height: 85%;
}
.ddqlist{
    margin-right: 9px;
    margin-bottom: 12px;
    width: 72px !important;
    /* float: left; */
    height: 97px;
}
.ddqlist>img{
    width: 100%;
}
</style>