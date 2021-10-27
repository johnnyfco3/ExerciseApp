import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import Community from '../views/Community.vue'
import CreatePost from '../views/CreatePost.vue'
import EditProfile from '../views/EditProfile.vue'
import Info from '../views/Info.vue'
import Planner from '../views/Planner.vue'
import Signup from '../views/Signup.vue'
import Track from '../views/Track.vue'
import Trackdts from '../views/Trackdts.vue'
import Profile from '../views/Profile.vue'
import Session from '../services/session'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresLogin: true }
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: { requiresLogin: true }
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost,
    meta: { requiresLogin: true }
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile,
    meta: { requiresLogin: true }
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/planner',
    name: 'Planner',
    component: Planner,
    meta: { requiresLogin: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/track',
    name: 'Track',
    component: Track,
    meta: { requiresLogin: true }
  },
  {
    path: '/trackdts',
    name: 'Trackdts',
    component: Trackdts,
    meta: { requiresLogin: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresLogin: true }
    
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.meta.requiresLogin && !Session.user){
    next('/login');
  }else{
    next();
  }
})

export default router
