<template>
  <section class="container mx-auto px-4 py-6">
    <article
      class="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div class="grid md:grid-cols-[42%_58%]">
        <figure class="relative h-72 overflow-hidden md:h-full">
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

        <div class="space-y-5 p-6 md:p-7">
          <h1 class="text-3xl font-bold leading-tight">{{ product.title }}</h1>
          <p class="text-base leading-7 text-base-content/75">{{ product.description }}</p>

          <div class="flex flex-wrap items-center gap-3">
            <span
              class="rounded-full px-3 py-1 text-xs font-semibold"
              :class="inStock ? 'bg-success/20 text-success' : 'bg-error/20 text-error'"
            >
              {{ inStock ? `${product.stock} in stock` : 'Out of stock' }}
            </span>
          </div>

          <div class="flex items-end gap-3">
            <p class="text-3xl font-bold text-primary">${{ finalPrice }}</p>
            <p v-if="hasDiscount" class="text-base-content/50 line-through">${{ originalPrice }}</p>
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
            <button
              class="btn w-full md:w-auto outline-none border-none"
              :class="getCTAClass"
              :disabled="!inStock"
              @click="handleAddToCart"
            >
              {{ getCTALabel }}
            </button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/store/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const cartStore = useCartStore();
const router = useRouter();
const product = computed(() => props.product);

const inStock = computed(() => Number(props.product.stock) > 0);
const hasDiscount = computed(() => Number(props.product.discount) > 0);

const finalPrice = computed(() => {
  const price = Number(props.product.price) || 0;
  const discount = Number(props.product.discount) || 0;
  const value = hasDiscount.value ? price - price * (discount / 100) : price;
  return value.toFixed(2);
});

const originalPrice = computed(() => {
  const price = Number(props.product.price) || 0;

  if (!hasDiscount.value) {
    return price.toFixed(2);
  }

  return price.toFixed(2);
});

const getCTALabel = computed(() => {
  return inStock.value ? "Add to Cart" : "Out of Stock";
});

const getCTAClass = computed(() => {
  return inStock.value ? "btn-primary" : "btn-disabled";
});

const handleAddToCart = async () => {
  const added = await cartStore.addToCart(props.product);

  if (added && product.value) {
    product.value.stock = Math.max(Number(product.value.stock || 0) - 1, 0);
    router.push({ name: "Cart" });
  }
};
</script>