import VueRouter from 'vue-router'
//Tabber标签
import Tabber from '@/components/listTabber'
// Tabber组件列表
import Index from './view/index/index.vue'
import FreeShipping from './view/freeShipping/freeShipping.vue'
import Sort from './view/sort/sort.vue'
import Collection from './view/collection/collection.vue'
import Main from './view/main/main.vue'
// 公用页面
import PopularList from './view/PopularList/PopularList.vue'
import IndexHeaderList from './components/IndexHeaderList.vue'
import IndexHeaderShopInfo from './components/IndexHeaderShopInfo.vue'
import IndexHeaderShopInfoChild from './components/IndexHeaderShopInfoChild.vue'

let routes = [
    {
        path:'/',redirect:"/index"
    },
    // 首页
    {
        path:'/index',
        components:{
            'tab':Tabber,
            default:Index
        }
    },
    // 9.9包邮
    {
        path:'/freeShipping',
        components:{
            'tab':Tabber,
            default:FreeShipping
        }
    },
    // 分类
    {
        path:'/sort',
        components:{
            'tab':Tabber,
            default:Sort
        }
    },
    // 收藏
    {
        path:'/collection',
        // component:Collection
        components:{
            'tab':Tabber,
            default:Collection
        }
    },
    // 我的
    {
        path:'/main',
        // component:Main
        components:{
            'tab':Tabber,
            default:Main
        }
    },
    // 首页头部列表页
    {
        path:'/indexheaderlist',
        component:IndexHeaderList
    },
    {
        path:'/popularlist',
        component:PopularList
    },
    // 首页头部列表详情页
    {
        path:'/indexheadershopinfo',
        component:IndexHeaderShopInfo,
        children:[
            {
                path:'/indexheadershopinfo',
                component:IndexHeaderShopInfoChild
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router;