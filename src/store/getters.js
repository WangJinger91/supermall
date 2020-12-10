export default {
    cartList(state){
        return state.cartList
    },
    cartCount(state){
        return  state.cartList.length
    },
    getAllCartCount(state){
        let count=0
        for(let item of state.cartList){
            if(item.checked==true)
            count+=item.count
        }
        return count
    },
    getTotalPrice(state){
        let totalPrice=0
        for(let item of state.cartList){
            if(item.checked==true)
            totalPrice+=(item.realPrice*item.count)
        }
        return totalPrice
    }

}