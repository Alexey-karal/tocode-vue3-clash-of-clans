import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import NotFoundPage from './pages/notFound';

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage,
    },
  ],
});

export default routers;
