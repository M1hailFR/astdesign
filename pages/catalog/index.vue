<template>
  <div class="container h-full">
    <VVerticalPadding
      :desktop-padding="CATALOG_CONFIG.desktopPadding"
      :mobile-padding="CATALOG_CONFIG.mobilePadding"
    >
      <h2 class="text-2xl font-bold mt-2">{{ fields.title }}</h2>
      <div
        class="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 mt-6 px-10 lg:px-0 py-6"
      >
        <CardWithImage
          v-for="(product, idx) in products"
          :key="idx"
          :data="product"
        />
      </div>
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { CardWithImage } from "~/components/shared";
import { VVerticalPadding } from "~/components/ui";
import { apiPath } from "~/core/utils";
import { CATALOG_CONFIG } from "~/configs/pages/catalog";

const fields = CATALOG_CONFIG.block_fields;

const products = ref([]) || [];

onMounted(async () => {
  const { data } = await useFetch(apiPath.products, {
    query: {
      count: 24,
    },
  });
  products.value = data?.value?.products;
});
</script>

<style lang="scss" scoped></style>
