<template>
<div class="page">
  <h1 class="title is-1"><span>Gainz</span></h1>
  <div class="columns">
        <div class="column is-two-thirds">
    <div class="card card1">
    <div class="card-content">
      <div class="media media1">
        <div class="media-content">
          <p class="title">Log In</p>
        </div>
      </div>
      <div class="content">
        <form method="post" @submit.prevent="login()">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input is-info" type="text" placeholder="@" required v-model="username">
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
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-success" type="button" @click="loginGoogle()">
                Login with Google
              </button>
              <div class="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
          </div>
        </form>
          <hr class="navbar-divider">
          Don't have an account, <a @click="signup">Sign up</a>
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
    },
    signup (){
            this.$router.push('/signup')
        },
    loginGoogle(){
            auth.signIn().then(x=> console.log({x}))
        }
  }
}

/*global gapi */
let auth;
const tag = document.createElement('script');
tag.id = "google-auth-script";
tag.src = 'https://apis.google.com/js/platform.js';

document.head.append(tag);

tag.onload = () => {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
        }).then()
        

    });
}
</script>

<style>
    .card1{
        margin-left: 400px;
        margin-top: 20px;
        width: 70%;
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
    .card1 .media1 p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
    
</style>