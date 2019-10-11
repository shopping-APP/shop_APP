import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        swiperImg:[]
    },

    actions: {
        IndexHeader(state){
            axios.get('http://cmsjapi.dataoke.com/api/category/product/model-detail-by-model-id-new?entityId=3&modelId=-1&proModelId=1&source=3&version=v1&tuserId=567003&userId=567003')
            .then(res=>{
                state.swiperImg(res)
            })
        }
    }
})
export default store;