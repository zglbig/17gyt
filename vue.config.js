//vue.config.js常用配置
module.exports = {
    //基本路径，vue-cli3 3.3以前请使用baseUrl
    publicPath: '/',
    //输出文件目录
    outputDir: 'dist',
    //用于嵌套生成静态资源（js，css，img，fonts）的目录
    assetsDir: '',
    //生产环境sourceMap
    productionSourceMap: true,
    //webpack相关配置
    configureWebpack: () => {},
    chainWebpack: () => {},
    //css相关配置
    css: {
        //启动css models
        //models: false,
        //是否使用css分离插件
        extract: true,
        //开启 css source mapa？
        sourceMap: false,
        //css预设器配置项
        loaderOptions: {},
    },
    //webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        //proxy: {},
    },
    //第三方插件
    pluginOptions: {
        //...
    }
}