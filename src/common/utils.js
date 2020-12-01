export function debounce(func,delay){
    //防抖函数
    let  timer=null;                        
    return function(...args){
      //timer为计时器编号，
      //clearTimeout取消由setTimeout设置的定时操作
      if(timer) clearTimeout(timer);
      timer=setTimeout(() => {
        func.apply(this,args) 
      }, delay);
    }
}