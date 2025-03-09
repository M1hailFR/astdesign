<template>
  <footer :class="[fields.theme, fields.type]">
    <div class="container relative flex items-center gap-6 py-1 h-full">
      <div class="transition-transform duration-500">
        <VLink link="/" target="_self">
          <h1 class="font-bold text-2xl text-white mb-0">{{ fields.text }}</h1>
        </VLink>
      </div>
      <div
        class="hidden lg:flex items-center justify-between lg:flex-1 transition-transform duration-500"
      >
        <div class="flex-1 flex justify-center">
          <slot name="footer-menu" />
        </div>

        <div class="flex-1 flex justify-center">
          <slot name="footer-cart" />
        </div>
      </div>
      <div class="flex flex-col">
        <p class="text-base block">Разработчик</p>
        <VLink
          :link="fields.developer?.link ?? ''"
          target="_target"
          class="block text-base"
        >
          {{ fields.developer?.name }}
        </VLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { IFooterDefaultProps } from "./shared";
import type { IFieldsProps } from "~/core/types/components";
import { VLink } from "~/components/ui";

defineOptions({
  name: "FooterDefault",
});

defineProps<IFieldsProps<IFooterDefaultProps>>();
</script>

<style lang="scss" scoped>
footer {
  @apply top-0 z-50 w-full shadow-lg-b py-2 transition-all h-[92px];
  &.light {
    @apply bg-white text-black;
  }
  &.dark {
    @apply bg-black text-white;
  }
}
</style>
