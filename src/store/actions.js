
export default {
    addCart(context,payload){
        // let oldProduct=null
        // for(let item of state.cartList){
        //     if(item.iid==payload.iid){
        //         oldProduct=item
        //     }
        // }
        return  new Promise((resolve,reject)=>{
            let oldProduct=context.state.cartList.find(item => item.iid == payload.iid)
            if(oldProduct){
                context.commit('addCounter',oldProduct)
                resolve('商品数量+1')
            }else{
                payload.count=1
                context.commit('addCart',payload)
                resolve('添加新的商品')
            }
        })
      
       
    },

    checkAll(context,payload){
        for(let item of context.state.cartList)
            item.checked=payload

    }
}