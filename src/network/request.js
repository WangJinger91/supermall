import axios from "axios"
export function request(config){
     
        
    const instance= axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6'
    })

    //请求拦截
    //作用
    //1、比如config中有些信息不符合浏览器的要求
    //2、发送网络请求时，请求过程中显示图标
    //3、某些网络请求必须携带一些信息(登录是需要token)
    instance.interceptors.request.use(config=>{
        //console.log(config)
        //拦截后必须返回
        return config
    },err=>{
        console.log(err)
    })

    //响应拦截
    instance.interceptors.response.use(res=>{
        //console.log(res)
        //拦截后必须返回
        return res.data
    },err=>{
        console.log(err)
    })
    
    return instance(config)


}