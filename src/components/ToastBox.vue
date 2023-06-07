//ToastBox.vue

<template>
  <div class="toast-container position-absolute top-0 end-0 p-3">
    <b-toast
      v-for="toast in toasts"
      :key="toast.id"
      v-model="toast.active"
      :title="toast.title"
      :autoHide="toast.autoHide"
      :variant="toast.variant"
    >
      {{ toast.msg }}
    </b-toast>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import { useToastStore } from '../stores/toast';
const store = useToastStore();
const toasts = computed(() => store.getToasts);
watch(toasts, store.deleteInactiveToasts, { deep: true });
</script>
