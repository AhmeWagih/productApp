<template>
  <article
    class="group h-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    <figure class="relative h-56 overflow-hidden">
      <img
        :src="product.image"
        :alt="product.name"
        class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <span
        v-if="product.badge"
        class="absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white"
      >
        {{ product.badge }}
      </span>

      <span
        v-if="hasDiscount"
        class="absolute right-3 top-3 rounded-full bg-error px-3 py-1 text-xs font-semibold text-error-content"
      >
        -{{ product.discount }}%
      </span>
    </figure>

    <div class="space-y-4 p-5">
      <div>
        <h2 class="line-clamp-1 text-xl font-bold">{{ product.title }}</h2>
        <p class="mt-2 line-clamp-2 text-sm leading-6 text-base-content/70">
          {{ product.description }}
        </p>
      </div>

      <div class="flex items-end justify-between">
        <div class="space-y-1">
          <p v-if="hasDiscount" class="text-sm text-base-content/50 line-through">
            ${{ product.price.toFixed(2) }}
          </p>
          <p class="text-2xl font-bold text-primary">
            ${{ finalPrice.toFixed(2) }}
          </p>
        </div>

        <span
          class="rounded-full px-3 py-1 text-xs font-semibold"
          :class="inStock ? 'bg-success/20 text-success' : 'bg-error/20 text-error'"
        >
          {{ inStock ? `${product.stock} in stock` : 'Out of stock' }}
        </span>
      </div>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/80"
        >
          {{ tag }}
        </span>
      </div>

      <div class="pt-1">
        <RouterLink :to="`/products/${product.id}`" class="btn btn-primary w-full">Show Details</RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import { computed } from "vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const hasDiscount = computed(() => Number(props.product.discount) > 0);
const inStock = computed(() => Number(props.product.stock) > 0);

const finalPrice = computed(() => {
  const price = Number(props.product.price) || 0;
  const discount = Number(props.product.discount) || 0;
  return hasDiscount.value ? price - price * (discount / 100) : price;
});


onMounted(() => {
  console.log("ProductCard mounted");
});

onUnmounted(() => {
  console.log("ProductCard unmounted");
});
</script>