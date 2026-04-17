<template>
  <div class="carousel w-full h-[70vh]">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/600/400?1"
        class="w-full"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/600/400?2"
        class="w-full"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/600/400?3"
        class="w-full"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img
        src="https://picsum.photos/600/400?4"
        class="w-full"
      />
      <div
        class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
      >
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  console.log("CarouselBanner mounted");
});

onUnmounted(() => {
  console.log("CarouselBanner unmounted");
});
</script>
