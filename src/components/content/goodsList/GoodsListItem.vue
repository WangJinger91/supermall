<!--  -->
<template>
  <div class="goods-list-item">
      <img :src="goodslistitem.show.img" >
      <div class="goods-info">
          <p>{{goodslistitem.title}}</p>
          <span class="price">{{goodslistitem.price}}</span>
          <span class="collect">{{goodslistitem.cfav}}</span>
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
       goodslistitem:{
           type:Object,
           default(){
               return {}
           }
       }
   },
  methods:{
 
   },
}
</script>


<style scoped>
.goods-list-item{
    padding-bottom: 40px;
    width: 48%;
    
    position: relative;
}

.goods-list-item img{
    width: 100%;
    border-radius:5px;
}

.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
}

.goods-info p{
    
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    
}

.goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

.goods-info .collect {
    position: relative;
}

.goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}

</style>