<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="home-ch.html"><span>Gainz</span></a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="home-ch.html">
          Home
        </a>

        <a class="navbar-item" href="createpost.html">
          Post
        </a>

        <a class="navbar-item" href="userprofile.html">
          Profile
        </a>
        <a class="navbar-item" href="planner.html">
          Workout Planner
        </a>
        <a class="navbar-item" href="community.html">
          Community
        </a>
      </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <logout-badge />
            </div>
            </div>
          </div>
      </nav> 
</template>

<script>
import LogoutBadge from './LogoutBadge.vue'
export default {
  components: { 
      LogoutBadge },

}
</script>

<style>
.navbar span{
        font-family: cursive;
        font-size: 45px;
        margin-right: 15px;
        color: darkcyan;
}
</style>