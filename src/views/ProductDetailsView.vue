<template>
  <div class="flex flex-col gap-6 max-w-7xl mx-auto">
    <div v-if="isLoading">Loading product...</div>
    <div v-else-if="isError">Failed to load product.</div>
    <ProductDetails v-else-if="product" :product="product" />

    <h1 class="text-3xl font-bold">Related Products</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard v-for="product in relatedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import ProductDetails from '@/components/ProductDetails.vue';
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/store/product";
import { storeToRefs } from "pinia";

const route = useRoute();

const productStore = useProductStore();
const { fetchProductById, fetchAllProducts } = productStore;
const { products, isLoading, isError } = storeToRefs(productStore);

const product = ref(null);
const relatedProducts = computed(() =>
  products.value.filter((p) => Number(p.id) !== Number(route.params.id))
);

const loadProduct = async () => {
  if (!products.value.length) {
    await fetchAllProducts();
  }
  product.value = await fetchProductById(route.params.id);
};

onMounted(loadProduct);
watch(() => route.params.id, loadProduct);

onUnmounted(() => {
  console.log("ProductDetailsView unmounted");
});
</script>
