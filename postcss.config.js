module.exports = {
    plugins:{
        autoprefixer: { },
        "postcss-px-to-viewport":{
            viewportWeidth:375,//视窗的宽度
            viewportHeight:667,//视窗的高度，按视窗比例将px缩放
            unitPrecision:5,//将px转化为视窗单位值后保留小数位数
            viewportUnit:'vw',//指定需要换成的视窗单位
            selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转化的类
            minPixelValue:1,//小于或等于1px不转换成视窗单位
            mediaQuery:false//是否允许媒体查询中转换px

        },
       
    }
}