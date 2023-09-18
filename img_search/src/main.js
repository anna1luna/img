import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue'; 
import ImageFinder from './components/ImageFinder.vue';
import RandomImg from './components/RandomImg.vue'; 
const app = createApp(App);

app.component('ImageFinder', ImageFinder);
app.component('RandomImg', RandomImg);

app.mount('#app'); 
