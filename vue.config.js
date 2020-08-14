const ip = require('ip')

const pluginOptions = {
  host: ip.address(),
  port: 9123,
}

module.exports = {
  publicPath: './',
  outputDir: 'build',
  assetsDir: 'static',

  pages: {
    index: {
      entry: './src/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'vue常用实例'
    }
  },

  devServer: {
    // host: pluginOptions.host,
    port: pluginOptions.port,
    open: true,
    /* 跨域代理 */
    proxy: {
      '/dj': {
        target: '//musicapi.leanapp.cn', //
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/dj': '/dj'
        }
      }
    }
  }
}