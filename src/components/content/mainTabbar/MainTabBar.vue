<template>
  <div id="app">
    <tab-bar>
      <!-- 不是动态不用绑定-->
      <!--src 文件地址在webpack-.base.conf.js配置，可直接找到seeets，但前面必须加一个~才能生效-->
      <tab-bar-item item-type='/home'  >
        <img src='~assets/img/tabbar/home.svg' slot="item-icon" >
        <img src='~assets/img/tabbar/home_active.svg' slot="item-icon-active">
        <div  slot="item-name" >首页</div>
      </tab-bar-item>
      <tab-bar-item item-type='/category' >
        <img src='~assets/img/tabbar/category.svg'  slot="item-icon">
        <img src='~assets/img/tabbar/category_active.svg' slot="item-icon-active">
        <div  slot="item-name" >分类</div>
      </tab-bar-item>
      <tab-bar-item item-type='/cart' >
        <img src='~assets/img/tabbar/shopcart.svg'  slot="item-icon">
        <img src='~assets/img/tabbar/shopcart_active.svg' slot="item-icon-active">
        <div  slot="item-name" >购物车</div>
      </tab-bar-item>
      <tab-bar-item item-type='/profile' > 
        <img src='~assets/img/tabbar/profile.svg'  slot="item-icon">
        <img src='~assets/img/tabbar/profile_active.svg' slot="item-icon-active">
        <div  slot="item-name" >我的</div>
      </tab-bar-item>

      
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  methods : {
  }
}
</script>

<style>
@import url("../../../assets/css/base.css");


</style>
