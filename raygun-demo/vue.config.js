module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3800',
          changeOrigin: true
        },
      }
    }
  }