<script setup lang="ts">
import { ref } from 'vue';
import ToastBox from './components/ToastBox.vue';
import { useToastStore } from './stores/toast';
const toastTitle = ref('Hey');
const toastMsg = ref("What's up?");
const autoHide = ref(true);
const variant = ref('default');
const variants = ref([
  'default',
  'primary',
  'secondary',
  'danger',
  'warning',
  'success',
  'info',
]);
const store = useToastStore();

const makeToast = () => {
  const toast: Toast = {
    title: toastTitle.value,
    msg: toastMsg.value,
    autoHide: autoHide.value,
    variant: variant.value,
  };
  store.addToast(toast);
};
</script>

<template>
  <div id="app">
    <h2>Pinia Toast Store</h2>
    <label for="toast-title" class="form-label">Your Toast Title:</label>
    <b-form-input v-model="toastTitle" id="toast-title" />
    <label for="toast-msg" class="form-label">Your Toast Message:</label>
    <b-form-input v-model="toastMsg" id="toast-msg" />
    <b-form-checkbox v-model="autoHide"> Hide Automatically </b-form-checkbox>
    <span>Variant:</span>
    <b-form-select v-model="variant" :options="variants"></b-form-select>
    <b-button @click.prevent.stop="makeToast"> click to add toast </b-button>
    <toast-box />
  </div>
</template>
