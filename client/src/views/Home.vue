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

    <Searchbar />

      <div class="bottom-content">
          <div class="post" v-for="(p) in posts" :key="p.src">
            <post :post="p" />
        </div>
</div>
</div>
</template>

<script>
import Nav from '../components/Nav.vue';
import Post from '../components/Post.vue';
import session from '../services/session';
import { GetFeed} from '../services/posts';
import Searchbar from '../components/Searchbar.vue';
  
export default {
  components: { 
    Nav,
    Post,
    Searchbar
  },
  data: ()=> ({
    posts: []
  }),
  async mounted(){
    this.posts = await GetFeed(session.user.handle)
  }
}

</script>

<style>
    .tabs a{
        font-size: 18px;
    }
</style>
