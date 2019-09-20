<template>
  <div style="width:600px;margin: 0 auto;">
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" animation-position="outside" />
    <div style="padding-top: 5rem;" />

    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" animation-position="inside" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" :use-lqip="true" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage :data-src="require(`~/assets/images/cat.jpg`)" style="width:100%;height:500px;" :ignore-img-base-path="true" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="https://placekitten.com/1200/800" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="https://placekitten.com/1200/800" style="width:100%;height:500px;" :scroll-inside="true" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
    <div style="padding-top: 5rem;" />
    <LazyImage data-src="cat.jpg" style="width:100%;height:500px;" />
  </div>
</template>

<script>
export default {
}
</script>
