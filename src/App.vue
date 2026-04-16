<script setup>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
import ProductDetails from './components/ProductDetails.vue';
import RelatedProduct from './components/RelatedProduct.vue';

</script>

<template>
  <div class="flex flex-col gap-6">
    <Navbar />
    <ProductDetails />
    <RelatedProduct />
    <Footer />
  </div>
</template>

<style scoped></style>
