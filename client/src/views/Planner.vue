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
              <form action="/planner">
                <div class="field">
                    <h1 class="subtitle is-8">Monday</h1>
                    <div class="columns is-multiline">
                        <div class="column is-one-fifth">
                            <div class="control">
                                <label class="label">Choose Workout</label>
                                <div class="select" name="category">
                                  <select>
                                    <option>{{goals.categoryM}}</option>
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
                                <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.mon}}</div>
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
                                <select>
                                  <option>{{goals.categoryT}}</option>
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
                              <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.tues}}</div>
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
                              <select>
                                <option>{{goals.categoryW}}</option>
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
                            <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.weds}}</div>
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
                            <select>
                              <option>{{goals.categoryTH}}</option>
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
                          <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.thurs}}</div>
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
                          <select>
                            <option>{{goals.categoryF}}</option>
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
                        <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.fri}}</div>
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
                        <select>
                          <option>{{goals.categorySA}}</option>
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
                      <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.sat}}</div>
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
                      <select>
                        <option>{{goals.categoryS}}</option>
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
                    <div class="textarea" name="mon-note" placeholder="Workout Routine/Goals">{{goals.sun}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-danger is-outlined">Submit</button>
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
import UserInfo from '../components/UserInfo.vue'
import { GetGoalWall } from '../services/goals'
import session from '../services/session'

export default {
  components: { 
      Nav,
    UserInfo
    },
    data: ()=> ({
    goals: GetGoalWall(session.user.handle)
  })
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