import { createRouter, createWebHistory } from 'vue-router'
// import { createAuthGuard } from "@auth0/auth0-vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () =>
          import('../views/Dashboard.vue'),
          meta: {
            authRequired: false,
          },
          
  },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('../views/Feed.vue')
    },
    
    // { path: '*', component: () => import('../views/Feed.vue') }
  ],
});
// router.beforeEach((to, from, next) => {
//   const auth = getAuth();
//   if (to.matched.some(record => record.meta.authRequired)) {
    
//     if (auth.currentUser) {
//       next();
//     } else {
//       alert('You must be logged in to see this page');
//       next({
//         path: '/',
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router
