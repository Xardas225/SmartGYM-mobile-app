import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
  },
  {
    path: '/nutrition',
    name: 'nutrition',
    component: () => import(/* webpackChunkName: "about" */ '../views/NutritionView.vue')
  },
  {
    path: '/training',
    name: 'training',
    component: () => import(/* webpackChunkName: "about" */ '../views/TrainingView.vue')
  },
  {
    path: '/health',
    name: 'health',
    component: () => import(/* webpackChunkName: "about" */ '../views/HealthView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
