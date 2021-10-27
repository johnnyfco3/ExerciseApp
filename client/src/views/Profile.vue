<template>
  <div class="nav">
      <Nav />
      <User-Info />
      <div class="tabs is-centered">
    <ul>
      <li class="is-active"><a>Highlights</a></li>
      <li><router-link to="/track">Progress Tracker</router-link></li>
      <li><router-link to="/planner">Workout Planner</router-link></li>
    </ul>
  </div>
  <div class="photo-content" v-for="p in posts" :key="p.src">
    <user-posts :post="p" />
  </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import UserInfo from '../components/UserInfo.vue'
import session from '../services/session'
import { GetWall } from '../services/posts'
import UserPosts from '../components/UserPosts.vue'

export default {
  components: { Nav, UserInfo,
    UserPosts
   },
  data: ()=> ({
    posts: GetWall(session.user.handle)
  })
}
</script>

<style>

</style>