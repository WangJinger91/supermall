<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
      <goods-list :goodslist="recommendList">
      </goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/goodsList/GoodsList.vue'
export default {
  components: { GoodsList },
  data() {
    return {
    }
  },
  methods : {
  },
  props:{
    recommendList:{
        type:Array
    }  
  }
}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
