<template>
    <div class="shop">
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

        <div class="layout " ui-collection data-open-url="/index.php?r=p/d">

        </div>
    </div>
</template>

<script>
export default {
    
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
</style>