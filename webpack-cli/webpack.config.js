
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})



module.exports = {
    plugins: [htmlPlugin],
    entry: path.join(__dirname, 'src/index.js'),//入口文件
    output: {
        path: path.join(__dirname, './dist'),//输出目录
        filename: 'bundle.[chunkhash:8].js'//输出文件名
    },
    mode: 'development',//mode用来指定构建模式

    devServer: {
        hot: true, //支持热更新
        port: 8088,
        static: "./"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(jpg|png|gif)$/,
                type: "asset",
                generator: {
                    filename: "images/[name][ext]",
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 1024
                    }
                }
            },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    }
}