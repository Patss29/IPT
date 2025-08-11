import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/guest',
      component: () => import('../layouts/GuestLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/guest/login'
        },
        {
          path: 'login',
          name: 'Login',
          component: () => import('../views/guest/LoginView.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('../views/guest/RegistrationView.vue'),
        },
      ]
    },
    {
      path: '/',
      component: () => import('../layouts/AppLayout.vue'),
      children: [
        {
          path: '',
          name: 'Feed',
          component: () => import('../views/authenticated/FeedView.vue'),
        },
        {
          path: 'communities',
          name: 'Communities',
          component: () => import('../views/authenticated/CommunitiesView.vue'),
        },
        {
          path: 'assignments',
          name: 'Assignments',
          component: () => import('../views/authenticated/AssignmentsView.vue'),
        },
        {
          path: 'chat',
          name: 'Chat',
          component: () => import('../views/authenticated/ChatView.vue'),
        },
      ]
    },
    {
      path: '/page-not-found',
      name: 'page.not.found',
      component: () => import('../views/errors/NoPageFound.vue'),
    },
  ],
})

export default router
