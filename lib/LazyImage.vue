<template>
  <figure
    :class="[
      objectFit !== '' ? 'is-' + objectFit : '',
      animationPosition === 'inside' ? 'overflow-hidden' : '',
      effect !== '' ? effect : ''
    ]"
    :data-scroll="animationPosition === 'outside'"
    :data-scroll-speed="scrollSpeed"
  >
    <div
      :data-scroll="animationPosition === 'inside'"
      :data-scroll-speed="scrollSpeed"
      class="absolute left-0 top-0 w-full h-full"
    >
      <slot>
        <picture v-if="useSrcSet">
          <source :data-srcset="image.webp" type="image/webp">
          <source :data-srcset="image.opt" type="image/jpg">
          <img :src="useLqip ? image.placeholderBlur : image.opt" class="lazyload" :data-src="image.opt">
        </picture>
        <img
          v-else
          :src="image.placeholder"
          class="lazyload a-fadein"
          :data-src="image.opt"
        >
      </slot>
    </div>
  </figure>
</template>
<script>
export default {
  props: {
    // The image URL you want to show
    dataSrc: {
      required: true,
      // `'cat.jpg'`
      type: String
    },
    // Specify how the image/video will fit the container
    objectFit: {
      default: 'cover',
      required: false,
      // `'cover'` / `'contain'`
      type: String
    },
    // Enable animation wrapper. Works currently only with locomotive library
    animationPosition: {
      default: 'none',
      required: false,
      // `'none'` / `'outside'` / `'inside'`
      type: String
    },
    // Define the animation effect you want to use
    effect: {
      default: '',
      required: false,
      // `'a-reveal'` / `'a-fadein'` / `'custom'`
      type: String
    },
    // Everything > 0 gets an smooth parallax scroll. Works only with locomotive library!
    scrollSpeed: {
      default: '0',
      required: false,
      type: String
    },
    // The default path is ~/assets/images.
    ignoreImgBasePath: {
      default: false,
      required: false,
      type: Boolean
    },
    // If you disable this prop you will get a simple <img> tag
    useSrcSet: {
      default: true,
      required: false,
      type: Boolean
    },
    // Use LQIP/blurry image placeholder/Blur up image technique. Needs lqip-loader
    useLqip: {
      default: false,
      required: false,
      type: Boolean
    }
  },
  computed: {
    image () {
      try {
        if (!this.ignoreBasePath) {
          const images = {
            original: require(`~/assets/images/${this.dataSrc}?original`),
            opt: require(`~/assets/images/${this.dataSrc}`),
            webp: require(`~/assets/images/${this.dataSrc}?webp`)
          }
          if (this.useLqip) {
            images.placeholderBlur = require(`~/assets/images/${this.dataSrc}?lqip`)
          }
          return images
        } else {
          const images = {
            original: `${this.dataSrc}?original`,
            opt: `${this.dataSrc}`,
            webp: `${this.dataSrc}?webp`
          }
          if (this.useLqip) {
            images.placeholderBlur = require(`${this.dataSrc}?lqip`)
          }
          return images
        }
      } catch (e) {
        console.error('Couldn`t load images', e)
        return 'err.jpg'
      }
    },
    ignoreBasePath () {
      const regex = new RegExp('^(http|https)://', 'i')
      if (regex.test(this.dataSrc) || this.ignoreImgBasePath) {
        return true
      }
      return false
    }
  }
}
</script>
<style>
img.blur {
  filter: blur(25px);
}

img.lazyloaded {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
}

img.lazyloaded.blur {
    filter: blur(0);
}

@keyframes fadein {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
