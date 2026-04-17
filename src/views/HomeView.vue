<template>
  <div class="flex flex-col gap-6">
    <CarouselBanner />
    <div class="flex flex-col gap-6 max-w-7xl mx-auto">
      <h1 class="text-2xl font-bold">Meet Our Sweet Products</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import CarouselBanner from "../components/CarouselBanner.vue";
import ProductCard from "../components/ProductCard.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  console.log(`HomeView mounted — ${props.products.length} products loaded`);
});

onUnmounted(() => {
  console.log("HomeView unmounted");
});

</script>
