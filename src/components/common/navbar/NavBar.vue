<!--  -->
<template>
  <div class="nav-bar">
      <div class="left"><slot name='left'></slot></div>
      <div class="center"><slot name='center'></slot></div>
      <div class="right"><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
     }
   },
  method:{
 
   },
}
</script>


<style scoped>
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 0 1px,rgba(100,100,100,.1);
}
.left,.right{
    width: 44px;
}
.center{
    flex: 1;
}


</style>