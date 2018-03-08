import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

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

// 状态管理
const store = new Vuex.Store({
	state: {
		nickName: '',
		cartCount: 0
	},
	mutations: {
		updateUserInfo(state, nickName) {
			state.nickName = nickName;
		},
		updateCartCount(state, cartCount) {
			state.cartCount += cartCount;
		},
		initCartCount(state,cartCount){
      state.cartCount = cartCount;
    }
	}
})

import "@/assets/css/base.css";
import "@/assets/css/checkout.css";
import "@/assets/css/product.css";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
