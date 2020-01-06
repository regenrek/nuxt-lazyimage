import Vue from 'vue'
import LazyImage from './LazyImage.vue'
import lazySizes from 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import locomotiveScroll from 'locomotive-scroll'
const options = JSON.parse(`<%= JSON.stringify(options) %>`)

if (!('object-fit' in document.createElement('a').style)) {
  require('lazysizes/plugins/object-fit/ls.object-fit')
}

if (options.locomotiveScroll) {
  Object.defineProperty(Vue.prototype, 'locomotiveScroll', {
    value: locomotiveScroll
  })
}

Vue.component('LazyImage', LazyImage)

export default lazySizes
