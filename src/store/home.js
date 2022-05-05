// home模块的仓库
import {reqGetCategoryList,reqGetBannerList,reqGetFloorList} from '../api/index.js'
const state={
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
const actions={
    // 通过api里面的接口函数调用发请求
    async categoryList({commit}){
        let result = await reqGetCategoryList();
        if(result.code===200){
            commit("GETCATEGORYLIST",result.data)
        }
    },
    // 获取首页轮播图数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code===200){
            commit("GETBANNERLIST",result.data)
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code === 200){
            commit("GETFLOORLIST",result.data)
        }
    }
};
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}