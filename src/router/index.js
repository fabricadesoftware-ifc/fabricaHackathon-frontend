import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../pages/global/HomeView.vue')
        },
        {
          path: '/editions',
          name: 'editions',
          component: () => import('../pages/edition/Editions.vue')
        },
        {
          path: '/editions/:edition',
          name: 'yearEdition',
          component: () => import('../pages/edition/DetailEdition.vue'),
          params: true
        },
        {
          path: '/editions/:edition/teams/:id',
          name: 'detailsProject',
          component: () => import('../pages/team/DetailTeam.vue'),
          params: true
        },
        {
          path: '/evaluate',
          name: 'evaluate',
          component: () => import('../pages/avaliator/EditionsAvaliator.vue')
        },
        {
          path: '/evaluate/:edition',
          name: 'evaluateEdition',
          component: () => import('../pages/avaliator/DetailEditionAvaliator.vue')
        },
        {
          path: '/evaluate/:edition/teams/:id',
          name: 'evaluateTeam',
          component: () => import('../pages/avaliator/EvaluateTeamAvaliator.vue')
        },
      ]
    },
    {
      path: '/',
      name: 'blank',
      component: () => import('../layouts/BlankLayout.vue'),
      children: [
        {
          path: '/auth',
          name: 'auth',
          component: () => import('../pages/avaliator/AuthAvaliator.vue')
        },
        {
          path: '/editions/:edition/teams/add',
          name: 'addTeam',
          component: () => import('../pages/team/AddTeam.vue'),
          params: true
        },
      ]
    }
  ]
})

export default router
