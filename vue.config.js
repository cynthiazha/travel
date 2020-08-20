module.exports = {
  devServer: {
    proxy: {
      '/api': { // 所有以api开头的请求最后请求都在前面加上target
        target: 'http://127.0.0.1:8080/data',
        // 因为真实的请求地址是http://127.0.0.1:8080/data/index.json,如果不用下面这个pathrewrite，
        // 请求最后就会变成http://127.0.0.1:8080/data/api/index.json,这个是不存在的
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true // 允许跨域
      }
    }
  }
}
