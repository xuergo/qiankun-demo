const { name } = require('./package');
module.exports = {
    publicPath: '/orderCenter/', //这里打包地址都要基于主应用的中注册的entry值
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};