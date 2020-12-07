<!--  -->
<template>
  <div id='home'>
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control class="tabcontrol" v-show="istop"
                :titles="['流行','新款','精选']"
                @TabClick="TabChange" ref="tabcontrol1"/>
    <scroll class="wrapper" ref="scroll" 
            :probe-type="3" @scroll='scrollClick' 
            :pullUpLoad="true" @pullUp='loadMore'>
    <home-swiper :banners="banners" @imageLoading.once='gettop' />
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control :titles="['流行','新款','精选']"
                @TabClick="TabChange" ref="tabcontrol2"/>
    <goods-list :goodslist="showGoodsList"/>
    </scroll>
    <!--监听组件点击事件必须加上native-->
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'
import {getBackTopMix} from 'common/mixin'

export default {
  mixins: [getBackTopMix],
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType : 'pop',
      count:0,
      istop:false,
      offsetTop:0,
      scrollY:0
    }
   },
  computed:{
      showGoodsList(){
        return this.goods[this.currentType].list
     }
  },
  components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
   },
  created (){ 
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
   },
  /*解决路由切换页面位置保持的问题，但最新的better-scroll优化了这个问题，就不需要这部分了
  activated(){
    this.$refs.scroll.scrollTo(0,this.scrollY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.scrollY=this.$refs.scroll.scroll.y
    console.log(this.scrolly)
  },*/
  mounted(){
    const refresh=debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on("homeitemImageLoad",()=>{
        refresh()
     })
   },
  methods:{

    //网络请求方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        const data=res.data.list
        //数组赋值，表示将data数组中的各个数据一一加到list后面,...表示可变
        this.goods[type].list.push(...data)
        this.goods[type].page+=1
        
        this.$refs.scroll.finishPullUp()
        
      })
    },

    //点击事件方法
    TabChange(value){
      switch(value){
        case 0 :
          this.currentType='pop';
          break;
        case 1 :
          this.currentType='new';
          break;
        case 2 :
          this.currentType='sell';
          break;
        default:
          break;
     }
     
      this.$refs.tabcontrol1.currentIndex=value    
      this.$refs.tabcontrol2.currentIndex=value
    },
   
    scrollClick(position){
      this.isBackTopShow=(-position.y) >1000
      this.istop = (-position.y) > this.offsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType);
    },
    gettop(){
      this.offsetTop=this.$refs.tabcontrol2.$el.offsetTop
    }
  },
   
}
</script>


<style scoped>
#home{
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
}
.home-bar{
  background-color: var(--color-tint);
  color: #ffffff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
.tabcontrol{
  
  position: relative;
  z-index: 9;
}
.wrapper{
  overflow: hidden;

  /*height: calc(100vh - 93px);*/

  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}

</style>