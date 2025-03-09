import { defineStore } from "pinia";

interface Notification {
  id: number;
  message: string;
  type?: "success" | "error" | "info";
}

export const useNotificationStore = defineStore("notification", () => {
  const messages = ref<Notification[]>([]);
  let nextId = 0;

  function show(notification: Omit<Notification, "id">) {
    const id = nextId++;
    messages.value.unshift({ ...notification, id });

    if (messages.value.length > 5) {
      messages.value.pop();
    }

    setTimeout(() => {
      messages.value = messages.value.filter((msg) => msg.id !== id);
    }, 3000);
  }

  return {
    messages,
    show,
  };
});
