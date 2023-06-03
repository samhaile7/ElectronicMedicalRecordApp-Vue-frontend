import { createRouter, createWebHistory } from 'vue-router'
// import { createAuthGuard } from "@auth0/auth0-vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/NavBarButtons.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: () => import('../views/ProfilePage.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () =>
          import('../views/Dashboard.vue'),
        
          
  },

    
    // { path: '*', component: () => import('../views/Feed.vue') }
  ],
});


export default router
