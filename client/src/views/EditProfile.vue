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
                      <form @submit.prevent="update()">
                        <div class="field">
                            <label class="label">Profile Picture</label>
                            <div class="control">
                              <input class="input" type="url" v-model="user.pic" :placeholder="users.pic">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="username" v-model="user.handle" :placeholder="users.handle">
                            </div>
                          </div>
          
                        <div class="field">
                          <label class="label">Age</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="age" v-model="user.age" :placeholder="users.age">
                          </div>
                        </div>
                        
                        <div class="field">
                          <label class="label">Weight</label>
                          <div class="control">
                            <input class="input is-info" type="number" name="weight" v-model="user.weight" :placeholder="users.weight">
                          </div>
                       </div>

                       <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                          <input class="input is-info" type="email" name="email" v-model="user.emails" :placeholder="users.emails">
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
import { Update } from '../services/users'
import router from "../router";

export default {
  components: { 
      Nav
    },
    data: ()=> ({
      users: [],
      user: [],
      toRoute: '/profile'
  }),
  async mounted(){
    this.users = await GetByHandle(session.user.handle)
  },
  methods: {
    async update(){
      const response = await Update(session.user.user_id, this.user);
      console.log({response});

      if(response){
          router.push(this.toRoute);
      }
    }
  },

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