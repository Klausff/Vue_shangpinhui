// 引入mockjs
import  Mock  from "mockjs";
// 引入json(图片、json文件默认对外暴露)
import banner from './banner.json'
import floor from './floor.json'

// mock数据第一个参数：请求地址，第二个参数：请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock("/mock/floor",{code:200,data:floor})