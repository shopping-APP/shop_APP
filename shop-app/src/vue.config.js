module.exports = {
    devServer: {
      proxy: {
        '/api': {
            target: '',
            ws: true,
            changeOrigin: true,
            pathRewrite:{//当前的名字
                '^/api':''
            }
        }
      }
    }
  }