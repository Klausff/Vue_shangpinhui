module.exports = {
    lintOnSave:false,
    // 代理跨越
    devServer:{
        proxy:{
            '/api':{
                target:'http://gmall-h5-api.atguigu.cn',
            }
        }
    }
 }