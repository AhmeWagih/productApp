<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

const storeName = 'WEGOSTORE';
const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '/'
  },
  {
    id: 2,
    name: 'Products',
    href: '/products'
  },
  {
    id: 3,
    name: 'About',
    href: '/about'
  }
]

const products = ref([
  {
    "id": 1,
    "name": "Cozy Sneakers",
    "description": "High-quality sneakers that go with everything you wear.",
    "image": "https://picsum.photos/600/400?1",
    "badge": "New",
    "price": 120,
    "discount": 20,
    "stock": 10,
    "tags": ["Fashion", "Casual", "Sport"]
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "description": "Built for speed and comfort on any terrain.",
    "image": "https://picsum.photos/600/400?2",
    "badge": "",
    "price": 90,
    "discount": 10,
    "stock": 5,
    "tags": ["Sport", "Running"]
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "description": "Rugged boots for everyday adventures.",
    "image": "https://picsum.photos/600/400?3",
    "badge": "SALE",
    "price": 150,
    "discount": 0,
    "stock": 0,
    "tags": ["Casual", "Winter"]
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "description": "Light and breezy for sunny days.",
    "image": "https://picsum.photos/600/400?4",
    "badge": "",
    "price": 30,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  }
])

const route = useRoute();
const viewProps = computed(() => {
  if (route.name === 'Home') {
    return { products: products.value.slice(0, 3) };
  }

  if (route.name === 'Products' || route.name === 'ProductDetails') {
    return { products: products.value };
  }

  return {};
});


function handleBuy(productId) {
  const id = Number(productId);
  const product = products.value.find((p) => p.id === id);
  if (!product || Number(product.stock) <= 0) return;

  const updateStock = Math.max(0, Number(product.stock ?? 0) - 1);
  product.stock = updateStock;
  console.log(`Purchased product #${id}. Remaining stock: ${product.stock}`);
}

const emit = defineEmits(['buy'])

const totalStock = computed(() => products.value.reduce((acc, p) => acc + (p.stock !== undefined  ? p.stock : 0), 0));

</script>

<template>
  <div class="flex flex-col">
    <Navbar :totalStock="totalStock" :brand="storeName" :links="navLinks" />
    <main class="flex flex-col gap-6">
      <RouterView v-slot="{ Component }">
        <component :is="Component" v-bind="viewProps" @buy="handleBuy" />
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
