<template>
<div class="nav">
  <Nav />
  <!--Main Content-->
      <div class="bottom-content">
        <Post />
      </div>
</div>

</template>

<script>
import Nav from '../components/Nav.vue';
import Post from '../components/Post.vue';

export default {
  components: { 
    Nav,
    Post
  }
}

</script>

<style>
    
    .main-content .subtitle{
      font-family: cursive;
      color: darkcyan;
      font-size: 40px;
      text-align: center;
    }

    .bottom-content{
        margin-top: 50px;
    }
    .tabs a{
        font-size: 18px;
    }
</style>
