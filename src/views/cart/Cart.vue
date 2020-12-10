<!--  -->
<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center" >购物车({{cartCount}})</div>
    </nav-bar>
    <scroll class="contents" :pullUpLoad="true" ref="scroll">
      <cart-list :cartlist="cartList"></cart-list>
    </scroll>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList'
import BottomBar from './childComps/BottomBar'
import {mapGetters} from'vuex'

export default {
  components: { 
    NavBar,
    CartList,
    BottomBar,
    Scroll 
  },
  data() {
    return {
     }
   },
   //重新进入界面
   activated(){
     this.$refs.scroll.refresh()
   },
   computed:{
    //  cartList(){
    //    return this.$store.getters.getCartList
    //  },
    //  cartCount(){
    //    return this.$store.getters.getCartCount
    //  }
    ...mapGetters(['cartList','cartCount'])
   },
  method:{
 
   },
}
</script>


<style scoped>
.cart{
  height: 100vh;
}
.cart-bar{
  background-color: var(--color-tint);
  color: #ffffff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.contents{
  height: calc(100vh - 137px);
  overflow: hidden;
}
</style>