import { RouteRecordRaw } from 'vue-router';

const routes = <Array<RouteRecordRaw>>[
  {
    path: "/",
    name: "coins",
    component: () => import('@/views/Coins.vue'),
  },
  {
    path: "/fiat-currencies",
    name: "fiat-currencies",
    component: () => import('@/views/FiatCurrencies.vue'),
  },
  {
    path: "/404",
    name: '404',
    component: () => import('@/views/Error.vue'),
    props: () => ({
      code: 404,
      message: `Page not found.`,
      description: `This page don't exist in system.`,
    }),
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: '404' },
  },
];

export default routes;
