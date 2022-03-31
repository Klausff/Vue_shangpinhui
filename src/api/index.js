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
export const reqGetSearchInfo = (params) =>requests({url:'/list',method:'post',data:params})
 