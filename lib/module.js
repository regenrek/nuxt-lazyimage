const { resolve } = require('path')

const defaultOptions = {
  defaultCss: true,
  animationCss: true,
  locomotiveScroll: true
}

function nuxtLazyImage (moduleOptions) {
  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-lazyimage.js',
    options
  })

  this.addTemplate({
    fileName: 'LazyImage.vue',
    src: resolve(__dirname, 'LazyImage.vue')
  })

  if (options.defaultCss !== false) {
    this.options.css.push(resolve(__dirname, 'css/default.css'))
  }

  if (options.animationCss !== false) {
    this.options.css.push(resolve(__dirname, 'css/animations.css'))
  }

  if (options.locomotiveScroll !== false) {
    this.options.css.push('./node_modules/locomotive-scroll/dist/locomotive-scroll.min.css')
  }
}

module.exports = nuxtLazyImage
module.exports.meta = require('../package.json')
