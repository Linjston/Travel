<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li  class="item" v-for="item of weekendList" 
                         :key="item.id"
        >
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" >
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'weekend',
    props:['weekendList'],
    data (){
        return {
        
        }
    }
}
</script>


<style lang="stylus" scoped>
    @import '~@/assets/styles/mixis.styl';

    .title
        line-height :.8rem
        background :#eee 
        text-indent :.2rem
  
    .item-img-wrapper
        height:0
        overflow hidden
        padding-bottom:37.2%
        .item-img
             width:100%  
    .item-info
            padding:.1rem          
            min-width:0
            .item-title
                font-weight 700
                line-height :.5rem
                font-size .25rem   
                ellipsis()
            .item-desc
                margin-top:.15rem
                line-height :.4rem
                color:#ccc
                ellipsis()
                

</style>