import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
import './assets/style/style.css'
import './assets/style/border.css'
import './assets/style/iconfont/iconfont.css'
import './assets/style/animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mode: 'history',
  render: h => h(App)
})
