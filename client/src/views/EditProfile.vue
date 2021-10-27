<template>
<div class="nav">
    <Nav />
  <div class="container">
        <h1 class="title is-8">Edit Profile</h1>
         <!--Main Content-->
          <div class="columns">
        <div class="column is-two-thirds">
            <div class="card card7">
                <div class="card-content">
                    <div class="content">
                      <form action="/profile">
                        <div class="field">
                            <label class="label">Profile Picture</label>
                            <div class="file has-name">
                                <label class="file-label">
                                  <input class="file-input" type="file" name="resume">
                                  <span class="file-cta">
                                    <span class="file-icon">
                                      <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                      Choose a file…
                                    </span>
                                  </span>
                                  <span class="file-name">
                                    Screen Shot 2017-07-29 at 15.54.25.png
                                  </span>
                                </label>
                              </div>
                        </div>

                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="username" :placeholder="users.handle">
                            </div>
                          </div>
          
                        <div class="field">
                          <label class="label">Age</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="age" :placeholder="users.age">
                          </div>
                        </div>
                        
                        <div class="field">
                          <label class="label">Weight</label>
                          <div class="control">
                            <input class="input is-info" type="number" name="weight" :placeholder="users.weight">
                          </div>
                       </div>

                       <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                          <input class="input is-info" type="email" name="email" :placeholder="users.emails">
                        </div>
                     </div>
                        
                        <div class="field is-grouped">
                          <div class="control">
                            <button class="button is-primary">Finish</button>
                          </div>
                        </div>
                        </form>
                    </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import { GetByHandle } from '../services/users'
import session from '../services/session'

export default {
  components: { 
      Nav
    },
    data: ()=> ({
    users: GetByHandle(session.user.handle)
  })

}
</script>

<style>
.container{
    margin-top: 20px;
}
.container h1{
        text-align: center;
        font-family: cursive;
        font-size: 50px;
        color: darkcyan;
    }
    .card7{
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
</style>