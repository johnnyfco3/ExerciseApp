<template>
<div class="page">
  <div class="columns is-multiline">
      <div class="column is-two-fifths">
        <div class="user-image">
            <figure class="image">
                <img class="is-rounded" :src="users.pic" >
            </figure>
        </div>
    </div>
    <div class="column is-one-third">
      <div class="features">
        <h1 class="subtitle is-3"><span1>{{users.handle}}</span1></h1>
        <div class="bio">
          <h1 class="subtitle">Age: {{users.age}}</h1>
          <h1 class="subtitle">Height: {{users.height}}</h1>
          <h1 class="subtitle">Weight: {{users.weight}}</h1>
      </div>
        <p><span>0</span> Highlights</p>
        <router-link to="/community"><span>0</span> Motivators</router-link>
        <router-link to="/community"><span>0</span> Inspires</router-link>
    </div>
        <div class="options">
            <router-link class="button is-link" style="font-weight: 600;" to="/createpost">
                Share Highlight
              </router-link>
            <router-link class="button is-warning" style="font-weight: 600;" to="/editprofile">
                Edit Profile
            </router-link>
        </div>
    </div>
  </div>
  </div>
</template>

<script>

import { GetByHandle } from '../services/users'
import session from '../services/session'

export default {
  data: ()=> ({
    users: GetByHandle(session.user.handle)
  })
}
</script>

<style>
.page{
    margin-top: 20px;
    margin-bottom: 20px;
}
.bio{
      margin-bottom: 20px;
    }
    .bio h1{
      display: inline;
      margin-right: 40px;
    }
.image{
        width: 220px;
        margin-top: 10px;
        margin-left: 200px;
    }
    .column p{
        display: inline;
    }
    .features p{
        margin-right: 40px;
        font-size: 18px;
    }
    .features p span{
        font-size: 20px;
        margin-right: 5px;
    }
    .options{
        margin-top: 20px;
    }
    .options a{
        margin-right: 10px;;
    }
    .features p{
        margin-right: 40px;
        font-size: 18px;
        color: black;
    }
    .features p span{
        font-size: 20px;
        margin-right: 5px;
    }
    .features a{
        margin-right: 40px;
        font-size: 18px;
        color: black;
    }
    .features a span{
        font-size: 20px;
        margin-right: 5px;
    }
</style>