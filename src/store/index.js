import Vue from 'vue'
import vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(vuex)

const state ={
    cartList:[]
}

const store=new vuex.Store(
    {
        state,
        mutations,
        actions,
        getters
    }
)

export default store