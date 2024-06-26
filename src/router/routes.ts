import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/typography',
        component: () => import('components/TypographyVue.vue'),
      },
      {
        path: '/color-palette',
        component: () => import('components/ColorPaletteVue.vue'),
      },
      {
        path: '/dark-mode',
        component: () => import('components/DarkModeVue.vue'),
      },
      {
        path: '/spacing',
        component: () => import('components/SpacingVue.vue'),
      },
      {
        path: '/shadow',
        component: () => import('components/ShadowVue.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
