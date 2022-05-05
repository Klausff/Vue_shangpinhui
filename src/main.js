import Vue from 'vue'
import App from './App.vue'
// 三级联动组件
import TypeNav from './components/TypeNav/TypeNav.vue'
import Carousel from './components/Carousel/Carousel.vue'
import Pagination from './components/Pagination/Pagination.vue'
// 第一个参数：全局组件的名字，第二个参数：哪个组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
// 引入路由
import router from './router'
// 引入仓库
import store from './store'
// 引入mock
import'./mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css'
new Vue({
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus= this
  },
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')
