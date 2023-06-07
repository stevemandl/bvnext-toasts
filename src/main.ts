import { createPinia } from 'pinia';
import { createApp } from 'vue';
import BootstrapVueNext from 'bootstrap-vue-next';

import App from './App.vue';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(BootstrapVueNext);
app.mount('#app');
