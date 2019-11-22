<template>
<div>
    <div class="title">热销推荐</div>
    <ul>
        <li  class="item" v-for="item of recommendList" 
                         :key="item.id"
        >
            <img class="item-img" :src="item.url" >
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'recommend',
    data (){
        return {
            recommendList:[{
                id: "0001",
                url: "http://img1.qunarzz.com/p/tts2/1905/13/88cc5d719793be02.jpg_280x200_9f763d25.jpg",
                title: "船游港珠澳大桥1日纯玩游",
                desc: "出发地：广州"
            },{
                id: "0002",
                url: "http://img1.qunarzz.com/p/tts3/1811/cb/906065befeb09102.jpg_280x200_d31c214a.jpg",
                title: "广州增城白水寨纯玩一日游【吸氧观瀑-拍照圣地-金秋特惠】",
                desc: "出发地：广州"
            },{
                id: "0001",
                url: "http://img1.qunarzz.com/p/tts2/1905/13/88cc5d719793be02.jpg_280x200_9f763d25.jpg",
                title: "船游港珠澳大桥1日纯玩游",
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
    .item
        overflow:hidden
        height:1.9rem
        display:flex
        border-bottom 1px solid #eee
        .item-img
            width:119px
            height :1.7rem
            padding:.1rem           
        .item-info
            flex:1
            padding:.1rem
            padding-left:0
            min-width:0
            .item-title
                font-weight 700
                line-height :.5rem
                font-size .30rem   
                ellipsis()
            .item-desc
                margin-top:.15rem
                line-height :.4rem
                color:#ccc
                ellipsis()
            .item-button
                line-height :.4rem
                background :#ff9300
                padding:0 .2rem
                margin-top:.1rem
                border-radius :.06rem
                color:#fff
                

</style>