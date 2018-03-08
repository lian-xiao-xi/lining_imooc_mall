<template>
  <header class="header">
    <symbol id="icon-cart" viewBox="0 0 38 32">
      <title>cart</title>
      <path class="path1" d="M37.759 0h-4.133c-0.733 0.004-1.337 0.549-1.434 1.255l-0.546 4.342c-0.081 0.484-0.496 0.849-0.997 0.849-0.005 0-0.009-0-0.014-0h-27.604c-0.003 0-0.007-0-0.011-0-1.674 0-3.031 1.357-3.031 3.031 0 0.34 0.056 0.666 0.159 0.971l2.52 8.062c0.385 1.194 1.486 2.043 2.785 2.043 0.126 0 0.25-0.008 0.372-0.023l22.983 0.002c0.515 0.131 0.626 0.768 0.626 1.283 0.005 0.044 0.009 0.095 0.009 0.146 0 0.501-0.294 0.933-0.718 1.134l-22.439 0.003c-0.354 0-0.642 0.287-0.642 0.642s0.287 0.642 0.642 0.642h22.745l0.131-0.071c0.919-0.392 1.551-1.287 1.551-2.33 0-0.058-0.002-0.116-0.006-0.173 0.021-0.108 0.033-0.24 0.033-0.376 0-1.072-0.732-1.973-1.724-2.23l-23.357-0.004c-0.063 0.008-0.135 0.013-0.209 0.013-0.719 0-1.332-0.455-1.566-1.093l-2.53-8.095c-0.048-0.154-0.076-0.332-0.076-0.515 0-0.973 0.782-1.764 1.752-1.778h27.657c1.159-0.004 2.112-0.883 2.232-2.011l0.547-4.345c0.010-0.083 0.078-0.147 0.161-0.152l4.133-0c0.354 0 0.642-0.287 0.642-0.642s-0.287-0.642-0.642-0.642z"></path>
      <path class="path2" d="M31.323 9.69c-0.022-0.003-0.048-0.004-0.074-0.004-0.328 0-0.598 0.248-0.633 0.567l-0.809 7.268c-0.003 0.022-0.004 0.048-0.004 0.074 0 0.328 0.248 0.598 0.567 0.633l0.074 0c0.001 0 0.003 0 0.004 0 0.327 0 0.596-0.246 0.632-0.563l0.809-7.268c0.003-0.022 0.004-0.048 0.004-0.074 0-0.328-0.248-0.598-0.567-0.633z"></path>
      <path class="path3" d="M27.514 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM27.514 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
      <path class="path4" d="M9.599 25.594c-1.769 0-3.203 1.434-3.203 3.203s1.434 3.203 3.203 3.203c1.769 0 3.203-1.434 3.203-3.203s-1.434-3.203-3.203-3.203zM9.599 30.717c-1.060 0-1.92-0.86-1.92-1.92s0.86-1.92 1.92-1.92c1.060 0 1.92 0.86 1.92 1.92s-0.86 1.92-1.92 1.92z"></path>
    </symbol>
    <div class="navbar">
      <div class="navbar-left-container">
        <a href="/">
          <img class="navbar-brand-logo" src="/static/logo.png"></a>
      </div>
      <div class="navbar-right-container" style="display: flex;">
        <div class="navbar-menu-container">
          <!--<a href="/" class="navbar-link">我的账户</a>-->
          <span class="navbar-link"></span>
          <span v-if="nickName">{{nickName}}</span>
          <a href="javascript:void(0)" class="navbar-link" @click="loginModalFlag=true;errorTip=false;" v-if="!nickName">Login</a>
          <a href="javascript:void(0)" class="navbar-link" @click="logOut" v-if="nickName">Logout</a>
          <div class="navbar-cart-container">
            <span class="navbar-cart-count" v-if="cartCount>0">{{cartCount}}</span>
            <a class="navbar-link navbar-cart-link" href="javascript:void(0)" @click='routerGoCart'>
              <svg class="navbar-cart-logo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-cart"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--下面是登录弹框-->
    <div class="md-modal modal-msg md-modal-transition" :class="{'md-show':loginModalFlag}">
      <div class="md-modal-inner">
        <div class="md-top">
          <div class="md-title">Login in</div>
          <button class="md-close" @click="loginModalFlag=false">Close</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <div class="error-wrap">
              <span class="error error-show" v-show="errorTip">用户名或者密码错误</span>
            </div>
            <ul>
              <li class="regi_form_input">
                <i class="icon IconPeople"></i>
                <input type="text" tabindex="1" name="loginname" v-model="userName" class="regi_login_input regi_login_input_left" placeholder="User Name" data-type="loginname">
              </li>
              <li class="regi_form_input noMargin">
                <i class="icon IconPwd"></i>
                <input type="password" tabindex="2"  name="password" v-model="userPwd" class="regi_login_input regi_login_input_left login-input-no input_text" placeholder="Password" @keyup.enter="login">
              </li>
            </ul>
          </div>
          <div class="login-wrap">
            <a href="javascript:;" class="btn-login" @click="login">登  录</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 遮罩层 -->
    <div class="md-overlay" v-show="loginModalFlag" @click="loginModalFlag=false"></div>
  </header>
