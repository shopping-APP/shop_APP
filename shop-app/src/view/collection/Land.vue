<template>
  <div>
    <div class="header_pr  header_red">
            <header class="icon_header">
                <a class="iconfont icon-zuojiantou" ui-back  href="/index.php?r=user/index"></a>
                <div>
                    我的收藏
                </div>
                <!-- <a class="text-a user_coll_edit_switch" >编辑</a> -->
            </header>
        </div>
        <div class="header_bg"></div>
        <div class="layout">
            <div class="user_coll_def">
                <p class="img"></p>
                <div class="text">
                    登录后添加收藏
                    <p class="msg">收藏云端同步，不错过任何优惠哦</p>
                </div>

                <div class="but">
                    <a class="btn btn-secondary btn-max" @click='change'>登录/注册</a>
                </div>
            </div>            
        </div>

  </div>
</template>

<script>
export default {
    methods: {
        change(){
            this.$emit('bool')
        }
    },
}
</script>

<style scoped>
 .header_pr:nth-child(2) {
    z-index: 155;
    }
    .header_red {
    background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
    border-bottom-color: transparent;
}
    .icon_header {
    width: 100%;
    height: 45px;
    line-height: 45px;
    position: relative;
    z-index: 5;
    zoom: 1;
    }
    .header_red .icon_header>a, .header_red .icon_header>a:nth-child(3).text-a, .header_red .icon_header>div {
    color: #fff;
    }
 .ui_bot_tab~.layout {
    padding-bottom: 44px;
    display: block;
    }
    .layout {
    max-width: 750px;
    text-align: left;
    margin: auto;
    overflow: hidden;
    }



    .user_coll_def {
    text-align: center;
    height: 100vh;
    background-color: #fff;
    }
    .layout .user_coll_def .img {
    background: url('https://cmsstatic.ffquan.cn/wap_new/user/images/user_sc.svg?v=2019-10-08') center bottom no-repeat;
    width: 100%;
    height: 35vh;
    margin-bottom: 3rem;
    }
    .user_coll_def .text {
    font-size: 1rem;
    line-height: 2.5rem;
    padding-bottom: 1rem;
    }
    .user_coll_def .text .msg {
    color: #999;
    }
    .user_coll_def .but a.btn {
        border-radius: 5rem;
        padding: .6rem 4rem;
        box-shadow: 0 2px 6px 0 rgba(255,135,135,.5);
        background: linear-gradient(to left,#FF5E90 0,#FF927C 100%);
    }
    .btn.btn-max {
    font-size: 1.14rem;
    }
    .btn.btn-secondary {
    color: #fff;
    border: 1px solid transparent;
    /* padding: .36rem .85rem; */
    /* background: #FC3F78; */
    }
</style>