# nuxt-lazyimage

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]


This module offers you a `<LazyImage>` Component which handles lazy loading for images. 

⚠️ Please note that this module has an dependency to `@bazzite/nuxtoptimizied-images` module. 


## Demo

* You can find a full working example in my other Git Repository [here](https://github.com/regenrek/nuxt-lazysizes-aspect-ratio-blur)
* Or you dig through the [CodeSandbox Example](https://codesandbox.io/s/nuxtjs-lazysizes-aspect-ratio-blur-5e3rv)


## Features

* Lazy Loading is enabled through popular [lazysizes](https://github.com/aFarkas/lazysizes) library.
* Since we're using [nuxt-optimizied-images](https://github.com/bazzite/nuxt-optimized-images) under the hood you will get optimizied images out of the box.

## 🎯 Install

```bash
yarn add nuxt-lazyimage @bazzite/nuxt-optimized-images
# npm install nuxt-lazyimage nuxt-optimizied-images
```

As described in the `nuxt-optimized-images` module [documentation](https://github.com/bazzite/nuxt-optimized-images#optimization-packages) you need to install the appropiate loaders for your project.

```bash
yarn add -D responsive-loader imagemin-mozjpeg webp-loader lqip-loader
# npm install --save-dev responsive-loader imagemin-mozjpeg webp-loader
```

Add modules to  `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-lazyimage',
    '@bazzite/nuxt-optimized-images',

    // With options
    ['nuxt-lazyimage', { /* module options */ }],
    ['@bazzite/nuxt-optimized-images', { /* module options */ }],
  ]
}
```

## 📌 Configuration

```js
{
  lazyImage: {
    defaultCss: true // should defaultCSS be included?
  }
},
```

## 🚀 Usage



⚠️ **Important** You need to set some width and height. I mainly do this via [CSS aspect-ratio](https://css-tricks.com/snippets/sass/maintain-aspect-ratio-mixin/) technique. You can find an example [here in my other repository](https://github.com/regenrek/nuxt-lazysizes-aspect-ratio-blur)

> Simple Example with image source `~/assets/images/cat.jpg`
```html
<LazyImage data-src="cat.jpg" animation-position="inside" class="aspect-ratio-16/9" />
```

> Example with external source
```html
<LazyImage data-src="https://placekitten.com/1200/800" animation-position="inside" class="aspect-ratio-16/9" />
```

> Example with lqip-loader (you need to install lqip-loader first!
```html
<LazyImage data-src="cat.jpg" :use-lqip="true" />
```

> Example with custom path and url
```html
<LazyImage :data-src="require(`~/assets/media/cat.jpg`)" :ignore-img-base-path="true" />

> Choose between object-fit: cover and contain.
> It uses `lazysizes/plugins/object-fit/ls.object-fit` behind the scene
```html
<LazyImage data-src="cat.jpg" :objectFit="contain" />

> Get some extra markup for html output to create some nice animations.
<LazyImage data-src="cat.jpg" :animationPosition="outside" :effect="a-fadein" />
<LazyImage data-src="cat.jpg" :animationPosition="inside" :effect="a-fadein" />
```
**Hint:**  Unfortunately the animations are currently tight coupled to one viewport library I personally prefer. That means you definitly need a custom library that gives you an active class on the element if the image scrolls into the current viewport. I personally use [locomotive-scroll/](https://locomotivemtl.github.io/locomotive-scroll/) which is currently default for the component (see `data-scroll` attribute). Also the `animations.css` file use the `is-inview` class for animations.

To get it work with other viewport libraries you need to tweak some elements inside the Component. Or you just wrap the `<LazyImage></LazyImage>` with some custom directive and code the animation right away. Like you can use [Akryum/vue-observer-visibility](https://github.com/Akryum/vue-observe-visibility).

## API Reference

### Props

<!-- @vuese:LazyImage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|dataSrc|The image URL you want to show|`'cat.jpg'`|`true`|-|
|objectFit|Specify how the image/video will fit the container|`'cover'` / `'contain'`|`false`|'cover'|
|animationPosition|Enable animation wrapper|`'none'` / `'outside'` / `'inside'`|`false`|'none'|
|effect|Define the animation effect you want to use|`'a-reveal'` / `'a-fadein'` / `'custom'`|`false`|'reveal'|
|scrollSpeed|-|`String`|`false`|'1'|
|ignoreImgBasePath|The default path is ~/assets/images.|`Boolean`|`false`|false|
|useSrcSet|If you disable this prop you will get a simple <img> tag|`Boolean`|`false`|true|
|useLqip|Use LQIP/blurry image placeholder/Blur up image technique. Needs lqip-loader|`Boolean`|`false`|false|

<!-- @vuese:LazyImage:props:end -->


### Slots

<!-- @vuese:LazyImage:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:LazyImage:slots:end -->





## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Issues

* Currently there is no SSR Support !

## License

[MIT License](./LICENSE)

Copyright (c) Kevin Regenrek <hello@regenrek.at>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-lazyimage/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-lazyimage

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-lazyimage.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-lazyimage

[circle-ci-src]: https://img.shields.io/circleci/project/github/regenrek/nuxt-lazyimage.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/regenrek/nuxt-lazyimage

[codecov-src]: https://img.shields.io/codecov/c/github/regenrek/nuxt-lazyimage.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/regenrek/nuxt-lazyimage

[license-src]: https://img.shields.io/npm/l/nuxt-lazyimage.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-lazyimage
