import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ProfileView from '../views/ProfileView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    props: {
      // user: {
      //   'first name': 'Max',
      //   'last name': 'Mustermann',
      //   birthday: '1980-01-01',
      //   'personnel number': '1234567',
      //   street: 'Stahnsdorfer Str.',
      //   'house number': '140A',
      //   'zip code': '14482',
      // },
      user: 'max.mustermann@mail.de',
    },
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
