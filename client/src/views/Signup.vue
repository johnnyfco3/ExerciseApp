<template>
<div class="page">
  <h1 class="title1 is-1"><span>Gainz</span></h1>
      <!--Main Content-->
      <div class="columns">
        <div class="column is-two-thirds">
            <div class="card card2">
                <div class="card-content">
                    <div class="media media2">
                        <div class="media-content">
                            <p class="title">Sign up</p>
                        </div>
                    </div>
                    <div class="content">
                      <form @submit.prevent="register()">
                        <div class="field">
                            <label class="label">First Name</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="name" required v-model="users.firstName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="name" required v-model="users.lastName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Age</label>
                            <div class="control">
                              <input class="input is-info" type="number" name="age" required v-model="users.age">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Height</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="height" placeholder="#ft #in" required v-model="users.height">
                            </div>
                          </div>

                          <div class="field">
                          <label class="label">Weight</label>
                          <div class="control">
                            <input class="input is-info" type="number" name="weight" placeholder="lbs" v-model="users.weight">
                          </div>
                        </div>

                        <div class="field">
                          <label class="label">Username</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="username" required v-model="users.handle">
                          </div>
                        </div>

                        <div class="field">
                          <label class="label">Create a Password</label>
                          <div class="control">
                            <input class="input is-info" type="password" name="password" required v-model="users.password">
                          </div>
                       </div>

                        <div class="field">
                            <label class="label">Email Address</label>
                            <div class="control">
                              <input class="input is-info" type="email" name="email" required v-model="users.emails">
                            </div>
                          </div>
                        
                        <div class="field">
                          <div class="control">
                            <label class="checkbox">
                              <input type="checkbox" required>
                              I agree to the <a>terms & conditions</a>
                            </label>
                          </div>
                        </div>
                        
                        <footer class="card-footer">
                          <button class="button is-link card-footer-item" type="submit">Register</button>
                        </footer>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { Add } from '../services/users';

export default {
  props: {
        users: Object
  },
  data: ()=> ({
        user: [],
        newUser
    }),
    methods: {
        async register(){
            const response = await Add(this.newUser);
            console.log({response});

            if(response){
                this.posts.unshift(this.newUser);
            }
        }
    }

}
</script>

<style>
.card2{
        margin-left: 400px;
        margin-top: 20px;
        width: 70%;
    }
    .title1{
        margin-top: 75px;
        text-align: center;
        font-family: cursive;
    }
    .title1 span{
      color: darkcyan;
      font-size: 60px;
    }
    .card2 .media2 .media-content{
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
</style>