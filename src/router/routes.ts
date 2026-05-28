import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Home', requiresAuth: false, layout: DefaultLayout },
  },
  {
    path: '/whiskies',
    name: 'whiskies',
    component: () => import('@/views/WhiskiesView.vue'),
    meta: { title: 'Whiskies', requiresAuth: false, layout: DefaultLayout },
  },
  {
    path: '/whiskies/:id',
    name: 'whisky-detail',
    component: () => import('@/views/WhiskyDetailView.vue'),
    meta: { title: 'Whisky', requiresAuth: false, layout: DefaultLayout },
    props: true,
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('@/views/CommunityView.vue'),
    meta: { title: 'Community', requiresAuth: true, layout: DefaultLayout },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { title: 'About', requiresAuth: false, layout: DefaultLayout },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: { title: 'My Profile', requiresAuth: true, layout: DefaultLayout },
  },
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/views/auth/LoginView.vue'),
    meta: { title: 'Sign in', requiresGuest: true, layout: AuthLayout },
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('@/views/auth/RegisterView.vue'),
    meta: { title: 'Join the circle', requiresGuest: true, layout: AuthLayout },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Not Found', layout: DefaultLayout },
  },
]
