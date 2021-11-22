<template>
<div class="nav">
    <Nav />
    <User-Info />
  <div class="tabs is-centered">
    <ul>
      <li><router-link to="/profile">Highlights</router-link></li>
      <li><router-link to="/track">Progress Tracker</router-link></li>
      <li class="is-active"><a>Workout Planner</a></li>
    </ul>
  </div>
  <!--Planner-->
  <div class="container">
    <div class="columns">
        <div class="column is-fullwidth">
      <div class="card">
        <div class="card-content">
            <div class="content">
              <form @submit.prevent="add()">
                <div class="field">
                    <h1 class="subtitle is-8">Monday</h1>
                    <div class="columns is-multiline">
                        <div class="column is-one-fifth">
                            <div class="control">
                                <label class="label">Choose Workout</label>
                                <div class="select" name="category">
                                  <select v-model="goals.categoryM">
                                    <option>{{goal.categoryM}}</option>
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
                                <textarea class="textarea" v-model="goals.mon" :placeholder="goal.mon"></textarea>
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
                                <select v-model="goals.categoryT">
                                  <option>{{goal.categoryT}}</option>
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
                              <textarea class="textarea" v-model="goals.tues" :placeholder="goal.tues"></textarea>
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
                              <select v-model="goals.categoryW">
                                <option>{{goal.categoryW}}</option>
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
                            <textarea class="textarea" v-model="goals.weds" :placeholder="goal.weds"></textarea>
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
                            <select v-model="goals.categoryTH">
                              <option>{{goal.categoryTH}}</option>
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
                          <textarea class="textarea" v-model="goals.thurs" :placeholder="goal.thurs"></textarea>
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
                          <select v-model="goals.categoryF">
                            <option>{{goal.categoryF}}</option>
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
                        <textarea class="textarea" v-model="goals.fri" :placeholder="goal.fri"></textarea>
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
                        <select v-model="goals.categorySA">
                          <option>{{goal.categorySA}}</option>
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
                      <textarea class="textarea" v-model="goals.sat" :placeholder="goal.sat"></textarea>
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
                      <select v-model="goals.categoryS">
                        <option>{{goal.categoryS}}</option>
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
                    <textarea class="textarea" v-model="goals.sun" :placeholder="goal.sun"></textarea>
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
import { Add, GetGoalWall } from '../services/goals'
import session from '../services/session'

export default {
  components: { 
      Nav,
      UserInfo
    },
    data: ()=> ({
      goal: [],
      goals: []
    }),
    async mounted(){
      this.goal = await GetGoalWall(session.user.handle)
  },
    methods: {
        async add(){
            const response = await Add(this.goals);
            console.log({response});

            if(response){
                this.track.unshift(this.goals);
                this.$router.push('/planner');
      
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