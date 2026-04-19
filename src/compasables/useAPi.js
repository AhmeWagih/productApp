export const useApi = async (url, method, data = {}, isLoading, isError) => {
  try {
    isLoading.value = true;
    isError.value = false;

    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (method !== "GET" && method !== "HEAD") {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const result = await response.json();

    return {
      data: result,
      isError,
      method,
      isLoading,
    };
  } catch (error) {
    isError.value = true;
    console.error(error);

    return {
      data: null,
      isError,
      method,
      isLoading,
    };
  } finally {
    isLoading.value = false;
  }
};
