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

let routes = [
    {
        path:'/',redirect:"/index"
    },
    {
        path:'/index',
        components:{
            'tab':Tabber,
            default:Index
        }
    },
    {
        path:'/freeShipping',
        components:{
            'tab':Tabber,
            default:FreeShipping
        }
    },
    {
        path:'/sort',
        components:{
            'tab':Tabber,
            default:Sort
        }
    },
    {
        path:'/collection',
        // component:Collection
        components:{
            'tab':Tabber,
            default:Collection
        }
    },
    {
        path:'/main',
        // component:Main
        components:{
            'tab':Tabber,
            default:Main
        }
    },
    {
        path:'/indexheaderlist',
        component:IndexHeaderList
    },
    {
        path:'/popularlist',
        component:PopularList
    },
    {
        path:'/indexheadershopinfo',
        component:IndexHeaderShopInfo
    }
]

const router = new VueRouter({
    routes
})

export default router;