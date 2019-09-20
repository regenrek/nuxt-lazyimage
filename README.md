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

> Simple Example with external image source
```html
<LazyImage
  data-src="https://placekitten.com/1200/800"
  objectFit="cover"
/>
```

> Example with srcset
```html
<LazyImage
  data-src="cat.jpg"
  objectFit="cover"
  fetchMode="srcset"
/>
```

> All options
```html
<LazyImage
  data-src="cat.jpg"
  objectFit="cover"
  fetchMode="srcset"
/>
```

## API Reference

### Props

|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|dataSrc|-|`String`|`false`|'cat2.jpg'|
|objectFit|-|`String`|`false`|'cover'|
|fetchMode|-|`String`|`false`|'none'|
|lqip|-|`Boolean`|`false`|true|
|effect|-|`String`|`false`|'reveal'|
|scrollInside|-|`Boolean`|`false`|false|
|scrollSpeed|-|`String`|`false`|'-1.5'|




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