</template>


<script>
  import '@/assets/css/login.css'
  import axios from 'axios'
  import { mapState } from 'vuex'
  export default{
    data() {
      return {
        userName: '',
        userPwd: '',
        errorTip: false,
        loginModalFlag: false // 遮罩层开关
        // nickName: '' // 用了vuex这个data数据就不用了
      }
    },
    mounted() {
      // 登录校验
      this.checkLogin();
    },
    computed: {
      ...mapState(['nickName', 'cartCount'])
      // nickName() {
      //   return this.$store.state.nickName;
      // },
      // cartCount() {
      //   return this.$store.state.cartCount;
      // }
    },
    methods: {
      checkLogin() {
        axios.get('/users/checkLogin').then( (response) => {
          let res = response.data;
          if(res.status === '0') {
            this.loginModalFlag = false;
            // this.nickName = res.result;
            this.$store.commit('updateUserInfo', res.result);
            this.getCartCount();  // 查询购物车商品数量
          } 
          // 未登录状态下
          if(res.status === '10001') {
            if(this.$route.path !== '/goods' || this.$route.path !== '/') {
              console.log(this.$route.path)
              this.$router.push('/');
            }
          }
        })
      },
      login() {
        // 如果账号或密码有一个未填写
        if(!this.userName || !this.userPwd) {
          this.errorTip = true;
          return;
        }
        
        axios.post('/users/login', {
          userName: this.userName,
          userPwd: this.userPwd
        }).then((response) => {
          let res = response.data;
          if(res.status === '0') {
            // 账号密码正确
            console.log('账号密码正确')
            this.errorTip = false;
            this.loginModalFlag = false;
            // this.nickName = res.result.userName;
            this.$store.commit("updateUserInfo",res.result.userName);
            this.getCartCount();  // 查询购物车商品数量

            // 如果是 /cart 用户购物车页面，登录之后在cart页面通过getData触发init()就获取数据
            this.$emit('getData')
          } else {
            // // 账号密码错误
            console.log('密码错误')
            this.errorTip = true;
          }
          
        })
      },
      logOut() {
        
        axios.post('/users/logout').then((response) => {
          let res = response.data;
          if(res.status === '0') {
            // this.nickName = '';
            this.$store.commit("updateUserInfo",'');
            // this.$emit('getData');
            this.getCartCount();  // 查询购物车商品数量
          }
        })

      },
      getCartCount() {
        axios.get('/users/getCartCount').then( (response) => {
          let res = response.data;
          if(res.status === '0') {
            this.$store.commit('initCartCount', res.result)
          }
          if(res.status === '10001') {
            this.$store.commit('initCartCount', 0)
          }
        })
      },
      routerGoCart() {
        this.$router.push({
          path: '/cart'
        })
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    background-color: white;
    font-family: "moderat",sans-serif;
    font-size: 16px;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-content: center;
    width: 100%;
    height: 70px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 5px 20px 10px 20px;
  }
  .navbar-left-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: -20px;
  }
  .navbar-brand-logo {
    /*width: 120px;*/
  }
  .header a, .footer a {
    color: #666;
    text-decoration: none;
  }
  a {
    -webkit-transition: color .3s ease-out;
    transition: color .3s ease-out;
  }
  .navbar-right-container {
    display: none;
    justify-content: flex-start;
    align-items: center;
  }
  .navbar-menu-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
  }
  .navbar-link {
    padding-left: 15px;
  }
  .navbar-cart-container {
    position: relative;
  }
  .navbar-cart-count {
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -9px;
    right: -11px;
    width: 20px;
    border-radius: 10px;
    color: white;
    background-color: #eb767d;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .navbar-cart-logo {
    width: 25px;
    height: 25px;
    transform: scaleX(-1);
  }

  /* 登录弹出框 */
  .md-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 535px;
  height: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  visibility: hidden;
  z-index: 201;
}

