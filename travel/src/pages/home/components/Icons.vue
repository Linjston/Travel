<template>
    <div class="icons">  
        <swiper :options="swiperOption">  
            <swiper-slide   v-for="page of pages"
                            :key="page.id"
            >   
                <div class="icon" v-for="item of page.content" 
                                 :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.url" />
                    </div>
                    <span class="icon-desc">{{item.content}}</span>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'icons',
    data() {
        return {
            iconList:[{
                id: '0001',
                url: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
                content:'酒店'
            },{
                id: '0002',
                url: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
                content:'机票'
            },{
                id: '0003',
                url: '//s.qunarzz.com/homenode/images/touchheader/package.png',
                content:'度假'
            },{
                id: '0004',
                url: 'http://s.qunarzz.com/homenode/images/touchheader/train.png',
                content:'火车票'
            },{
                id: '0005',
                url: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
                content:'景点门票'
            },{
                id: '0006',
                url: '//picbed.qunarzz.com/7804b43ac02cd0333bd0f866eebd43b3.png',
                content:'一日游'
            },{
                id: '0007',
                url: '//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
                content:'周边短途'
            },{
                id: '0008',
                url: '//s.qunarzz.com/homenode/images/touchheader/tuan.png',
                content:'旅游团购'
            },{
                id: '0009',
                url: '//s.qunarzz.com/homenode/images/touchheader/travel.png',
                content:'攻略'
            }],
            swiperOption:{
                loop:true
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
        }
    }, 
}
</script>

<style lang="stylus" scoped>
    @import '~@/assets/styles/varibles.styl'
    @import '~@/assets/styles/mixis.styl';
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