<template>
  <div class="group relative w-full">
    <div
      class="w-full hover:shadow-xl hover:bg-white hover:z-10 hover:absolute hover:p-6 hover:cursor-pointer hover:-translate-x-6 hover:-translate-y-6 hover:w-[calc(100%+3rem)] hover:rounded-lg"
    >
      <div
        class="flex items-center justify-center relative w-full aspect-square rounded-[12px]"
      >
        <img
          :src="data.image || 'https://via.placeholder.com/150'"
          alt="product"
          class="w-full h-full object-cover rounded-[12px]"
        />
        <div
          class="absolute left-2 bottom-2 bg-white rounded-[4px] px-[6px] py-[2px] max-w-[40px] text-pink-400"
        >
          <p class="text-sm font-medium">-35%</p>
        </div>
      </div>
      <p class="text-md font-bold mt-[12px]">
        {{ data.newPrice }} ₽<span
          v-if="data.oldPrice"
          class="text-sm line-through text-gray-400"
          >{{ data.oldPrice }} ₽</span
        >
      </p>
      <p class="text-xs font-semibold uppercase line-clamp-1">
        {{ data.brand }}
      </p>
      <p class="text-sm font-normal my-1 line-clamp-2">{{ data.name }}</p>

      <VButton
        size="small"
        class="bg-black text-white rounded-[8px] hidden group-hover:block"
        @click="cartStore.addItem(data)"
      >
        В корзину
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VButton } from "~/components/ui";
import type { IProduct } from "~/core/types/product";
import { useCartStore } from "~/store/cart";

defineOptions({
  name: "VProductsCard",
});

interface IProductsCardProps {
  data: IProduct;
}

defineProps<IProductsCardProps>();

const cartStore = useCartStore();
</script>
