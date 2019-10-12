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
        '/ajax': {
          target: 'http://www.shenduzhekou.com/index.php',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/ajax':''
          }
        },
        // '/api': {
        //   target: 'http://cmsjapi.dataoke.com/api',
        //   changeOrigin: true,
        //   ws:true,
        //   pathRewrite:{
        //     '^/api':'',
        //   }
        // },
      }
    }
  }