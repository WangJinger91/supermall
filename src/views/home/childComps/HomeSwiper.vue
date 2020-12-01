<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {getHomeMultidata} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  data() {
    return {
    
     }
   },
  props:{
    banners:{
        type:Array
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageLoad(){
      this.$emit('imageLoading')
      //console.log('-----')
    }
   },
}
</script>


<style scoped>

</style>