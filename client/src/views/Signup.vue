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
                              <input class="input is-info" type="text" name="name" required v-model="user.firstName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Last Name</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="name" required v-model="user.lastName">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Age</label>
                            <div class="control">
                              <input class="input is-info" type="number" name="age" required v-model="user.age">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Height</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="height" placeholder="#ft #in" required v-model="user.height">
                            </div>
                          </div>

                          <div class="field">
                          <label class="label">Weight</label>
                          <div class="control">
                            <input class="input is-info" type="number" name="weight" placeholder="lbs" v-model="user.weight">
                          </div>
                        </div>

                        <div class="field">
                          <label class="label">Username</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="username" required v-model="user.handle">
                          </div>
                        </div>

                        <div class="field">
                          <label class="label">Create a Password</label>
                          <div class="control">
                            <input class="input is-info" type="password" name="password" required v-model="user.password">
                          </div>
                       </div>

                        <div class="field">
                            <label class="label">Email Address</label>
                            <div class="control">
                              <input class="input is-info" type="email" name="email" required v-model="user.emails">
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
import router from "../router";

export default {
  data: ()=> ({
        user: [],
        toRoute: '/login'
    }),
    methods: {
        async register(){
            const response = await Add(this.user);
            console.log({response});

            if(response){
                this.users.unshift(this.user);
                router.push(this.toRoute);
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