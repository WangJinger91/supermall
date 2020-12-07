import BackTop from 'components/content/backTop/BackTop'

export const  getBackTopMix ={
    data(){
        return{
            isBackTopShow : false,
        }
    },
    components:{
      BackTop
    },
    methods:{
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
        },
    }
}