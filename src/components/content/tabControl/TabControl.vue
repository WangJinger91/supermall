<!--  -->
<template>
  <div class="tab-control">
      <div  v-for="(item,index) in titles" :key="index"
        class="control-item" :class="{active: currentIndex === index}" 
        @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        currentIndex : 0
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
  methods:{
      itemClick(index){
          this.currentIndex=index;
          this.$emit('TabClick',index)
      }
   },
}
</script>


<style scoped>
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