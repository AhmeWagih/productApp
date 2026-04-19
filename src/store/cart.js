import { computed } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@/compasables/useLocalStorage";
import { useProductStore } from "@/store/product";

const computedPrice = (product) => {
  const price = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  return discount > 0 ? price - price * (discount / 100) : price;
};

const buildCartItem = (product) => ({
  ...product,
  price: computedPrice(product),
  quantity: 1,
});

export const useCartStore = defineStore("cart", () => {
  // State
  const items = useLocalStorage("cart", []);
  const productStore = useProductStore();

  // Getters
  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
  );

  const totalPrice = computed(() =>
    items.value.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0),
      0
    )
  );

  // Actions
  const addToCart = async (product) => {
    if (!product || Number(product.stock) <= 0) {
      return false;
    }
    const existingItem = items.value.find((item) => Number(item.id) === Number(product.id));
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      items.value.push(buildCartItem(product));
    }
    await productStore.decreaseStock(product.id);
    return true;
  };

  const removeFromCart = (id) => {
    items.value = items.value.filter((item) => Number(item.id) !== Number(id));
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
});