<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
  data() {
    return {
        scroll:{},
     }
   },
   props:{
     probeType:{
       type : Number,
       default : 0
     },
     pullUpLoad:{
       type:Boolean,
       default:false
     }
   },
   mounted(){

     //scroll默认不监听滚动
     //probetype,0,1不侦测
     //2，手指滑动时侦测，离开后不侦测
     //3.只要滑动就侦测
    this.scroll=
      new BScroll(this.$refs.wrapper,{
       probeType: this.probeType,
       pullUpLoad:this.pullUpLoad,
       click:true

     });
    this.scroll.on('scroll',(position)=>{
       this.$emit('scroll',position)
      //  console.log(position)
    })
    
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullUp')
      // console.log('上拉加载更多')
    })

     
   },
  methods:{
    //设置time默认值为300
    scrollTo(x,y,time=300){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    refresh(){
      //防止srcoll未加载就被拿来用
      this.scroll&&this.scroll.refresh();
    }
   },
}
</script>


<style scoped>


</style>