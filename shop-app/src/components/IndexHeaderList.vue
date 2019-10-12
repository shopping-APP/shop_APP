<template>
  <div class="IndexHeaderList">
      <!-- <router-view></router-view> -->
      <div class="IndexHeaderTitle">
        <a class="iconfont icon-youjiantou1" @click="history"></a>
        <h1>{{title}}</h1>
        <span class="iconfont icon-gengduoxiao"></span>
      </div>
      <div class="IndexHeaderList2">
        <van-tabs 
          @click="listClick"
          v-model="cid" 
          sticky 
          title-active-color="#FC3F78"
          title-inactive-color="#333"
        >
          <van-tab title="精选"></van-tab>
          <van-tab v-for="(s,i) in IndexListData" :title="s.name" :key="i">
              <ul class="IndexListDataUls">
                <li class="IndexListDataInfoBox" v-for="(m,idx) in IndexListDataInfo" :key="idx">
                    <a @click="Jump(m.jump_url,m.name)">
                      <img :src="m.icon">
                      <span>{{m.name}}</span>
                    </a>
                </li>
              </ul>
          </van-tab>
        </van-tabs>
      </div>
      
  </div>
</template>

<script>
import IndexListData from '@/assets/js/indexlistdata'
export default {
    data() {
        return {
            cid:0,
            title:'',
            IndexListDataInfo:[],
            IndexListData:[],//数据
            active:0
        }
    },
    mounted() {
      var cid = this.$route.query.idx
      // 接收到传过来的下标
      // console.log(cid);
      var title = this.$route.query.title
      this.cid = ++cid
      this.title = title
      // 当前页面实际下标
      // console.log(this.cid)
      // 点击列表的显示页面
      this.IndexListDataInfo = this.IndexListData[this.cid].sub_class
    },
    methods: {
      history(){
        this.$router.go(-1);
      },
      listClick(a,b){
        if(a>=1){
          // 切换页面名字
          this.title = b;
          // 实际切换页面显示
          this.IndexListDataInfo = this.IndexListData[a-1].sub_class
          // console.log(this.IndexListDataInfo);
        }else{
          this.$router.go(-1);
        }
      },
      Jump(jump,Name){
        this.$router.push({path:'/indexheadershopinfo',query:{Url:jump,Title:Name}})
        console.log(jump);
        console.log(Name);
      }
    },
    created() {
       this.IndexListData = IndexListData.data
    }
}
</script>

<style scoped>
.IndexHeaderList{
  width: 100%;
  height:100%;
  background:#f6f6f6;
}
.IndexHeaderTitle{
  position: fixed;
  background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
  top: 0;
  left: 0;
  width: 100%;
  z-index: 120;
  box-sizing: border-box;
  height: 44px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
}
.IndexHeaderTitle>h1{
  font-size: 17px;
}
.IndexHeaderTitle>a{
  color: #fff;
}
.IndexHeaderList2{
  margin-top:44px;
  /* position: fixed; */
  /* top: 44px; */
  /* left:0; */
}
.van-tabs__content{
  margin-bottom: 10px;
}
.IndexListDataUls{
  background: #fff;
  display: flex;
  padding: 10px 0;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.IndexListDataInfoBox{
  width: 25%;
  padding-top: 10px;
}
.IndexListDataInfoBox>a{
  display: flex;
  flex-direction: column;
}
.IndexListDataInfoBox>a>img{
  width: 60%;
  margin: auto;
}
.IndexListDataInfoBox>a>span{
  font-size: 12px;
  color: #333;
  line-height: 30px;
  display: block;
}
</style>