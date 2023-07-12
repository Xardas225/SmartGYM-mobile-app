import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './assets/styles/index.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as IoIcons from "oh-vue-icons/icons/io";

const Io = Object.values({ ...IoIcons });
addIcons(...Io);

createApp(App).component("v-icon", OhVueIcon).use(router).mount('#app')
