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
        <div class="goals" style="width:30%;">
             <nav class="panel">
  <p class="panel-heading" style="text-align:center; color:darkcyan;">
    Community
  </p>
  <div class="panel-block">
    <p class="control">
      <input class="input" type="text" placeholder="Search">
    </p>
  </div>
  <p class="panel-tabs">
    <a class="is-active" style="color:black;">Motivators</a>
    <a style="color:black;">Inspires</a>
  </p>
  <a class="panel-block">
    name
  </a>
  <a class="panel-block">
    name
  </a>
  <a class="panel-block">
    name
  </a>
  <a class="panel-block">
    name
  </a>
  <a class="panel-block">
    name
  </a>
  <a class="panel-block">
    name
  </a>
</nav>
<nav class="panel">
  <p class="panel-heading" style="text-align:center; color:darkcyan;">
    Goals
  </p>
  <a class="panel-block">
    Monday
  </a>
  <a class="panel-block">
    Tuesday
  </a>
  <a class="panel-block">
    Wednesday
  </a>
  <a class="panel-block">
    Thursday
  </a>
  <a class="panel-block">
    Friday
  </a>
  <a class="panel-block">
    Saturday
  </a>
  <a class="panel-block">
    Sunday
  </a>
</nav>
          </div>
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
    .bottom-content{
      width:100%;
      height: 100%;
      }
    .goals{
      float: right;
      margin-right: 20px;
    }
    .posts {
      float: left;
    }
</style>
