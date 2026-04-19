<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/store/cart";

defineProps({
  brand: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    default: () => [],
  },
});

const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);
</script>

<template>
  <div class="bg-base-100 shadow">
    <div class="navbar max-w-7xl mx-auto">
      <div class="navbar-start">
        <h1 class="text-2xl font-bold">{{ brand }}</h1>
      </div>
      <div class="navbar-center">
        <ul class="menu menu-horizontal px-1">
          <li v-for="link in links" :key="link.id">
            <RouterLink :to="link.href">{{ link.name }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <RouterLink to="/cart" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 5h12m-8 0a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2"
              />
            </svg>
            <span
              v-if="totalItems > 0"
              class="indicator-item badge bg-green-400 rounded-full badge-sm -top-1 -right-1 h-5 min-w-5 px-1 text-[10px] font-bold leading-none text-primary-content border-0"
            >
              {{ totalItems }}
            </span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
