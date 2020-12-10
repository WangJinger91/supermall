<template>
  <div class="check-button">
      <img src="~assets/img/cart/tick.svg" :class="{check : isChecked}">
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props:{
    isChecked:{
        type:Boolean,
        default :true
    }  
  },
  methods : {
  }
}
</script>

<style scoped>
.check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.check{
    border-radius: 50%;
    border-color: red;
    background-color: red;
}
</style>
