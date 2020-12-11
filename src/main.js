import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import toast from 'components/common/toast'
import fastClick from 'fastclick'
import VUeLazyLoad from 'vue-lazyload'
 
Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus=new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300ms延时
fastClick.attach(document.body)

//使用懒加载插件
Vue.use(VUeLazyLoad,{
  //设置加载时的图片
  loading: require('./assets/img/common/placeholder.png')
})
//需要将img的src换成v-lazy


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
