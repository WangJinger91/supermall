<!--  -->
<template>
  <div class="category">
    <nav-bar class="category-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="tab-content">
      <tab-menu class="menu" :categories="categories" @menuClick="itemClick"></tab-menu>
      <scroll :pullUpLoad="true" class="contents" >
        <tab-content-category :subcategory="subcategory"></tab-content-category>
        <tab-control :titles="['综合','新品','销量']"  @TabClick="TabChange"></tab-control>
        <goods-list :goodslist="showGoodsList"/>
      </scroll>
    </div>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'

import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'

export default {
  components: {  
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl,
    GoodsList
  },
  data() 
    {
    return {
      categories:[],
      currentIndex:0,
      subcategory:[],
      currentType:'pop',
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
     }
   },
  computed:{
    showGoodsList(){
      return this.goods[this.currentType].list
    }
  },
  mounted(){
    this.getCategory()
  },
  methods:{
    getCategory(){
       getCategory().then(res=>{
         console.log(res);
         for(var item of res.data.category.list){
          this.categories.push(item)
         }
         this.getSubcategory(0)
       })
    },
    getSubcategory(index){
      this.currentIndex=index;
      const mailKey = this.categories[index].maitKey;
      const miniWallkey=this.categories[index].miniWallkey;
      var sublist=[]
      getSubcategory(mailKey).then(res=>{
        for(var item of res.data.list){
           sublist.push(item)
         }
         this.subcategory=sublist
         
        this.getCategoryDetail(miniWallkey,'pop')
        this.getCategoryDetail(miniWallkey,'new')
        this.getCategoryDetail(miniWallkey,'sell')
      })
    },
    getCategoryDetail(miniWallkey,type){
        getCategoryDetail(miniWallkey, type).then(res=>{
        const data=res
        //数组赋值，表示将data数组中的各个数据一一加到list后面,...表示可变
        const list=[]
        list.push(data)
        this.goods[type].list=[]
        this.goods[type].list.push(...data)
        this.goods[type].page+=1
      })
    },



    itemClick(index){
      this.currentIndex=index
      this.getSubcategory(index)
    },
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
    }
     
   },
 
  }
</script>


<style scoped>
.category-bar{
  background-color: var(--color-tint);
  color: #ffffff;

}
.tab-content{   

    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
}
.menu{
    flex: 1;
}
.contents{
  height: 100%;
  /* calc(100% - 93px); */
  /* overflow: hidden; */
  flex: 2.5;
}
</style>