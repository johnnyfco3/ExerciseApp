<template>
  <div class="nav">
      <Nav />
      <searchbar />
      <div class="columns is-multiline">
      <div class="column is-two-fifths">
        <div class="user-image">
            <figure class="image">
                <img class="is-rounded" :src="users.pic" >
            </figure>
        </div>
    </div>
    <div class="column is-one-third">
      <div class="features">
        <h1 class="subtitle is-3"><span1>{{users.handle}}</span1></h1>
        <div class="bio">
          <h1 class="subtitle">Age: {{users.age}}</h1>
          <h1 class="subtitle">Height: {{users.height}}</h1>
          <h1 class="subtitle">Weight: {{users.weight}}</h1>
      </div>
    </div>
        <div class="options">
            <button class="button is-link" style="font-weight: 600;" @click="follow()">
                Follow
              </button>
              <button class="button is-link" style="font-weight: 600;" @click="unfollow()">
                Unfollow
              </button>
        </div>
    </div>
  </div>
      <div class="tabs is-centered">
    <ul>
      <li class="is-active"><a>Highlights</a></li>
    </ul>
  </div>
  <div class="post" v-for="(p) in posts" :key="p.src">
    <user-posts :post="p"/>
  </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import { GetWall } from '../services/posts'
import UserPosts from '../components/UserPosts.vue'
import Searchbar from '../components/Searchbar.vue'
import { GetByHandle } from '../services/users'
import { Follow, UnFollow } from '../services/friends'
import session from '../services/session'

export default {
  components: { Nav,
    UserPosts,
    Searchbar
   },
  data: ()=> ({
    posts: [],
    users: []
  }),
  async mounted(){
    this.posts = await GetWall(this.user.handle);
    this.users = await GetByHandle(this.user.handle);
  },
  methods:{
    async follow(){
      const response = await Follow(session.user.handle, this.user.handle);
      if(response)
      {
        return;
      }
    },
    async unfollow(){
      const response = await UnFollow(session.user.handle, this.user.handle);
      if(response)
      {
        return;
      }
    }
  }
}
</script>

<style>

</style>