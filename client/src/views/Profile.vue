<template>
  <div class="nav">
      <Nav />
      <User-Info />
      <div class="tabs is-centered">
    <ul>
      <li class="is-active"><a>Highlights</a></li>
      <li><router-link to="/trackdts">Progress Tracker</router-link></li>
      <li><router-link to="/planner">Workout Planner</router-link></li>
    </ul>
  </div>
  <div class="post" v-for="(p, i) in posts" :key="p.src">
    <user-posts :post="p" @remove="remove(p, i)" />
  </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import UserInfo from '../components/UserInfo.vue'
import session from '../services/session'
import { GetWall, Delete } from '../services/posts'
import UserPosts from '../components/UserPosts.vue'

export default {
  components: { Nav, UserInfo,
    UserPosts
   },
  data: ()=> ({
    posts: []
  }),
  async mounted(){
    this.posts = await GetWall(session.user.handle)
  },
  methods:{
    async remove(post, i){
      const response = await Delete(post._id)
      if(response.deleted){
        this.posts.splice(i, 1)
      }
    }
  }
}
</script>

<style>

</style>