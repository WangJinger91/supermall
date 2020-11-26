<!--  -->
<template>
  <div class='tab-bar-item' @click="itemClick()">
    <div v-if="!isActive"><slot name='item-icon'></slot></div>
    <div v-else><slot name='item-icon-active'></slot></div>
    <!--<div :class="{fontisactive : isActive }"><slot name='item-name'></slot>-->
    <div :style="activeStyle"><slot name='item-name'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    itemType : {
      type :String,
    },
    activeColor : {
      type :String,
      default : 'red'
    }
  },
  data() {
    return {
    }
   },
  computed :{
    isActive(){
      //根据路由当前路径判断
      //return this.$route.path.indexOf(this.itemType) !== -1
      return this.$route.path.includes(this.itemType)
    },
    activeStyle (){
      return this.isActive ? {color : this.activeColor} :{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.itemType)
    }
   },

}
</script>


<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}
.fontisactive{
  color: red;
}

</style>