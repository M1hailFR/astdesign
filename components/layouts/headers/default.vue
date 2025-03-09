<template>
  <header :class="[fields.theme, fields.type]">
    <div class="container relative flex items-center gap-6 py-1 h-full">
      <div class="transition-transform duration-500">
        <VLink link="/" target="_self">
          <h1 class="font-bold text-2xl text-black mb-0">{{ fields.text }}</h1>
        </VLink>
      </div>

      <div
        class="hidden lg:flex items-center justify-between lg:flex-1 transition-transform duration-500"
      >
        <div class="flex-1 flex justify-center">
          <slot name="header-menu" />
        </div>

        <div class="flex-1 flex justify-center">
          <slot name="header-cart" />
        </div>
      </div>
      <div>
        <div class="flex items-center gap-2 relative text-black">
          <Icon
            name="material-symbols:shopping-basket-outline"
            class="block text-2xl"
          />
          <div class="block text-sm font-semibold rounded-full pt-1 py-[2px]">
            <span>{{ cartStore.cartItemsCount || 0 }}</span>
            <span class="ml-2">Корзина</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { IHeaderDefaultProps } from "./shared";
import type { IFieldsProps } from "~/core/types/components";
import { useCartStore } from "~/store/cart";
import { VLink } from "~/components/ui";

defineOptions({
  name: "HeaderDefault",
});

defineProps<IFieldsProps<IHeaderDefaultProps>>();

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
header {
  @apply top-0 z-50 w-full shadow-lg-b py-2 transition-all h-[92px];
  &.light {
    @apply bg-white text-black;
  }
  &.dark {
    @apply bg-black text-white;
  }
}
</style>
