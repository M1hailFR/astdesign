<template>
  <div
    class="container flex items-center justify-center h-[calc(100dvh-92px)] text-center relative"
  >
    <div>
      <VLink :link="fields.link" variant="primary">
        <div class="text-2xl flex items-center justify-center text-pink-400">
          {{ fields.button }}
        </div>
      </VLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VLink } from "~/components/ui";
import { MAIN_BANNER_CONFIG } from "~/configs/pages/index";

const fields = MAIN_BANNER_CONFIG.block_fields;
</script>
