import { createApp } from 'vue'
import App from './App.vue'
import {routes} from "./route"

const app = createApp(App);
app.use(routes);
app.mount('#app');

