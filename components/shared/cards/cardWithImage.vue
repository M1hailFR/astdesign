<template>
  <div class="card group relative w-full">
    <div class="card-inner">
      <div
        v-if="data.image"
        class="flex items-center justify-center relative w-full aspect-square rounded-[12px]"
      >
        <img
          :src="data.image"
          @error="getDefaultImage"
          class="w-full h-full object-cover rounded-[12px]"
        />
        <div
          class="absolute left-2 bottom-2 bg-white rounded-[4px] px-[4px] py-[2px] max-w-[40px] text-pink-400"
        >
          <p class="text-sm font-medium">-35%</p>
        </div>
      </div>
      <p class="text-base font-bold mt-[12px]">
        {{ data.newPrice }} ₽<span
          v-if="data.oldPrice"
          class="text-sm line-through text-gray-400"
          >{{ data.oldPrice }} ₽</span
        >
      </p>
      <p class="text-xs font-semibold uppercase line-clamp-1">
        {{ data.brand }}
      </p>
      <p class="text-sm font-normal my-[3px] line-clamp-2">{{ data.name }}</p>

      <VButton
        size="small"
        class="bg-black text-white rounded-[8px] hidden group-hover:block mt-2"
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
  name: "CardWithImage",
});

interface IProductsCardProps {
  data: IProduct;
}

defineProps<IProductsCardProps>();

const cartStore = useCartStore();

const getDefaultImage = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = "/img/productDefault.png";
};
</script>

<style lang="scss" scoped>
.card {
  .card-inner {
    @apply w-full z-10 cursor-pointer;

    &:hover {
      @apply shadow-2xl bg-white z-10 absolute p-6 cursor-pointer -translate-x-6 -translate-y-6 w-[calc(100%+3rem)] rounded-lg;
    }
  }
}
</style>
