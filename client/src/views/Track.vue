<template>
  <div class="planner">
      <Nav />
      <User-Info />
      <div class="tabs is-centered">
    <ul>
      <li><router-link to="/profile">Highlights</router-link></li>
      <li class="is-active"><a>Progress Tracker</a></li>
      <li><router-link to="/planner">Workout Planner</router-link></li>
    </ul>
  </div>
        <div class="columns is-multiline is-mobile" v-for=" (t) in tracker" :key="t._id">
          <div class="column is-half">
            <h1 class="subtitle1">Upper Body</h1>
            <table class="table is-striped">
                <thead>
                  <tr>
                    <th>Bench Press</th>
                    <th>Incline Bench</th>
                    <th>Overhead Press</th>
                    <th>Dead lifts</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{t.cBench}}</td>
                    <td>{{t.cIBench}}</td>
                    <td>{{t.cOPress}}</td>
                    <td>{{t.cDeadlift}}</td>
                  </tr>
                </tbody>
              </table>
           </div>
            <div class="column is-half">
              <h1 class="subtitle1">Lower Body</h1>
            <table class="table is-striped" style="width: 700px;">
                <thead>
                  <tr>
                    <th>Barbell Squats</th>
                    <th>Split Squats</th>
                    <th>Glute Bridges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{t.cBSquats}}</td>
                    <td>{{t.cSSquats}}</td>
                    <td>{{t.cGBridges}}</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div class="cardio">
       <div class="column" style="margin-left:350px; margin-top: 50px;">
         <h1 class="subtitle1">Cardio</h1>
        <table class="table is-striped" style="width: 700px;">
            <thead>
              <tr>
                <th>Miles Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{t.cMiles}}</td>
              </tr>
            </tbody>
          </table>
      <div class="begin">
        <router-link class="button is-primary" style="font-weight: 600;" to="/trackdts">
                Add New
            </router-link>
      </div>
      </div>
      </div>
      </div>
      </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import UserInfo from '../components/UserInfo.vue'
import { GetTrackWall } from '../services/tracker'
import session from '../services/session'

export default {
  components: { Nav, UserInfo },
  data: ()=> ({
    tracker: []
  }),
  async mounted(){
    this.tracker = await GetTrackWall(session.user.handle)
  },

}
</script>

<style>
.column .subtitle1{
  font-family: cursive;
      color: darkcyan;
      font-size: 40px;
      text-align: center;
}
</style>