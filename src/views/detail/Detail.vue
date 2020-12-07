<!--  -->
<template>
  <div class="detail">
    <detail-nav-bar @toLocation="changeLoaction" ref="navbar" :titles="['商品','参数','评论','推荐']"></detail-nav-bar>
    <scroll class="contents" :pullUpLoad="true" :probeType="2" ref="scroll"  @scroll="scrollOn">
      <detail-swiper :images="images"></detail-swiper>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="loadGoodsImage"/>
      <detail-param-info :param-info="paramInfo" ref="paraminfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="commentinfo"></detail-comment-info>
      <detail-recommend-info :recommend-list="recommendList" ref="recommendinfo"></detail-recommend-info>
    </scroll>
    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
    <detail-bottom-bar/>
  </div>
  
</template>

<script>
import DetailNavBar from 'views/detail/childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailRecommendInfo from './childComps/DetailRecommendInfo'
import DetailBottomBar from './childComps/DetailBottomBar'


import Scroll from 'components/common/scroll/Scroll'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import {debounce} from 'common/utils'
import {getBackTopMix} from 'common/mixin'


export default {
  name:'Detail',
  mixins:[getBackTopMix],
  data() {
    return {
      iid : null,
      images:[],
      goods:null,
      shop:null,
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommendList:[],
      themeTopys:[],
      getTopY:null,
      currentIndex:0,
     }
   },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar
  },
  created(){
    this.getTopY=debounce(()=>{
      this.themeTopys[0]=44;
      this.themeTopys[1]=this.$refs.paraminfo.$el.offsetTop;
      this.themeTopys[2]=this.$refs.commentinfo.$el.offsetTop;
      this.themeTopys[3]=this.$refs.recommendinfo.$el.offsetTop;
      this.themeTopys.push(Number.MAX_VALUE)
    },100)

    const iid=this.$route.query.iid
    this.iid=iid
    getDetail(iid).then(res=>{
      const data=res.result

      this.images=data.itemInfo.topImages
      
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);

      this.shop = new Shop(data.shopInfo);

      this.detailInfo = data.detailInfo

      this.paramInfo=new GoodsParam(data.itemParams.info, data.itemParams.rule)

      if(data.rate.list)
      this.commentInfo=data.rate.list[0]

      //错误方法，此时，数据请求完成，但dom渲染未完成，特别是图片加载，位置错误
      // this.$nextTick(()=>{
      //   this.themeTopys[0]=0;
      //   this.themeTopys[1]=this.$refs.paraminfo.$el.offsetTop;
      //   this.themeTopys[2]=this.$refs.commentinfo.$el.offsetTop;
      //   this.themeTopys[3]=this.$refs.recommendinfo.$el.offsetTop;
      //   console.log(this.themeTopys)
      // })
    })

    getRecommend().then(res=>{
      this.recommendList=res.data.list
    })

  },
  mounted(){
    const refresh=debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on("detailitemImageLoad",()=>{
        refresh()
     })
  },
  updated(){

  },
  methods:{
    loadGoodsImage(){
      this.$refs.scroll.refresh()
      this.getTopY()
    },
    changeLoaction(value){
      this.$refs.scroll.scrollTo(0,-(this.themeTopys[value])+44)
    },
    scrollOn(position){
      
      this.isBackTopShow=((-position.y) >1000)

      const positionY=-position.y+44
      const length=this.themeTopys.length
      for(let i =0;i<length-1;i++){
        i=i-0//i是string类型
        // if(this.currentIndex!=i &&
        //  ((i<length-1&&(positionY>=this.themeTopys[i]&&positionY<this.themeTopys[i+1])) || (i==length-1&&(positionY>=this.themeTopys[i])))){
        //     this.currentIndex=i
        //     this.$refs.navbar.currentIndex=this.currentIndex
        // }  
        if(this.currentIndex!=i && (positionY>=this.themeTopys[i] &&positionY <this.themeTopys[i+1])){
          this.currentIndex=i
          this.$refs.navbar.currentIndex=this.currentIndex
        }
          
      }
    }
  },

}
</script>


<style scoped>
.detail{
  height: 100vh;
  position: relative;
  /* z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。 */
  z-index: 9; 
  background-color: #fff;
  /* margin-top: 44px; */
}
.contents{
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>