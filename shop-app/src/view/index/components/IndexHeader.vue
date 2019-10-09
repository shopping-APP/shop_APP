<template>
    <div class='IndexHeader'>
        <!-- 头部表单 -->
        <div class="IndexHeaderBox">
            <div class="HeaderSearch">
                <i class="iconfont icon-suosou"></i>
                输入商品名或粘贴宝贝标题搜索
            </div>
            <p class="HeaderInfo">
                <span class="iconfont icon-xinxi1"></span>
                <span class="HeaderInfoTitle">{{info}}</span>
            </p>
        </div>
        
        <!-- 头部列表 -->
        <div class="HeaderList">
            <p><span>精选</span></p>
            <div class="listbox">
                <ul class="list">
                    <li v-for="(l,i) in HeaderList" :key="i">{{l.name}}</li>
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
import axios from 'axios'
export default {
    data(){
        return {
            HeaderList:[],
            info:'信息'
        }
    },
    mounted() {
        axios.get('http://cmsjapi.dataoke.com/api/category/get-category-list')
        .then(res=>{
            console.log('头部列表',res.data.data);
            this.HeaderList = res.data.data;
        })
    },
}

</script>

<style scoped>
.IndexHeader{
    height:85px;
    overflow: hidden;
    background: #3e3a3a;
}
::-webkit-scrollbar{display:none}
ul,li{
    margin: 0;
    padding:0;
    list-style:none;
}
.IndexHeaderBox{
    display: flex;
    align-items: center;
    overflow: hidden;
}
.HeaderSearch{
    width: 80%;
    float: left;
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
.HeaderInfo{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 10%;
    height: 100%;
    float: left;
    color:#fff;
}
.HeaderInfo>.iconfont{
    width: 21px;
    height: 21px;
    display: block;
}
.HeaderInfoTitle{
    font-size:12px;
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