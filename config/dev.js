module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        enable: true
      },
      url: {
        enable: true,
        config: {
          limit: 10240
        }
      }
    }
  },
  h5: {}
}
