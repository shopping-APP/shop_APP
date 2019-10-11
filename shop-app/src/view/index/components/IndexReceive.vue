<template>
  <div class="IndexReceive">
      <div class="IndexReceiveTitle">
            <h3>{{IndexReceiveTitle}}</h3>
            <p>
                <span v-show="bool">+{{IndexReceiveAdd}}</span>
                <span>{{nowNum}}</span>
                {{IndexReceiveTitle2}}
            </p>
      </div>
      <!-- 没数据 -->
      <!-- <div class="IndexReceiveInfo"></div> -->
      <div class="IndexReceiveShop">
            <swiper :options="swiperOption" v-if="IndexReceive.length>1">
                <swiper-slide v-for="(s,i) in IndexReceive" :key='i'>
                    <div class="IndexReceiveShopBox">
                        <a>
                            <div class="IndexReceiveImgBox">
                                <img :src="s.pic">
                            </div>
                            <h3 class="IndexReceiveShopName">{{s.dtitle}}</h3>
                            <h6 class="IndexReceiveShopPrice">
                                <span>￥{{s.price}}</span>
                                <span>{{s.couponPrice}}元整</span>
                            </h6>
                            <p class="IndexReceiveShopInfo">{{info}}</p>
                        </a>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            IndexReceiveTitle:'大家都在领',
            IndexReceiveTitle2:'今日实时领券',
            info:'即将领完',
            IndexReceive:[],
            IndexReceiveAdd:'',
            nowNum:'',
            preNum:'',
            bool:false,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 3,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay:{
                    delay: 2500,
                    disableOnInteraction: false
                }
            }
        }
    },
    mounted() {
        this.axios.get('http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=11423&proModelId=16&source=3&version=v1')
        .then(res=>{
            console.log('大家都在领',res.data.data);
            // console.log('大家都在领',res.data.data.config.total_quan_over.now_num);
            // console.log('大家都在领',res.data.data.config.total_quan_over.pre_num);
            this.IndexReceive = res.data.data.config.list;
            this.nowNum = res.data.data.config.total_quan_over.now_num;
            this.preNum = res.data.data.config.total_quan_over.pre_num;
        })
    },
    computed: {
        add(){
            this.bool = true;
            return this.IndexReceiveAdd = parseInt(this.nowNum - this.preNum);
            this.bool = false;
        }
    },
    // watch: {
        
    // },
}
</script>

<style scoped>
.IndexReceive{
    background: #fff;
    border-radius: 5px;
    margin-top: 10px;
    padding: 12px 0 0;
}
.IndexReceiveTitle{
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.IndexReceiveTitle>h3{
    font-size: 15px;
    color: #333;
    margin-right: 5px;
    line-height: 21px;
}
.IndexReceiveTitle>p{
    font-size: 12px;
    margin-right:15px;
}
.IndexReceiveTitle>p>span{
    margin-right: 5px;
    color: #f9635d;
    font-size: 14px;
    font-weight: 400;
}
.IndexReceiveShopBox{
    font-size: 12px;
    width: 100px;
    height: 167px;
    padding-top: 8px;
    overflow: hidden;
}
.swiper-slide{
    width: 97px!important;
    margin-right: 26px!important;
}
.IndexReceiveImgBox{
    width: 100px;
    height: 100px;
}
.IndexReceiveImgBox>img{
    width: 100%;
}
.swiper-pagination{
    bottom: 0!important;
}
.swiper-pagination>span{
    width: 22%!important;
    height: 3px!important;
    background: #d8d8d8;
}
.swiper-pagination>.swiper-pagination-bullet-active{
    background: #fe3a33;
}
.IndexReceiveShopName{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
    margin-bottom: 5px;
}
.IndexReceiveShopPrice{
    margin: 0;
    font-size: 12px;
}
.IndexReceiveShopPrice>span{
    color: #fe3a33;
}
.IndexReceiveShopPrice>span:nth-of-type(2){
    margin-left: 5px;
    background:#fe3a33;
    color: #fff;
    padding: 0 4px;
}
.IndexReceiveShopInfo{
    font-size: 12px;
    color: #fe3a33;
}
</style>