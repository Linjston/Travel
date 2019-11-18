// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// 解决移动端点击事件延迟300ms问题 npm install fastclick --save
import './assets/styles/reset.css' 
import './assets/styles/border.css' 
// 解决1像素边框问题，各个移动端的物理像素不同
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


