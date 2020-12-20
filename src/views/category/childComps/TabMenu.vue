<template>
<scroll :pullUpLoad="true" class="tab-menu">
  <div >
      <div class="menu-list-item"
      v-for="(item,index) in categories" :key="index"
      :class="{active : currentIndex==index}"
      @click="itemClick(index)">
          {{item.title}}
      </div>
  </div>
</scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
export default {
  components: { Scroll },
  data() {
    return {
        currentIndex:0
    }
  },
  props:{
      categories:{
          type:Array,
          default:[]
      }
  },
  methods : {
      itemClick(index){
          this.currentIndex=index;
          this.$emit('menuClick',index)
      }
  }
}
</script>

<style scoped>
  #tab-menu {
    background-color: #f6f6f6;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
  }
  /* .scroll{
    height: calc(100% - 93px);
    overflow: hidden;
  } */
  .menu-list-item {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .menu-list-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #fff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
