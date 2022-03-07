// home模块的仓库
import {reqCategoryList} from '../../api/index.js'
const state={
    categoryList:[]
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
};
const actions={
    // 通过api里面的接口函数调用发请求
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code===200){
            commit("CATEGORYLIST",result.data)
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