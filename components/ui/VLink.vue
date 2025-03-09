<template>
  <nuxt-link
    v-if="link"
    :to="link"
    :class="linkClass"
    :external="isExternalUrl(link)"
    :target="target"
  >
    <slot />
  </nuxt-link>
  <span v-else :class="linkClass">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { isExternalUrl } from "~/core/utils";
import {
  type LinkTargetType,
  type ElementVariantsTypes,
  LinkTargetEnum,
  ElementVariantsEnum,
} from "~/core/types/components";

defineOptions({
  name: "VLink",
});

interface ILinkProps {
  link: string;
  target?: LinkTargetType;
  variant?: ElementVariantsTypes;
}

const props = withDefaults(defineProps<ILinkProps>(), {
  target: LinkTargetEnum.SELF,
  variant: ElementVariantsEnum.PRIMARY,
});

const linkClass = computed(() => {
  return ["v-link", `v-link-${props.variant}`];
});
</script>

<style lang="scss" scoped>
.v-link {
  &-primary {
    @apply hover:text-pink-400 hover:underline underline-offset-4;
  }
  &-secondary {
    @apply text-white bg-black rounded-[8px] px-4 py-2;
  }
}
</style>
