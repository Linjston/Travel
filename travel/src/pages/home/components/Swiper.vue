<template>
<div class="wrapper">
 <swiper :options="swiperOption" >
    <swiper-slide  v-for="item of swiperList" :key='item.id'>
        <img class="swiper-image" :src="item.url" >     
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
 </swiper> 
</div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data (){
        return {
            swiperOption: {
                pagination:'.swiper-pagination',               
                loop:true
            },
            swiperList:[{
                id: '001',
                url: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/abe3418971067bd655fb2794d6e2eeec.jpg'
            },{
                id: '002',
                url: 'http://imgs.qunarzz.com/vc/aa/9e/82/14bf523635542806a671763e98.jpg_92.jpg'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 114px
      .swiper-image 
         width 100%
    
</style>