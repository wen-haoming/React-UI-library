const {merge}              = require('webpack-merge')
const base                 = require('../webpack.common.js')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const path                 = require('path');
const CopyPlugin           = require('copy-webpack-plugin');

const config =  {
  entry:{
    comps : path.resolve(__dirname,'./src/index.ts'),
  },
  output: {
    path          : path.resolve(__dirname, './dist/umd'),
    filename      : 'u-ui.js',                               //文件名
    publicPath    : '/',                                     //发布路径
    library       : 'U-UI',                                  //类库名称
    libraryTarget : 'umd',                                   //类库加载方式
    umdNamedDefine: true
  },
  module:{
      rules:[{
        test  : /\.tsx?$/,
        loader: "ts-loader"
      },{
        test: /\.less$/,
        use : [miniCssExtractPlugin.loader,'css-loader','less-loader']
      }]
  },
  plugins:[new miniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname,'./src/styles'), to: path.resolve(__dirname,'./dist/umd') },
      ],
  })]

};

module.exports = merge(base,config)
