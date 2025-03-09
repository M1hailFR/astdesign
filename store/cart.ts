import { defineStore } from "pinia";
import { useNotificationStore } from "./notification";
import type { IProduct } from "~/core/types/product";

export const useCartStore = defineStore("cart", () => {
  const notification = useNotificationStore();
  const items = ref<IProduct[]>([]);

  onMounted(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      items.value = JSON.parse(saved);
    }
  });

  watch(
    items,
    (newItems) => {
      localStorage.setItem("cart", JSON.stringify(newItems));
    },
    { deep: true },
  );

  const cartItemsCount = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.quantity || 1), 0);
  });

  function addItem(product: IProduct) {
    const existingItem = items.value.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
      notification.show({
        message: "Количество товара увеличено",
        type: "success",
      });
    } else {
      items.value.push({ ...product, quantity: 1 });
      notification.show({
        message: "Товар добавлен в корзину",
        type: "success",
      });
    }
  }

  return {
    items,
    cartItemsCount,
    addItem,
  };
});
