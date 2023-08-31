/**
 * 在引入文件时如果都是../ ../../这种相对路径方式引用可读性很差
 * 安装依赖
 * npm install react-app-rewired customize-cra --save-dev
 * 在根目录添加 config-overrides.js文件配置如下
 */
const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
module.exports = override(
    addWebpackAlias({
        // 指定@符指向src目录
        '@': path.resolve(__dirname, 'src'),
    })
)