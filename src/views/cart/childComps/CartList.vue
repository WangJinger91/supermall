<template>
  <div>
        <cart-list-item v-for="(item,index) in cartlist" :key="index" :itemInfo="item"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from  './CartListItem'
export default {
  data() {
    return {
    }
  },
  components:{
      CartListItem
  },
  props :{
      cartlist :{
          type:Array,
          default :[]
      }
  },
  methods : {
  }
}
</script>

<style scoped>

</style>
