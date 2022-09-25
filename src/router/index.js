// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes.js'
import store from '../store'
// 使用插件
Vue.use(VueRouter)
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
let router = new VueRouter({
    routes,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        // y:0代表路由跳转后滚动条在最上方
        return { y: 0 }
    },
})

// 全局守卫：前置守卫
router.beforeEach(async (to, from, next) => {
    // to:可以获取到你想跳到的路由的信息
    // from：可以获取到你从哪个路由来的信息
    // next：放行函数 全部放行：next() 放行指定路由：next('/login')  next(false)
    // next();
    // 用户登录了才会有token
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login') {
            next('/home')
        } else {
            if (name) {
                // 如果登录了
                next()
            } else {
                // 如果没登录 派发action让仓库存储用户信息再跳转
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效 获取不到用户信息
                    // 清除token
                    await store.dispatch('userLogOut')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录
        next()
    }
})


export default router