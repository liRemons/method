const path = require("path"); //引进path模块

module.exports = {
  mode: "development", //取消打包下黄色字体
  entry: "./src/index.js", //项目入口
  output: {
    //项目出口
    path: path.resolve(__dirname, "./"), //打包后文件路径
    filename: "index.js", //打包后文件名称
    libraryTarget: 'commonjs2'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: path.join(__dirname, "/src"), //配置文件目录下的es6文件夹作为js源代码文件夹，所有源代码一定要放在该文件夹下
        loader: "babel-loader",
        query: {
          presets: ["es2015"],
        },
      },
    ],
  },
};
