import { createWebHistory, createRouter, RouterOptions } from "vue-router";
import routes from './routes';

const router = createRouter(<RouterOptions> {
  history: createWebHistory(),
  routes,
});

export default router;
