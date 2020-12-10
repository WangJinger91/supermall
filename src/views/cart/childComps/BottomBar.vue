<template>
  <div class="bottom-menu">
    <!-- <CheckButton class="select-all" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton> -->
    <check-button class="select-all"   @click.native="checkAll" :isChecked="isCheckAll"></check-button>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product"  @click="checkSelect">去计算({{allCartCount}})</span>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

	export default {
    name: "BottomBar",
    data(){
        return{
            
        }
    },
    components: {
        CheckButton    
    },
    computed: {
		allCartCount(){
            return this.$store.getters.getAllCartCount
        },
        totalPrice(){
            return this.$store.getters.getTotalPrice
        },
        isCheckAll(){
            if(this.$store.state.cartList.length==0)
                return false
            else
                return !(this.$store.state.cartList.filter(item => item.checked == false)).length
        }
    },
    methods: {
        checkAll(){
           if(this.isCheckAll){
               this.$store.dispatch('checkAll',false)
           }else{
               this.$store.dispatch('checkAll',true)
           }
        },
        checkSelect(){
            if(!this.isCheckAll){
                this.$toast.show('请选择商品')
            }else{
                this.$toast.show('去结算中')
            }
        }
    }
	}
</script>

<style scoped>
  .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 49px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }

  .item-selector{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
