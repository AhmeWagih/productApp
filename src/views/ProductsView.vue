<template>
  <div class="space-y-6 max-w-7xl mx-auto mt-5">
    <h1 class="text-3xl font-bold">Products</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import ProductCard from "../components/ProductCard.vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

onMounted(() => {
  console.log(`ProductsView mounted — ${props.products.length} products loaded`);
});

onUnmounted(() => {
  console.log("ProductsView unmounted");
});
</script>
