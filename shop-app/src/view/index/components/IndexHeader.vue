<template>
    <div class='IndexHeader'>
        <!-- 头部表单 -->
        <div class="HeaderSearch">
            <i class="iconfont icon-suosou"></i>
            输入商品名或粘贴宝贝标题搜索
        </div>

        <!-- 头部列表 -->
        <div class="HeaderList">
            <p><span>精选</span></p>
            <div class="listbox">
                <ul class="list">
                    <li v-for="(l,i) in HeaderList" :key="i">{{l}}</li>
                </ul>
            </div>
            <p class="iconfont icon-san"></p>
        </div>
        <!-- 头部列表显示框 -->
        <div class="HeaderSort">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            HeaderList:[
                "美食","居家日用","女装","美妆","男装","数码家电","鞋品","文娱车品","家装家纺","配饰","箱包","母婴","内衣","户外运动"
            ]
        }
    }
}

</script>

<style scoped>
.IndexHeader{
    height:85px;
    overflow: hidden;
    background: #3e3a3a;
}
ul,li{
    margin: 0;
    padding:0;
    list-style:none;
}
.HeaderSearch{
    margin:8px 10px 4px;
    height: 32px;
    padding-left:12px;
    font-size:13px;
    color:#999;
    display: flex;
    align-items: center;
    background:#fff;
    border-radius: 20px;
}
.HeaderSearch>i{
    font-size: 18px;
    margin-right: 8px;
}
.HeaderList{
    border-bottom: 0.1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    height:40px;
    overflow:hidden;
    position: relative;
}
.HeaderList>p:nth-of-type(1)>span{
    border-bottom:1px solid #fff;
    padding-bottom: 10px;
}
.HeaderList>p{
    color:#fff;
    font-size: 13px;
    line-height:40px;
    display: inline-block;
    position:absolute;
}
.HeaderList>p:nth-of-type(1){
    width:50px;
    left:0;
}
.HeaderList>p:nth-of-type(2){
    width:40px;
    right:0;
}
.listbox{
    overflow-x: auto;
    height:40px;
    display: flex;
    margin:0 40px 0 50px;
}
.list{
    width:auto;
    white-space: nowrap;
    overflow-x:auto;
}
.list>li{
    color:rgba(255,255,255,.65);
    display:inline-block;
    line-height:40px;
    font-size: 13px;
    margin:0 10px;
}
</style>