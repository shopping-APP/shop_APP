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
          target: 'http://www.shenduzhekou.com',
          ws: true,
          changeOrigin: true,
          pathRewrite:{
            '^/api':''
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