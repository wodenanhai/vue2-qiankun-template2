const {name} = require('./package');
const port = 7001;
module.exports = {
    publicPath: './',
    lintOnSave: false,
    devServer: {
        port,
        // 允许被主应用跨域fetch请求到
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            // 把子应用打包成umd库格式
            libraryTarget: 'umd',
            jsonpFunction: `webpackJsonp_${name}`
        }
    }
}