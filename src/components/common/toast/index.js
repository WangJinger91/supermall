import Toast from './Toast'
const obj={
}

obj.install=function(Vue){
    //创建组件构造器
    const toastConstructor=Vue.extend(Toast)
    //通过new的方式，创建一个组件对象
    const toast=new toastConstructor()
    //将组件对象手动挂载到div上
    toast.$mount(document.createElement('div'))
    //toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast=toast
}

export default obj