let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {

    entry:{
        'js/index':'./web/js/index.js'  //入口文件行

    },
    module: {
        //规则，刚才安装的css-loader和style-loader这里进行配置
        rules: [
            {
                test: /\.css$/,   // 正则表达式，表示.css后缀的文件
                use: ['style-loader','css-loader']   // 针对css文件使用的loader，注意有先后顺序，数组项越靠后越先执行
            },
            // {
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'url-loader',
            //     options: {
            //         name: '[name].[ext]',
            //         outputPath: './img',
            //         publicPath: './img'
            //     }
            // },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './img/team',
                    publicPath: './img/team'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['url-loader']
            },
            {
                test: /\.html$/, //所有html结尾的文件添加此 loader 处理
                loader: 'html-withimg-loader'
            }
        ]
    },
    output:{
        //__dirname 当前webpack.config.js的路径
        filename: '[name].js',      //打包后index.js的名字，
        // 这个[name]的意思是,配置入口entry键值对里的key值,app/dist/js/index,最后的index，
        //这里无论你src/js/index.js这个脚本如何命名，打包后都将是index.js
        //   path: path.resolve(__dirname)
    },

    //插件
    plugins:[
        new HtmlWebpackPlugin({
            chunks:['js/index'],
            filename:'index.html',
            template:'web/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks:['js/index'],
            filename:'main.html',
            template:'web/main.html'
        })
    ]
}