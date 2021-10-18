<template>
  <nav class="navbar is-warning">
    <div class="navbar-brand">
      <img src="https://i.pinimg.com/736x/44/9a/f1/449af1b309336d6b61c200db5410d4ea.jpg" style="height:75px; border-radius: 50%; border: 5px solid #FEDE00;">
      <router-link class="navbar-item" to="/home"><span>Gainz</span></router-link>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
      <div class="navbar-start">
        <router-link class="navbar-item is-tab" to="/home" active-class="is-active" exact>
          Home
        </router-link>

        <router-link class="navbar-item is-tab" to="/createpost" active-class="is-active">
          Post
        </router-link>

        <router-link class="navbar-item is-tab" to="/profile" active-class="is-active">
          Profile
        </router-link>

        <router-link class="navbar-item is-tab" to="/planner" active-class="is-active">
          Workout Planner
        </router-link>
        
        <router-link class="navbar-item is-tab" to="/community" active-class="is-active">
          Community
        </router-link>
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
.navbar-item{
  font-weight: 600;
  font-size: 18px;
}
</style>