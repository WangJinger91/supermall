<!--  -->
<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <a :href="item.link">
            <img width="80%" :src="item.image">
            <div>{{item.title}}</div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
     }
   },
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  },
  method:{
 
   },
}
</script>


<style scoped>
.recommend{
    display: flex;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend-item{
    flex:1;
}

</style>