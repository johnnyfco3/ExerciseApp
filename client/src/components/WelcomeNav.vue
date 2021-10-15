<template>
  <nav class="navbar is-light">
  <div class="navbar-brand">
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