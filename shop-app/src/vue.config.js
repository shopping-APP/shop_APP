module.exports = {
    devServer: {
      // proxy: {
      //   '/api': {
      //       target: '',
      //       ws: true,
      //       changeOrigin: true,
      //       pathRewrite:{//当前的名字
      //           '^/api':''
      //       }
      //   }
      // }
      proxy: {
        '/api': {
          target: 'http://www.shenduzhekou.com/index.php',
          changeOrigin: true
        },
    }
  }