<template>
  <div class="relative overflow-visible w-full h-full">
    <header-default :fields="HEADER_DEFAULT_CONFIG.block_fields" />
    <main class="transition-all duration-700">
      <NuxtPage />
    </main>
    <footer-default :fields="FOOTER_DEFAULT_CONFIG.block_fields" />
    <VAlert />
  </div>
</template>

<script setup lang="ts">
import { VAlert } from "~/components/modals";
import { HeaderDefault } from "~/components/layouts/headers";
import { FooterDefault } from "~/components/layouts/footers";
import {
  HEADER_DEFAULT_CONFIG,
  FOOTER_DEFAULT_CONFIG,
} from "~/configs/layouts/default";
import { useApplicationStore } from "~/store/application";

const appStore = useApplicationStore();
const route = useRoute();
const loading = ref<boolean>(true);
const isShow = ref<boolean>(false);

onMounted(() => {
  appStore.initializeWindowState();
  (document.readyState === "complete"
    ? startTransition
    : () => window.addEventListener("load", startTransition))();
});

onUnmounted(() => {
  appStore.destroyWindowStateListeners();
});

watch(route, () => {
  pageToTop();
});

const startTransition = () => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
  setTimeout(() => {
    isShow.value = true;
  }, 3200);

  window.removeEventListener("load", startTransition);
};

const pageToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>
