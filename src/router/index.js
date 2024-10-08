import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../pages/global/HomeView.vue')
        },
        {
          path: '/editions',
          name: 'editions',
          component: () => import('../pages/edition/EditionsView.vue')
        },
        {
          path: '/editions/:edition',
          name: 'yearEdition',
          component: () => import('../pages/edition/DetailEditionView.vue'),
          params: true
        },
        {
          path: '/editions/:edition/teams/:id',
          name: 'detailsProject',
          component: () => import('../pages/team/DetailTeamView.vue'),
          params: true
        },
        {
          path: '/evaluate',
          name: 'evaluate',
          component: () => import('../pages/avaliator/EditionsAvaliatorView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/evaluate/:edition',
          name: 'evaluateEdition',
          component: () => import('../pages/avaliator/DetailEditionAvaliatorView.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/evaluate/:edition/teams/:id',
          name: 'evaluateTeam',
          component: () => import('../pages/avaliator/EvaluateTeamAvaliatorView.vue'),
          meta: { requiresAuth: true }
        },
      ]
    },
    {
      path: '',
      name: 'blank',
      component: () => import('../layouts/BlankLayout.vue'),
      children: [
        {
          path: '/auth',
          name: 'auth',
          component: () => import('../pages/avaliator/AuthAvaliatorView.vue')
        },
        {
          path: '/editions/:edition/teams/add',
          name: 'addTeam',
          component: () => import('../pages/team/AddTeamView.vue'),
          params: true
        },
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  const { isLogged } = useAuthStore();

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLogged) {
        next({path: '/auth'});
      } else {
        next();
    }
  }
  else {
    next();
  }
});

export default router;
