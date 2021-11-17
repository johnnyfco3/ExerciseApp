<template>
<div class="home">
  <Nav />
  <!--Main Content-->
  <div class="messages">
        <div class="notification is-light" :class="`is-${message.type}`" v-for="(message, i) in messages" :key="i">
            <button class="delete" @click.prevent="done(i)"></button>
            {{message.text}}
        </div>
    </div>

      <div class="bottom-content">
          <div class="post" v-for="(p, i) in posts" :key="p.src">
            <post :post="p" @remove="remove(p, i)" />
        </div>
</div>
</div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Post from '../components/Post.vue';
import session from '../services/session'
import { GetFeed, Delete } from '../services/posts'
  
export default {
  components: { 
    Nav,
    Post
  },
  data: ()=> ({
    posts: []
  }),
  async mounted(){
    this.posts = await GetFeed(session.user.handle)
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
    .tabs a{
        font-size: 18px;
    }
</style>
