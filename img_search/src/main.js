import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue'; 
import ImageFinder from './components/ImageFinder.vue'; 

const app = createApp(App);

app.component('ImageFinder', ImageFinder);

app.mount('#app'); 
