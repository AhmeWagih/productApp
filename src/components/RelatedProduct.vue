<template>
  <div class="flex flex-col gap-6 container mx-auto">
    <h1 class="text-2xl font-bold">Related Product</h1>
    <div class="grid grid-cols-3 gap-4">
      <ProductCard v-for="product in relatedProduct" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue';

const relatedProduct = [
    {
    "id": 2,
    "name": "Running Shoes",
    "price": 90,
    "discount": 10,
    "image": "https://picsum.photos/600/400?1"
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "price": 150,
    "discount": 0,
    "image": "https://picsum.photos/600/400?2"
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "price": 30,
    "discount": 50,
    "image": "https://picsum.photos/600/400?3"
  }
]


</script>