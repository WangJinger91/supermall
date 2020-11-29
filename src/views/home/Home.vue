<!--  -->
<template>
  <div id='home'>
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <scroll class="wrapper" ref="scroll" 
            :probe-type="3" @scroll='scrollClick' 
            :pullUpLoad="true" @pullUp='loadMore'>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control" 
                :titles="['流行','新款','精选']"
                @TabClick="TabChange"/>
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
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
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
      scroll : {},
      isBackTopShow : false
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
      BackTop
   },
  created (){
      this.getHomeMultidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
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
        this.$refs.scroll.scroll.refresh()
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
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    scrollClick(position){
      this.isBackTopShow=(-position.y) >1000
    },
    loadMore(){
        this.getHomeGoods(this.currentType);
    
    }
  },
   
}
</script>


<style scoped>
#home{
  height: 100vh;
  padding-top: 44px;
  position: relative;
}
.home-bar{
  background-color: var(--color-tint);
  color: #ffffff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
   position: sticky;
    top: 44px;
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