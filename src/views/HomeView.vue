<template>
  <div class="flex flex-col gap-6">
    <CarouselBanner />
    <div class="flex flex-col gap-6 max-w-7xl mx-auto">
      <h1 class="text-2xl font-bold">Meet Our Sweet Products</h1>

      <div v-if="isLoading" class="text-gray-500">Loading products...</div>

      <div v-else-if="isError" class="text-red-600">
        Failed to load products. Please try again.
      </div>

      <div v-else-if="products.length === 0" class="text-gray-500">
        No products found.
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <ProductCard v-for="product in homeProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import CarouselBanner from "../components/CarouselBanner.vue";
import ProductCard from "../components/ProductCard.vue";
import { useProductStore } from "@/store/product";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { fetchAllProducts } = productStore;
const { products, isLoading, isError } = storeToRefs(productStore);

const homeProducts = computed(() => products.value.slice(0, 3));

onMounted(async () => {
  await fetchAllProducts();
});

onUnmounted(() => {
  console.log("HomeView unmounted");
});

</script>
