<template>
  <div>
      <div class="IndexHeaderTitle">
        <a class="iconfont icon-youjiantou1" @click="history"></a>
        <h1>{{Title}}</h1>
        <span class="iconfont icon-gengduoxiao"></span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Title:''
        }
    },
    created() {
        // 传过来的路径和名字
        var Title = this.$route.query.Title
        this.Title = Title
    },
    methods: {
        history(){
            this.$router.go(-1);
        }
    },
}
</script>

<style scoped>
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

</style>