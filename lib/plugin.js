import Vue from 'vue'
import LazyImage from './LazyImage.vue';
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

if (!('object-fit' in document.createElement('a').style)) {
  require('lazysizes/plugins/object-fit/ls.object-fit')
}

Vue.component("LazyImage", LazyImage)

export default lazySizes;