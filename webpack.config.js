// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path'); //node.js문법, node.js의 path라이브러리를 가져와서 변수 path에 넣기

// 참고 https://nodejs.org/api/path.html
module.exports = {
  mode: 'none',
  entry: './src/index.js',  //entry에 있는 파일을 대상으로 webpack을 돌려서
  output: {         //결과를
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist') //경로를 잡는 api사용
  }
}