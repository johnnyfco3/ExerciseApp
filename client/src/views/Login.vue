<template>
<div class="page">
  <h1 class="title is-1"><span>Gainz</span></h1>
  <div class="columns">
        <div class="column is-two-thirds">
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-12">Log In</p>
        </div>
      </div>
      <div class="content">
        <form method="post" @submit.prevent="login()">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input is-info" type="text" required v-model="username">
            </div>
          </div>
          
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input is-info" type="password" required v-model="password">
            </div>
         </div>
          
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <input type="checkbox">
                Remember me
              </label>
            </div>
          </div>
          
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Log In</button>
            </div>
          </div>
        </form>
          <hr class="navbar-divider">
          Don't have an account, <a href="signup.html">Sign up</a>
      </div>
    </div>
    </div>
</div>
  </div>
</div>
</template>

<script>
import Session from "../services/session";

export default {
  data: () => ({
    username: null,
    password: null,
    Session
  }),
  methods: {
    login(){
      this.Session.Login(this.username, this.password);
    }
  }
}
</script>

<style>
    .card{
        margin-left: 420px;
        margin-top: 20px;
        width: 60%;
    }
    .title{
        margin-top: 75px;
        text-align: center;
        font-family: cursive;
    }
    .title span{
      color: darkcyan;
      font-size: 60px;
    }
    .media p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
</style>