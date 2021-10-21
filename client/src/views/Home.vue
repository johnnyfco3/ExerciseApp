<template>
<div class="nav">
  <Nav />
  <!--Main Content-->
  <div class="top-content">
    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Monday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Chest/Triceps Day
  </div>
</article>
    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Tuesday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Back/Biceps Day
  </div>
</article>
    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Wednesday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Legs Day
  </div>
</article>

    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Thursday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Chest/Triceps Day
  </div>
</article>
    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Friday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Back/Biceps Day
  </div>
</article>
    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Saturday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Rest Day
  </div>
</article>
    <article class="message" style="width: 20%; text-align: center;">
  <div class="message-header">
    <p>Sunday</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body" style="font-family:cursive; font-size: 25px; color:darkcyan;">
    Rest Day
  </div>
</article>
  </div>
      <div class="bottom-content" v-for="p in posts" :key="p.src">
        <post :post="p" />
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
    posts: GetWall(session.user.handle)
  })
}

</script>

<style>
    .bottom-content{
        margin-top: 50px;
    }
    .tabs a{
        font-size: 18px;
    }
    .top-content .message{
      display: inline-block; /* the default for span */
      margin-right: 72px;
  
    }
</style>
