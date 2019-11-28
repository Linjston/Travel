<template>
 <div class='header'>
   <div class="header-left">
       <div class='iconfont back-icon'>&#xe624;</div>
    </div> 
   <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题
    </div>
   <div class="header-right">
        {{this.city}}<span class="iconfont">&#xe669;</span>
    </div>
 </div>
</template>

<script>
export default {
    name: 'Header',
    props:['city']
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl';
    .header
        display:flex
        height: .86rem
        line-height: .86rem
        background:$bgColor
        color:#fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align:center
                font-size: .4rem
        .header-input
            flex:1
            margin-top:.12rem
            margin-left: .2rem
            padding-left:.2rem
            height :.64rem
            line-height: .64rem
            color:#ccc
            background: #fff
            border-radius :.1rem
        .header-right
            width: 1.24rem
            float: right
            text-align:center
            
</style>