// 引入路由组件
import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import Register from '../pages/Register/Register.vue'
import Search from '../pages/Search/Search.vue'
import Detail from '../pages/Detail/Detail.vue'
import addCartSuccess from '../pages/AddCartSuccess/AddCartSuccess.vue'
import shopCart from '../pages/ShopCart/shopCart.vue'
export default [
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: addCartSuccess,
        meta: { isShow: true }
    },
    {
        path: '/shopCart',
        name: 'shopcart',
        component: shopCart,
        meta: { isShow: true }
    },
    {
        path: '/detail/:skuid',
        component: Detail,
        meta: {
            isShow: true
        }
    },
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
        name: 'search',
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