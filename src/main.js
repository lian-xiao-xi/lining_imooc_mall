import Vue from 'vue'
import App from './App'
import router from './router'

// 使用懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('../static/loading-svg/loading-bars.svg')
})

// 使用无限滚动插件
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll);

Vue.config.productionTip = false

// 货币过滤器
import {currency} from "@/assets/js/currency.js"
Vue.filter('currency', currency)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
