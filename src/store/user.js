// 登录与注册的仓库
import {reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogOut} from '../api'
import {setToken,getToken,removeToken} from '../utils/token'
const state={
    code:'',
    token:getToken,
    userInfo:{}
}
const mutations={
    GETCODE(state,code){
        state.code=code
    },
    USERLOGIN(state,token){
        state.token=token
    },
    GETUSERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    CLEAR(state){
        // 把仓库中相关用户信息清空
        state.token='',
        state.userInfo={}
        removeToken()
    }
}
const actions={
    // 获取验证码
    async getCode({commit},phone){
        let result =await reqGetCode(phone)
        if(result.code==200){
            commit('GETCODE',result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({commit},user){
        let result = await reqUserRegister(user)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 登录业务【token】
    async userLogin({commit},data){
        let result = await reqUserLogin(data)
        // 服务器下发的token是用户的唯一标识符
        if(result.code==200){
            commit('USERLOGIN',result.data.token)
            // 持久化存储token
            setToken(result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    } ,
    // 获取用户信息
    async getUserInfo({commit},data){
        // 用户已经成功登录且获取到token
        let result = await reqUserInfo()
        if(result.code==200){
            // 提交用户信息
            commit("GETUSERINFO",result.data)
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登录
    async userLogOut({commit}){
        // 只是向服务器发请求通知服务器清楚token
        let result = await reqLogOut()
        // action里不能修改state，要提交mutation修改state
        if(result.code==200){
            commit("CLEAR")
        }else{
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters={}
export default{
    state,
    mutations,
    actions,
    getters
}