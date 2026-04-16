<template>
  <section class="container mx-auto px-4 py-6">
    <div class="card bg-base-100 shadow-sm">
      <div class="grid gap-6 md:grid-cols-2 relative">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full min-h-70 w-full object-cover md:rounded-l-box"
          />

        <div class="card-body justify-center">
            <span v-if="product.badge" class="badge badge-secondary absolute left-4 top-4">{{ product.badge }}</span>
          
          <h1 class="card-title text-3xl">{{ product.name }}</h1>
          <p class="text-base-content/80">{{ product.description }}</p>
          
          <div class="flex flex-col items-start gap-3 ">
            <span v-if='product.discount !== 0' class="badge bg-red-400">-{{ product.discount }}%</span>
            <div class="flex items-center w-fit gap-2">
              <p class="text-2xl font-bold">${{ product.price }}</p>
            <p v-if="product.discount !==0" class="text-base-content/50 line-through">
              ${{ originalPrice }}
            </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span v-for="tag in product.tags" :key="tag" class="badge badge-accent">
              {{ tag }}
            </span>
          </div>

          <div class="card-actions pt-2">
            <button class="btn" :class="getCTAClass">{{ getCTALabel }}</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const product = {
  id: 1,
  name: "Cozy Sneakers",
  description: "High-quality sneakers that go with everything you wear.",
  image: "https://picsum.photos/1000/700?1",
  badge: "NEW",
  price: 120,
  discount: 30,
  isAvailable: false,
  tags: ["Fashion", "Casual", "Sport"],
};

const originalPrice = computed(() => {
  return Math.round(product.price / (1 - product.discount / 100));
});

const getCTALabel = computed(() => {
  return product.isAvailable ? "Buy Now" : "Out of Stock";
});

const getCTAClass = computed(() => {
  return product.isAvailable ? "btn-primary" : "btn-disabled";
});
</script>