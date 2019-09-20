# LazyImage

## Props

<!-- @vuese:LazyImage:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|dataSrc|The image URL you want to show|`'cat.jpg'`|`true`|-|
|objectFit|Specify how the image/video will fit the container|`'cover'` / `'contain'`|`false`|'cover'|
|animationPosition|Enable animation wrapper|`'none'` / `'outside'` / `'inside'`|`false`|'none'|
|effect|Define the animation effect you want to use|`'reveal'` / `'fadein'` / `'custom'`|`false`|'reveal'|
|scrollInside|-|`Boolean`|`false`|false|
|scrollSpeed|-|`String`|`false`|'1'|
|ignoreImgBasePath|The default path is ~/assets/images.|`Boolean`|`false`|false|
|useSrcSet|If you disable this prop you will get a simple <img> tag|`Boolean`|`false`|true|
|useLqip|Use LQIP/blurry image placeholder/Blur up image technique. Needs lqip-loader|`Boolean`|`false`|false|

<!-- @vuese:LazyImage:props:end -->


## Slots

<!-- @vuese:LazyImage:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|-|-|

<!-- @vuese:LazyImage:slots:end -->


