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

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/createpost',
    name: 'CreatePost',
    component: CreatePost
  },
  {
    path: '/editprofile',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/planner',
    name: 'Planner',
    component: Planner
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/track',
    name: 'Track',
    component: Track
  },
  {
    path: '/trackdts',
    name: 'Trackdts',
    component: Trackdts
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
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

export default router
