// 对于axios进行二次封装
import axios from 'axios'
// 引入进度条/样式
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
// 在当前模块汇总引入store
import store from '../store'
// 利用axios对象的方法crate，去创建一个axios实例
// request就是axios
const requests = axios.create({
    // 配置对象
    // 基础路径
    baseURL:'/api',
    // 请求超时时间为5s
    timeout:5000,
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    // config配置对象，其中的header请求头很重要
    // 进度条启动
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token
    }
    nprogress.start()
    return config
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 响应成功的回调函数
    // 进度条结束
    nprogress.done()
    return res.data
},(error)=>{
    // 响应失败的回调函数
    return Promise.reject(new Error('fail'))
})
// 对外暴露
export default requests