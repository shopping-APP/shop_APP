import VueRouter from 'vue-router'

import Index from './view/index/index.vue'
import FreeShipping from './view/freeShipping/freeShipping.vue'
import Sort from './view/sort/sort.vue'
import Collection from './view/collection/collection.vue'
import Main from './view/main/main.vue'

let routes = [
    {
        path:'/',redirect:"/index/"
    },
    {
        path:'/index',
        component:Index
    },
    {
        path:'/freeShipping',
        component:FreeShipping
    },
    {
        path:'/sort',
        component:Sort
    },
    {
        path:'/collection',
        component:Collection
    },
    {
        path:'/main',
        component:Main
    },
]

const router = new VueRouter({
    routes
})

export default router;