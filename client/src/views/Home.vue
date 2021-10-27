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
          <div class="posts" v-for="p in posts" :key="p.src">
        <post :post="p" />
        </div>
</div>
</div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Post from '../components/Post.vue';
import session from '../services/session'
import { GetWall } from '../services/posts'
  
export default {
  components: { 
    Nav,
    Post
  },
  data: ()=> ({
    posts: GetWall(session.user.handle),
    messages: session.messages
  }),
  methods: {
        done(i){
            this.messages.splice(i, 1);
        }
    }
}

</script>

<style>
    .tabs a{
        font-size: 18px;
    }
</style>
