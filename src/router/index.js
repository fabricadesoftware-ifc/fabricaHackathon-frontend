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
      path: '/editions/:edition',
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
      path: '/editions/:edition/teams/:id',
      name: 'detailsProject',
      component: () => import('../views/ProjectDetailsView.vue'),
      params: true
    },
    {
      path: '/editions/:edition/add',
      name: 'addEdition',
      component: () => import('../views/AddEditionView.vue'),
      params: true
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: () => import('../views/EvaluateView.vue')
    },
    {
      path: '/evaluate/:edition',
      name: 'evaluateEdition',
      component: () => import('../views/EvaluateEditionView.vue')
    },
    {
      path: '/evaluate/:edition/teams/:id',
      name: 'evaluateTeam',
      component: () => import('../views/EvaluateTeamView.vue')
    }
  ]
})

export default router
