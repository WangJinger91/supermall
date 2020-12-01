<!--  -->
<template>
  <div>
     <p>详情页</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
     }
   },
  methods:{
 
   },
  created(){
    //console.log(this.$route.params.id)
    console.log(this.$route.query.id)
  },
}
</script>


<style scoped>

</style>