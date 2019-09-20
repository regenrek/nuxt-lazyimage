const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') },
    '@bazzite/nuxt-optimized-images'
  ],
  optimizedImages: {
    optimizeImagesInDev: true
  },
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        ctx.loaders.vue.transformAssetUrls.img = ['data-src', 'src']
        ctx.loaders.vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  }
}
