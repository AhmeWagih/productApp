import { useApi } from "@/compasables/useAPi";
import {defineStore} from "pinia";
import { ref } from "vue";

export const useProductStore = defineStore("product",()=> {
  // State
  const products = ref([]);
  const isLoading = ref(false);
  const isError = ref(false);

  // Getters

  // Actions
  const fetchAllProducts = async () => {
    const response = await useApi(
      "http://localhost:3000/products",
      "GET",
      {},
      isLoading,
      isError
    );
    products.value = response.data;
  };

  const fetchProductById = async (id) => {
    const response = await useApi(
      `http://localhost:3000/products/${id}`,
      "GET",
      {},
      isLoading,
      isError
    );

    return response.data;
  };

  const decreaseStock = async (id) => {
    const currentProduct = products.value.find((item) => Number(item.id) === Number(id));
    const response = currentProduct
      ? { data: currentProduct }
      : await useApi(
          `http://localhost:3000/products/${id}`,
          "GET",
          {},
          isLoading,
          isError
        );

    const product = response?.data;

    if (!product) {
      return null;
    }

    const updatedProduct = {
      ...product,
      stock: Math.max(Number(product.stock || 0) - 1, 0),
    };

    await useApi(
      `http://localhost:3000/products/${id}`,
      "PUT",
      updatedProduct,
      isLoading,
      isError
    );

    products.value = products.value.map((item) =>
      Number(item.id) === Number(id) ? updatedProduct : item
    );

    return updatedProduct;
  };


  return {
    products,
    isLoading,
    isError,
    fetchAllProducts,
    fetchProductById,
    decreaseStock
  }
})