import Vue from 'vue'
import App from './App'
import router from './router'

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('../static/loading-svg/loading-bars.svg')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
