<template>
  <div :style="computedPadding">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useApplicationStore } from "~/store/application";

const appStore = useApplicationStore();

defineOptions({
  name: "VVerticalPadding",
});

interface IPaddingDetails {
  top: string;
  bottom: string;
}

interface IPaddingProps {
  desktopPadding: IPaddingDetails;
  mobilePadding: IPaddingDetails;
}

const { desktopPadding, mobilePadding } = defineProps<IPaddingProps>();

const computedPadding = computed(() => {
  const padding = appStore.windowW > 768 ? desktopPadding : mobilePadding;

  return {
    "padding-top": padding.top,
    "padding-bottom": padding.bottom,
  };
});
</script>
