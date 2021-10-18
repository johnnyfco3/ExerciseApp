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
  <Post />
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Post from '../components/Post.vue'
import UserInfo from '../components/UserInfo.vue'
export default {
  components: { Nav, UserInfo, Post },

}
</script>

<style>

</style>