<template>
    <div class="detail-nav-bar">
      <nav-bar>
        <div class="back" slot="left" @click="backClick"><img  src="~assets/img/common/back.svg"></div>
        
        <div class="tab-control" slot="center">
          <div  v-for="(item,index) in titles" :key="index"
            class="control-item" :class="{active: currentIndex === index}" 
            @click="itemClick(index)">
            <span>{{item}}</span>
          </div>
        </div>
      </nav-bar>

    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl.vue'
export default {
  components: { 
    TabControl,
    NavBar 
  },
  data() {
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
        type:Array,
        default(){
            return []
        }
    }
  },
  methods : {
    backClick(){
      this.$router.back()
    },
    itemClick(index){
      this.currentIndex=index;
      this.$emit('toLocation',index)
    }
  }
}
</script>

<style scoped>
.back img{
  margin-top: 10px;

}
.tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #ffffff;
}
.control-item{
    flex:1;
}

.tab-control span{
    padding: 5px;
}

.active{
    color: var(--color-high-text);
}

.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>
