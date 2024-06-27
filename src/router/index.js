import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/editions',
      name: 'editions',
      component: () => import('../views/EditionView.vue')
    },
    {
      path: '/editions/:year',
      name: 'yearEdition',
      component: () => import('../views/EditionYearView.vue'),
      params: true
    },
    {
      path: '/editions/:year/projects',
      name: 'projectsYearEdition',
      component: () => import('../views/EditionYearProjectsView.vue'),
      params: true
    },
    {
      path: '/editions/:year/projects/:id',
      name: 'DetailsProject',
      component: () => import('../views/ProjectDetailsView.vue'),
      params: true
    }
  ]
})

export default router
