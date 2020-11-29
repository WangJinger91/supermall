<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="center">分类</div>
    </nav-bar>
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>20</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
    </ul>
  </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import BScroll from 'better-scroll'

export default {
  components: {  
    NavBar
  },
  data() {
    return {
      scroll
     }
   },
  method:{
 
   },
   mounted(){

     //scroll默认不监听滚动
     //probetype,0,1不侦测
     //2，手指滑动时侦测，离开后不侦测
     //3.只要滑动就侦测
     this.scroll=
     new BScroll(document.querySelector('.wrapper'),{
       probeType: 3,
      pullUpLoad:true

     });
     this.scroll.on('scroll',(position)=>{
       //console.log(position)
     })
    
      this.scroll.on('pullingUp',()=>{
       console.log('上拉加载更多')
       setTimeout(()=>{
         this.scroll.finishPullUp()
       },2000)
     })
   }
}

</script>


<style scoped>
.wrapper{
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>