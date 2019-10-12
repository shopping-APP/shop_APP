<template>
  <div class="IndexHeaderList">
      <!-- <router-view></router-view> -->
      <div class="IndexHeaderTitle">
        <a class="iconfont icon-youjiantou1" @click="history"></a>
        <h1>{{title}}</h1>
        <span class="iconfont icon-gengduoxiao"></span>
      </div>
      <div class="IndexHeaderList2">
        <van-tabs v-model="cid" sticky title-active-color="#FC3F78" title-inactive-color="#333">
          <van-tab title="精选"></van-tab>
          <van-tab :click="listClick(title)" v-for="(s,i) in IndexListData" :title="s.name" :key="i">
            <a></a>
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
            titleName:[],
            IndexListData:[],
            active:0
        }
    },
    mounted() {
      var cid = this.$route.query.idx
      console.log(cid);
      var title = this.$route.query.title
      this.cid = ++cid
      this.title = title
      console.log(this.cid)
    },
    methods: {
      history(){
        this.$router.go(-1);
      },
      listClick(title){
        // this.title = title
        console.log(title);
      }
    },
    created() {
       this.IndexListData = IndexListData.data
      //  this.titleName = IndexListData.data.data.name
       console.log(IndexListData.data)
    }
}
</script>

<style scoped>
.IndexHeaderList{
  width: 100%;
  height:100%;
  background:#fff;
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
</style>