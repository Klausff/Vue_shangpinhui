// api进行统一管理
import requests from "./ajax";
import mockRequest from './mockAjax'

// 三级联动接口
//api/product/getBaseCategoryList  GET  无参数
export const reqGetCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner接口
export const reqGetBannerList = () => mockRequest.get('/banner')

// 获取floor接口
export const reqGetFloorList = () => mockRequest.get('/floor')

// 获取搜索模块数据 地址：/api/list (post),带参数
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

//  获取商品详情页的数据
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })

// 将产品添加到购物车中
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

// 获取购物车列表数据的接口
export const reqCartList = () =>requests({url:'/cart/cartList',method:'get'})

// 删除购物车产品的接口
export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

// 修改购物车产品是否被选中的接口
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 获取验证码的接口
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

// 用户注册的接口
export const reqUserRegister=(data)=>requests({url:'/user/passport/register/',data,method:'post'})

// 用户登录的接口
export const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,method:'post'})

// 获取用户的信息（需要带着用户的token向服务器要用户的信息）
export const reqUserInfo=()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'})

// 退出登录
export const reqLogOut=()=>requests({url:'/user/passport/logout',method:'get'})