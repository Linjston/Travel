<template>
<div class="wrapper">
 <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide  v-for="item of swiperList" :key='item.id'>
        <img class="swiper-image" :src="item.imgUrl" >     
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
    props:['swiperList'],
    data (){
        return {
            swiperOption: {
                pagination:'.swiper-pagination',               
                loop:true
            }
        }
    },
    computed: {
        showSwiper (){
            return this.swiperList.length
        }
    },
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper >>> .swiper-pagination-bullets
        bottom 5px
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 2.28rem
      .swiper-image 
         width 100%
         height 2.28rem
    
</style>