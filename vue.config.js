module.exports = {
    lintOnSave:false,
    // 代理跨越
    devServer:{
        proxy:{
            '/api':{
                target:'http://39.98.123.211',
            }
        }
    }
 }