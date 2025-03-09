<template>
  <button
    class="v-button-custom"
    :class="sizeClasses"
    v-bind="{ ...props, ...$attrs }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { type SizesType, SizesEnum } from "~/core/types/components";

defineOptions({
  name: "VButton",
  inheritAttrs: false,
});

interface IButtonProps {
  size?: SizesType;
  disabled?: boolean;
}

const props = withDefaults(defineProps<IButtonProps>(), {
  size: SizesEnum.MEDIUM,
  disabled: false,
});

const sizeClasses = computed(() => {
  switch (props.size) {
    case SizesEnum.SMALL:
      return "px-6 py-3";
    case SizesEnum.MEDIUM:
      return "px-7 py-4";
    case SizesEnum.LARGE:
      return "px-8 py-5";
  }
  return "";
});
</script>

<style lang="scss" scoped>
.v-button-custom {
  background: #000;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;

  &:not(:disabled) {
    &:hover {
      background: #3f3f3f;
      opacity: 0.9;
    }

    &:active {
      transform: translateY(0);
    }
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
