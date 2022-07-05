import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
// 引入其他仓库
import home from './home.js'
import search from './search.js'
import detail from './detail.js'
import shopCart from "./shopCart.js";
import user from './user'
// 对外暴露store类的一个实例
export default new Vuex.Store({
    // 实现Vuex仓库模块式开发存储数据
    modules:{
        home,search,detail,shopCart,user
    }
})