<template>
    <div class="icons">  
        <swiper :options="swiperOption" v-if="showIcon">  
            <swiper-slide   v-for="page of pages"
                            :key="page.id"
            >   
                <div class="icon" v-for="item of page.content" 
                                 :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" />
                    </div>
                    <span class="icon-desc">{{item.desc}}</span>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'icons',
    props:['iconList'],
    data() {
        return {
            swiperOption:{
                loop:true,
                autoplay:false
            }
        }
    }, 
    computed: {
        pages (){
            const pages = []
            this.iconList.forEach((item,index)=>{
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = {
                        id: page,
                        content: []
                    } 
                }
                pages[page].content.push(item)
            })
            return pages
        },
        showIcon (){
            return this.pages.length
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixis.styl'
    //mixis.styl 中使用函数ellipsis来封装样式
    //.swiper-container是swriper组件的样式
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icons
        .icon
                position relative
                overflow hidden
                float left
                height 0
                width 25%
                padding-bottom 25%
                .icon-img
                    position absolute 
                    top 0
                    left 0
                    right 0
                    bottom .44rem
                    box-sizing border-box 
                    padding .1rem
                    .icon-img-content
                        display block
                        margin 0 auto
                        height 100%
                .icon-desc
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    height .44rem
                    line-height .44rem
                    color $darkTextColor
                    text-align center  
                    ellipsis() 

</style>