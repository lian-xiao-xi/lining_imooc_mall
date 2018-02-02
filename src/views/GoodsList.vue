<template>
	<div>
    <!-- icon-arrow-short 价格筛选的上下箭头 -->
    <symbol id="icon-arrow-short" viewBox="0 0 25 32">
      <title>arrow-short</title>
      <path class="path1" d="M24.487 18.922l-1.948-1.948-8.904 8.904v-25.878h-2.783v25.878l-8.904-8.904-1.948 1.948 12.243 12.243z"></path>
    </symbol>
    <symbol id="icon-status-ok" viewBox="0 0 32 32">
      <title>status-ok</title>
      <path class="path1" d="M22.361 10.903l-9.71 9.063-2.998-2.998c-0.208-0.209-0.546-0.209-0.754 0s-0.208 0.546 0 0.754l3.363 3.363c0.104 0.104 0.241 0.156 0.377 0.156 0.131 0 0.261-0.048 0.364-0.143l10.087-9.414c0.215-0.201 0.227-0.539 0.026-0.754s-0.539-0.226-0.754-0.026z"></path>
      <path class="path2" d="M16 30.933c-8.234 0-14.933-6.699-14.933-14.933s6.699-14.933 14.933-14.933c8.234 0 14.933 6.699 14.933 14.933s-6.699 14.933-14.933 14.933zM16 0c-8.822 0-16 7.178-16 16 0 8.823 7.178 16 16 16s16-7.177 16-16c0-8.822-7.178-16-16-16z"></path>
    </symbol>

    <nav-header></nav-header>
    <nav-bread>
      <span>Goods</span>
    </nav-bread>

    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price 
            <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg>
          </a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" :class="{'filterby-show': filterBy}" >
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" @click="priceChecked = 'all'" :class="{'cur': priceChecked === 'all'}">All</a></dd>
              <dd v-for="(price, index) in priceFilter" :key="index" >
                <a href="javascript:void(0)" @click="setPriceCheck(index)" :class="{'cur': priceChecked === index}">
                  {{price.startPrice}} - {{price.endPrice}}
                </a>
              </dd>

            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="(item,index) in goodsList" :key="index">
                  <div class="pic">
                    <a href="#"><img v-lazy="`/static/${item.productImg}`" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">XX</div>
                    <div class="price">999</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="md-overlay" v-show="overLayFlag" @click="closePop"></div>

    <nav-footer></nav-footer>
	</div>
</template>

<style >

</style>

<script >
import "@/assets/css/base.css";
import "@/assets/css/product.css";
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
import NavBread from "@/components/NavBread.vue";
import axios from "axios";

const ERR_OK = 0;

export default {
  data() {
    return {
      goodsList: [], // 渲染页面的数据容器
      priceFilter: [
        {
          startPrice: '0.00',
          endPrice: '500.00'
        },
        {
          startPrice: '500.00',
          endPrice: '1000.00'
        },
        {
          startPrice: '1000.00',
          endPrice: '2000.00'
        }
      ],
      priceChecked: 'all', // 价格选中的状态
      filterBy: false, // 控制小屏（响应式）下价格菜单显示
      overLayFlag: false // 控制遮罩显示
    };
  },
  components: {
    NavHeader,
    NavFooter,
    NavBread
  },
  created() {
    // setTimeout(() => {
      this.getGoodsList();
    // }, 5000);
  },
  methods: {
    getGoodsList() {
      axios.get("/api/goods").then(res => {
        let resData = res.data;
        if (resData.error === ERR_OK) {
          this.goodsList = resData.goodsData.result;
          this.$nextTick(() => {

          });
          console.log(this.goodsList);
        }
      });
    },
    setPriceCheck(index) {
      this.priceChecked = index;
      this.closePop();
    },
    showFilterPop() {
      this.filterBy = true;
      this.overLayFlag = true;
      console.log(this.filterBy)
    },
    // 关闭遮罩层
    closePop() {
      this.filterBy = false;
      this.overLayFlag = false;
    }
  }
};
</script>