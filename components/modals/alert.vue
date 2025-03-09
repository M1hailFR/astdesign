<template>
  <Transition-group name="slide-right">
    <div
      v-for="msg in notification.messages"
      :key="msg.id"
      :class="[
        'fixed right-4 p-4 rounded-lg shadow-3xl z-30',
        msg.type === 'success'
          ? 'bg-green-400'
          : msg.type === 'error'
            ? 'bg-red-400'
            : 'bg-blue-400',
      ]"
      :style="`bottom: ${notification.messages.indexOf(msg) * 4 + 1}rem`"
      class="text-white"
    >
      <p class="text-xs font-bold">{{ msg.message }}</p>
    </div>
  </Transition-group>
</template>

<script setup lang="ts">
import { useNotificationStore } from "~/store/notification";

const notification = useNotificationStore();
</script>
