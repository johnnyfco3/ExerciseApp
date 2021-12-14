<template>
<div class="nav">
    <Nav />
    <User-Info />
  <div class="tabs is-centered">
    <ul>
      <li><router-link to="/profile">Highlights</router-link></li>
      <li><router-link to="/trackdts">Progress Tracker</router-link></li>
      <li class="is-active"><a>Workout Planner</a></li>
    </ul>
  </div>
  <!--Planner-->
  <div class="container">
    <div class="columns">
        <div class="column is-fullwidth">
      <div class="card">
        <div class="card-content">
            <div class="content" v-for=" (g) in goal" :key="g._id">
              <form @submit.prevent="add()">
                <div class="field">
                    <h1 class="subtitle is-8">Monday</h1>
                    
                    <div class="columns is-multiline">
                        <div class="column is-one-fifth">
                            <div class="control">
                                <label class="label">Choose Workout</label>
                                <div class="select" name="category">
                                  <select v-model="newGoal.categoryM">
                                    <option>{{g.categoryM}}</option>
                                    <option>Chest/Triceps</option>
                                    <option>Back/Biceps</option>
                                    <option>Legs</option>
                                    <option>Abs</option>
                                    <option>Cardio</option>
                                    <option>Rest</option>
                                  </select>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="control">
                                <label class="label">Notes</label>
                                <input class="textarea" v-model="newGoal.mon" :placeholder="g.mon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="field">
                  <h1 class="subtitle is-8">Tuesday</h1>
                  <div class="columns is-multiline">
                      <div class="column is-one-fifth">
                          <div class="control">
                              <label class="label">Choose Workout</label>
                              <div class="select" name="category">
                                <select v-model="newGoal.categoryT">
                                  <option>{{g.categoryT}}</option>
                                  <option>Chest/Triceps</option>
                                  <option>Back/Biceps</option>
                                  <option>Legs</option>
                                  <option>Abs</option>
                                  <option>Cardio</option>
                                  <option>Rest</option>
                                </select>
                              </div>
                          </div>
                      </div>
                      <div class="column">
                          <div class="control">
                              <label class="label">Notes</label>
                              <input class="textarea" v-model="newGoal.tues" :placeholder="g.tues" />
                          </div>
                      </div>
                  </div>
              </div>
              <div class="field">
                <h1 class="subtitle is-8">Wednesday</h1>
                <div class="columns is-multiline">
                    <div class="column is-one-fifth">
                        <div class="control">
                            <label class="label">Choose Workout</label>
                            <div class="select" name="category">
                              <select v-model="newGoal.categoryW">
                                <option>{{g.categoryW}}</option>
                                <option>Chest/Triceps</option>
                                <option>Back/Biceps</option>
                                <option>Legs</option>
                                <option>Abs</option>
                                <option>Cardio</option>
                                <option>Rest</option>
                              </select>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="control">
                            <label class="label">Notes</label>
                            <input class="textarea" v-model="newGoal.weds" :placeholder="g.weds" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="field">
              <h1 class="subtitle is-8">Thursday</h1>
              <div class="columns is-multiline">
                  <div class="column is-one-fifth">
                      <div class="control">
                          <label class="label">Choose Workout</label>
                          <div class="select" name="category">
                            <select v-model="newGoal.categoryTH">
                              <option>{{g.categoryTH}}</option>
                              <option>Chest/Triceps</option>
                              <option>Back/Biceps</option>
                              <option>Legs</option>
                              <option>Abs</option>
                              <option>Cardio</option>
                              <option>Rest</option>
                            </select>
                          </div>
                      </div>
                  </div>
                  <div class="column">
                      <div class="control">
                          <label class="label">Notes</label>
                          <input class="textarea" v-model="newGoal.thurs" :placeholder="g.thurs" />
                      </div>
                  </div>
              </div>
          </div>
          <div class="field">
            <h1 class="subtitle is-8">Friday</h1>
            <div class="columns is-multiline">
                <div class="column is-one-fifth">
                    <div class="control">
                        <label class="label">Choose Workout</label>
                        <div class="select" name="category">
                          <select v-model="newGoal.categoryF">
                            <option>{{g.categoryF}}</option>
                            <option>Chest/Triceps</option>
                            <option>Back/Biceps</option>
                            <option>Legs</option>
                            <option>Abs</option>
                            <option>Cardio</option>
                            <option>Rest</option>
                          </select>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="control">
                        <label class="label">Notes</label>
                        <input class="textarea" v-model="newGoal.fri" :placeholder="g.fri" />
                    </div>
                </div>
            </div>
        </div>
        <div class="field">
          <h1 class="subtitle is-8">Saturday</h1>
          <div class="columns is-multiline">
              <div class="column is-one-fifth">
                  <div class="control">
                      <label class="label">Choose Workout</label>
                      <div class="select" name="category">
                        <select v-model="newGoal.categorySA">
                          <option>{{g.categorySA}}</option>
                          <option>Chest/Triceps</option>
                          <option>Back/Biceps</option>
                          <option>Legs</option>
                          <option>Abs</option>
                          <option>Cardio</option>
                          <option>Rest</option>
                        </select>
                      </div>
                  </div>
              </div>
              <div class="column">
                  <div class="control">
                      <label class="label">Notes</label>
                      <input class="textarea" v-model="newGoal.sat" :placeholder="g.sat" />
                  </div>
              </div>
          </div>
      </div>
      <div class="field">
        <h1 class="subtitle is-8">Sunday</h1>
        <div class="columns is-multiline">
            <div class="column is-one-fifth">
                <div class="control">
                    <label class="label">Choose Workout</label>
                    <div class="select" name="category">
                      <select v-model="newGoal.categoryS">
                        <option>{{g.categoryS}}</option>
                        <option>Chest/Triceps</option>
                        <option>Back/Biceps</option>
                        <option>Legs</option>
                        <option>Abs</option>
                        <option>Cardio</option>
                        <option>Rest</option>
                      </select>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="control">
                    <label class="label">Notes</label>
                    <input class="textarea" v-model="newGoal.sun" :placeholder="g.sun" />
                </div>
            </div>
        </div>
    </div>
    <footer class="card-footer">
      <button class="button is-link card-footer-item" type="submit">Submit</button>
    </footer>

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
import UserInfo from '../components/UserInfo.vue'
import session from '../services/session'
import { Add, GetGoalWall } from '../services/goals'
import router from "../router";

export default {
  components: { 
      Nav,
      UserInfo
    },
    data: ()=> ({
      goal: [],
      newGoal: [],
      toRoute: '/planner'
    }),
    async mounted(){
      this.goal = await GetGoalWall(session.user.handle)
  },
    methods: {
        async add(){
            const response = await Add(this.newGoal);
            console.log({response});

            if(response){
                this.goals.unshift(this.newGoal);
                router.push(this.toRoute);
      
            }
        }
    }
}
</script>

<style>
.card .media-content{
        text-align: center;
        font-family: cursive;
    }
    .card .media-content .title{
        font-size: 30px;
    }   
    .field .subtitle{
      font-family: cursive;
      color: darkcyan;
    }
</style>