import Vue from 'vue'
import App from './App.vue'
// 三级联动组件
import TypeNav from './components/TypeNav/TypeNav.vue'
// 第一个参数：全局组件的名字，第二个参数：哪个组件
Vue.component(TypeNav.name,TypeNav)
// 引入路由
import router from './router'
// 引入仓库
import store from './store'
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')
