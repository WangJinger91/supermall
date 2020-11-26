<!--  -->
<template>
  <div>
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultidata} from 'network/home'
export default {
  data() {
    return {
      banners:[],
      recommends:[]  
    }
   },
  method:{
 
   },
   components:{
      NavBar,
      HomeSwiper,
      RecommendView
   },
  created (){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list
      })
   }
}
</script>


<style scoped>
.home-bar{
  background-color: var(--color-tint);
  color: #ffffff;
}

</style>