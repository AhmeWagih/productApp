<template>
  <div class="space-y-6 max-w-7xl mx-auto mt-5">
    <h1 class="text-3xl font-bold">Products</h1>

    <div v-if="isLoading" class="text-gray-500">Loading products...</div>

    <div v-if="isError" class="text-red-600">
      Failed to load products. Please try again.
    </div>

    <div v-else-if="products.length === 0" class="text-gray-500">
      No products found.
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { useProductStore } from "@/store/product";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { fetchAllProducts } = productStore;
const { products, isLoading, isError } = storeToRefs(productStore);

onMounted(async () => {
  await fetchAllProducts();
});

onUnmounted(() => {
  console.log("ProductsView unmounted");
});
</script>
