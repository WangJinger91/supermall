<!--  -->
<template>
  <div class="goods-list">
      <goods-list-item :goodslistitem="item"
       v-for="(item,index) in goodslist" :key="index"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  data() {
    return {
    
     }
  },
  props:{
      goodslist:{
          type:Array,
          default(){
              return []
          }
      }
  },
  methods:{
 
   },
}
</script>


<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>