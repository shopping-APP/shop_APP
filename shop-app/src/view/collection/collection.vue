<template>
    <div>
        <Land v-if='bool' @bool='change'></Land>
        <Sign v-else></Sign>
    </div>
</template>

<script>
import Land from './Land'
import Sign from './Sign'
export default {
    data() {
        return {
            bool:true
        }
    },
components:{
    Land,
    Sign
},
methods: {
    change(){
        this.bool=false
    }
},
}
</script>

<style scoped>
   

   
</style>