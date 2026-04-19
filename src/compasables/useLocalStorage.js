import { ref, watch } from "vue";

const readStorageValue = (key, defaultValue) => {
  if (typeof window === "undefined") {
    return defaultValue;
  }
  const storedValue = window.localStorage.getItem(key);
  if (storedValue === null) {
    return defaultValue;
  }
  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(`Failed to parse localStorage key \"${key}\"`, error);
    return defaultValue;
  }
};

export const useLocalStorage = (key, defaultValue) => {
  const state = ref(readStorageValue(key, defaultValue));
  watch(
    state,
    (value) => {
      if (typeof window === "undefined") {
        return;
      }
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    { deep: true }
  );
  return state;
};