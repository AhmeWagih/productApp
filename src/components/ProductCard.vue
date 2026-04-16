<template>
  <div class="card bg-base-100 w-96 shadow-sm">
    <figure>
      <img :src="product.image" :alt="product.name" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <div class="card-actions justify-start">
        <!-- <button class="btn btn-primary">Show Details</button> -->
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>