.md-modal.md-modal-m {
  width: 620px;
}

.md-modal .md-close {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 34px;
  height: 34px;
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  text-indent: -8000px;
}

.md-modal .md-close:before, .md-modal .md-close:after {
  position: absolute;
  top: 16px;
  left: -4px;
  content: "";
  width: 44px;
  height: 3px;
  background: #d7d8dd;
  -webkit-transition: -webkit-transform .5s ease-out;
  transition: -webkit-transform .5s ease-out;
  transition: transform .5s ease-out;
  transition: transform .5s ease-out, -webkit-transform .5s ease-out;
}

.md-modal .md-close:before {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.md-modal .md-close:after {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.md-modal .md-close:hover:before, .md-modal .md-close:hover:after {
  -webkit-transition: -webkit-transform .3s ease-out;
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out, -webkit-transform .3s ease-out;
}

.md-modal .md-close:hover:before {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

.md-modal .md-close:hover:after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.md-modal .md-tit {
  font-weight: 200;
  line-height: 1.8em;
  text-align: center;
}

.md-modal .md-modal-inner {
  padding: 60px 50px;
}

.md-modal .btn-wrap {
  margin-top: 20px;
  text-align: center;
  font-size: 0;
}

.md-modal .btn-wrap .btn {
  width: 45%;
  min-width: 80px;
  margin: 0 2.5%;
}

.md-modal .confirm-tips, .md-modal .alert-tips {
  font-size: 14px;
  font-weight: 200;
  text-align: center;
}

.md-modal .confirm-tips p, .md-modal .alert-tips p {
  line-height: 1.8em;
}

.md-modal .confirm-tips {
  min-height: 5.65em;
}

.md-modal .alert-tips {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 10.25em;
  -ms-flex-align: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.md-modal .alert-tips p {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.md-modal.modal-normal .content-tit {
  margin-bottom: 20px;
  line-height: 20px;
  font-size: 16px;
  color: #333;
}

.md-modal .icon-status-ok {
  width: 20px;
  height: 20px;
  fill: #ee7a23;
  vertical-align: middle;
  margin-right: 15px;
}

.md-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.md-modal-transition .md-modal-inner {
  background: #fff;
  -webkit-transform: translateY(20%);
  -ms-transform: translateY(20%);
  transform: translateY(20%);
  opacity: 0;
  -webkit-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

.md-modal-transition.md-show {
  visibility: visible;
}

.md-modal-transition.md-show .md-modal-inner {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}

@media only screen and (max-width: 767px) {
  .md-modal {
    width: 300px !important;
  }

  .md-modal.md-modal-fun .md-content {
    padding-top: 30px;
  }

  .md-modal .md-close {
    display: none;
  }

  .md-modal .md-tit {
    padding: 0 15px;
  }

  .md-modal .md-modal-inner {
    padding: 0 !important;
  }

  .md-modal .confirm-tips, .md-modal .alert-tips {
    padding: 30px 10px;
  }

  .md-modal .confirm-tips {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 90px;
    -ms-flex-align: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .md-modal .confirm-tips p {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }

  .md-modal .btn-wrap {
    display: -ms-flex;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-top: 0;
  }

  .md-modal .btn-wrap .btn {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    margin: 0;
    font-size: 12px;
  }

  .md-modal .btn-wrap .btn:first-child {
    border-left: none;
    border-right: none;
  }

  .md-modal.modal-normal .content-tit {
    font-size: 12px;
  }
}
</style>