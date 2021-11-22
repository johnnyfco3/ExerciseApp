<template>
<div class="searchbar">
  <form @submit.prevent="search()">
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Find a friend" :v-model="user.handle">
      </p>
      <p class="control">
        <button class="button is-info" type="submit">
          Search
        </button>
      </p>
    </div>
  </form>
</div>
</template>

<script>
import { Get, GetByHandle } from '../services/users'
export default {
    data: ()=> ({
        user: []
  }),
  async mounted(){
    this.user = await GetByHandle(this.user.handle)
  },
  methods:{
    async search(){
      const response = await Get(this.user.handle)
      if(response){
          this.$router.push('/other');
      }
    }
  }

}
</script>

<style>

</style>