<template>
  <div class="home">
    <Nav />
    <div class="main-content">
  <div class="columns is-multiline">
      <div class="column is-full">
        <div class="contents">
          <h1 class="subtitle1"> Workout Planner <a class="view" href="planner.html">View all</a></h1>
          <W-Planner />
      <h1 class="subtitle1">Browser</h1>
      <div class="tabs is-centered">
        <ul>
          <li class="is-active"><a href="home-ch.html">Chest/Triceps</a></li>
          <li><a href="home-b.html">Back/Biceps</a></li>
          <li><a href="home-s.html">Shoulders</a></li>
          <li><a href="home-l.html">Legs</a></li>
          <li><a href="home-a.html">Abs</a></li>
          <li><a href="home-c.html">Cardio</a></li>
        </ul>
      </div>
      <div class="photos">
      <div class="columns">
        <div class="column is-one-third is-offset-one-third">
          <div class="post">
            <post />

          </div>
        </div>
      </div>    
    </div> 
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/Nav.vue"
import Post from '../components/Post.vue'
import WPlanner from '../components/WPlanner.vue'

export default {
  components: {
    Nav,
    Post,
    WPlanner
  }
}


</script>

<style>
.main-content{
      margin-left: 70px;
    }
    .contents .subtitle1{
      font-family: cursive;
      color: darkcyan;
      text-align: center;
      font-size: 40px;
    }
    .contents .subtitle1 a{
      font-family:'Times New Roman', Times, serif;
      font-size: 15px;
    }
    .tabs li{
        margin-right: 70px;
        margin-left: 10px;
    }
    .tabs a{
        font-size: 20px;
    }
    .popup .overlay{
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vh;
      height: 100vh;
      z-index: 1;
      display: none;
    }
    .popup .content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%) scale(0);
      background: beige;
      width: 450px;
      height: 220px;
      z-index: 2;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    }
    .popup .close-btn{
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 20px;
      width: 30px;
      height: 30px;
      background: #222;
      color: #fff;
      font-size: 25px;
      font-weight: 600;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
    }
    .popup.active .overlay{
      display: block;
    }
    .popup.active .content{
    transition: all 300ms ease-in-out;
    transform: translate(-50%,-50%) scale(1);
    }
    .popup h1{
      font-family: cursive;
    }
</style>
