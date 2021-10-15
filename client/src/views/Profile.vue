<template>
  <div class="nav">
      <Nav />
      <User-Info />
      <div class="tabs is-centered">
    <ul>
      <li class="is-active"><a>Highlights</a></li>
      <li><a href="track.html">Progress Tracker</a></li>
      <li><a href="planner.html">Workout Planner</a></li>
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