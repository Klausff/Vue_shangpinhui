import {reqCartList,reqDeleteCartById,reqUpdateCheckedById} from '../api'
const state={
    cartList:[]
}
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
}
const actions={
    async getCartList({commit}){
        let result = await reqCartList()
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new err('faile'))
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}){
        let result = await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return 'ok'
        }else{
            return Promise.reject(new err('faile'))
        }
    },
    // 删除全部勾选的产品
    deleteAllCheckedCart({dispatch,getters}){
        // context：小仓库
        // console.log(context)
        // 获取购物车中的全部产品（数组）
        let PromiseAll = []
        getters.cartList.cartInfoList.forEach(item=>{
            let promise = item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):''
            PromiseAll.push(promise)
        })
        // 都成功则返回成功，有一个失败就返回失败
        return Promise.all(PromiseAll)
    },
    // 一键全选
    updateAllCartIsChecked({dispatch,state},isChecked){
        let promiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
}
const getters={
    cartList(state){
        return state.cartList[0]||{}
    },
}
export default{
    state,mutations,actions,getters
}