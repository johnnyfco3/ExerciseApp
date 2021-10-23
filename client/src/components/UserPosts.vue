<template>
 <div class="columns">
        <div class="column is-two-thirds">
      <div class="card">
  <div class="card-image">
    <p class="subtitle is-5">{{post.user.firstName}} {{post.user.lastName}} </p>
    <figure class="image is-5by3">
      <img :src="post.src" :alt="post.alt">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="subtitle is-4">{{post.user.handle}}</p>
        <p class="subtitle is-6"><br>{{post.category}}<br></p>
      </div>
    </div>

    <div class="content">
      <p class="subtitle is-6">{{post.user.handle}}</p> {{post.caption}}
    </div>
  </div>
  <footer class="card-footer">
    <a href="#" class="card-footer-item">Like</a>
    <a href="#" class="card-footer-item">Comment</a>
    <a href="#" class="card-footer-item">Share</a>
  </footer>
</div>    
</div> 
</div>
</template>

<script>
export default {
  props: {
        post: Object
    }
}
</script>

<style>
</style>