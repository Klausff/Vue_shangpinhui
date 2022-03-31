// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter)
// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Search from '../pages/Search/Search.vue'

// 先把VueRouter原型对象的push|replace保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
// 重新push|replace方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && this.replace) {
        // call|apply相同点：都可以调用函数一次，也可以篡改函数上下文一次
        // call|apply区别：call传递多个参数用逗号隔开，apply传递参数使用数组
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                show: false
            }
        },
        {
            name:'search',
            path: "/search/:keyword",
            component: Search,
            meta: {
                show: true
            },
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})