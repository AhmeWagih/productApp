<template>
 <div class="flex flex-col gap-6 max-w-7xl mx-auto">
   <ProductDetails @buy="relayBuy" v-if="selectedProduct" :product="selectedProduct" />
  <h1 class="text-3xl font-bold">Related Products</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "> 
    <ProductCard v-for="product in relatedProduct" :key="product.id" :product="product" />
  </div>
 </div>
</template>


<script setup>
import { computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import ProductDetails from '@/components/ProductDetails.vue';
import ProductCard from "@/components/ProductCard.vue";

const route = useRoute();

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});

const selectedProduct = computed(() => {
  const productId = Number(route.params.id);
  return props.products.find((product) => product.id === productId) ?? null;
});

const relatedProduct = computed(() => {
  if (!selectedProduct.value) {
    return [];
  }

  return props.products.filter(
    (product) => product.id !== selectedProduct.value?.id,
  );
});

function relayBuy(productId) {
  emit('buy', productId)
}
const emit = defineEmits(['buy'])

onMounted(() => {
  console.log("ProductDetailsView mounted");
});

onUnmounted(() => {
  console.log("ProductDetailsView unmounted");
});
</script>