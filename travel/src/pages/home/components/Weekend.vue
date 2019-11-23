<template>
<div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li  class="item" v-for="item of recommendList" 
                         :key="item.id"
        >
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.url" >
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
    data (){
        return {
            recommendList:[{
                id: "0001",
                url: "https://imgs.qunarzz.com/p/tts0/1705/a9/732262a08d6ec402.jpg_434x216_be1dd0e7.jpg",
                title: "[珠海]珠海石博园-渔女像情侣路-圆明新园1日游*珠海一天游品质B线",
                desc: "出发地：广州"
            },{
                id: "0002",
                url: "http://img1.qunarzz.com/p/tts3/1811/cb/906065befeb09102.jpg_280x200_d31c214a.jpg",
                title: "广州增城白水寨纯玩一日游【吸氧观瀑-拍照圣地-金秋特惠】",
                desc: "出发地：广州"
            },{
                id: "0001",
                url: "https://imgs.qunarzz.com/p/tts4/1703/4f/7d0de949024ae002.jpg_434x216_2885bee9.jpg",
                title: "[珠海]（珠海多地出发海洋王国直通车）长隆海洋王国+烟花汇演1天游",
                desc: "出发地：广州"
            }]
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
        margin-top :.1rem
    .item-img-wrapper
        height:0
        overflow hidden
        padding-bottom:49%
        .item-img
             width:100%  
    .item-info
            padding:.1rem
            padding-left:0
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