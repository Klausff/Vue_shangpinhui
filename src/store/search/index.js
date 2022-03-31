// search模块的仓库
import { reqGetSearchInfo } from "../../api";
const state={
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions={
    // 获取search模块数据
    async getSearchList({commit},params={}){
        let reuslt = await reqGetSearchInfo(params)
        if(reuslt.code==200){
            commit('GETSEARCHLIST',reuslt.data)
        }
    }
};
const getters={
    // 简化仓库中的数据
    goodsList(state){
        // 如果网络不好state.searchList.goodsList返回的是undefined，没法在组件中进行遍历，所以网络不好的时候至少要给一个空数组进行遍历
        return state.searchList.goodsList||[]
    },
    trademarkList(state){
        return state.searchList.trademarkList
    },
    attrsList(state){
        return state.searchList.attrsList
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}