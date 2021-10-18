<template>
  <nav class="navbar is-warning">
  <div class="navbar-brand">
    <img src="https://i.pinimg.com/736x/44/9a/f1/449af1b309336d6b61c200db5410d4ea.jpg" style="height:75px; border-radius: 50%; border: 5px solid #FEDE00;">
    <a class="navbar-item"><span>Gainz</span></a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" :class="{ 'is-active': navBarIsActive }" @click="navBarIsActive = !navBarIsActive">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': navBarIsActive }">
    <div class="navbar-end">
        <login-badge />
      </div>
        </div>
      </nav>
</template>

<script>
import LoginBadge from './LoginBadge.vue'

export default {
    components: { 
        LoginBadge
    },

}
</script>

<style>

</style>