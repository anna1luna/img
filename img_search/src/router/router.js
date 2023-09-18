import { createRouter, createWebHistory } from 'vue-router';
import ImageView from './components/ImageView.vue'; // Import the component for displaying the image

const routes = [
  // Other routes...
  {
    path: '/image/:id', // Dynamic route parameter for the image ID
    name: 'ImageView', // Route name
    component: ImageView, // Component to display the image
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;