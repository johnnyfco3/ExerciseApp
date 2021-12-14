<template>
  <div class="nav">
      <Nav />
      <div class="container">
        <h1 class="title is-8">Progress Goals</h1>
         <!--Main Content-->
            <div class="card card5">
                <div class="card-content">
                    <div class="content">
                      <form @submit.prevent="addNew()" >
                        <h1 class="subtitle is-6">State the max weight for each:</h1>
                        <div class="field">
                            <h1 class="subtitle is-8">Upper Body</h1>
                            <div class="columns is-multiline">
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Bench</label>
                                        <input class="input is-info" type="text" name="max-bench" v-model="track.cBench" >
                                        
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Incline Bench</label>
                                        <input class="input is-info" type="text" name="max-incline" v-model="track.cIBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Overhead Press</label>
                                        <input class="input is-info" type="text" name="max-over" v-model="track.cOPress" >
                                    </div>
                                </div>
                                <div class="column is-one-quarter">
                                    <div class="control">
                                        <label class="label">Current Deadlift</label>
                                        <input class="input is-info" type="text" name="max-dead" v-model="track.cDeadlift" >
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Bench</label>
                                        <input class="input is-primary" type="text" name="g-bench" v-model="track.gBench" >
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Incline</label>
                                        <input class="input is-primary" type="text" name="g-incline" v-model="track.gIncline" >
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Overhead</label>
                                        <input class="input is-primary" type="text" name="g-over" v-model="track.gOPress" >
                                    </div>
                                </div>
                                <div class="column is-one-quarter">
                                    <div class="control">
                                        <label class="label"> Goal for Deadlift</label>
                                        <input class="input is-primary" type="text" name="g-dead" v-model="track.gDeadlift" >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <h1 class="subtitle is-8">Lower Body</h1>
                            <div class="columns is-multiline">
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Barbell Squats</label>
                                        <input class="input is-info" type="text" name="max-bs" v-model="track.cBSquats" >
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Split Squats</label>
                                        <input class="input is-info" type="text" name="max-ss" v-model="track.cSSquats" >
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Glute Bridges</label>
                                        <input class="input is-info" type="text" name="max-gb" v-model="track.cGBridges" >
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Barbell Squats</label>
                                        <input class="input is-primary" type="text" name="g-bs" v-model="track.gBSquats" >
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Split Squats</label>
                                        <input class="input is-primary" type="text" name="g-ss" v-model="track.gSSquats" >
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Glute Bridges</label>
                                        <input class="input is-primary" type="text" name="g-gb" v-model="track.gGBridges" >
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <h1 class="subtitle is-8">Cardio</h1>
                            <div class="columns is-multiline">
                                <div class="column is-half">
                                    <div class="control">
                                        <label class="label">Current: Miles</label>
                                        <input class="input is-info" type="text" name="max-miles" v-model="track.cMiles" >
                                    </div>
                                </div>
                                <div class="column is-half">
                                    <div class="control">
                                        <label class="label"> Goal: Miles</label>
                                        <input class="input is-primary" type="text" name="g-miles" v-model="track.gMiles">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                          <button class="button is-link card-footer-item" type="submit">Submit</button>
                        </footer>
                        </form>
                        <router-link class="button is-primary card-footer-item" to="/track" style="margin-top:50px;">Check Table</router-link>
                    </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import session from '../services/session'
import {Add, GetTrackWall} from '../services/tracker'

const track = () => ({user_handle: session.user.handle})

export default {
  components: { Nav },
  data: ()=> ({
    track: track(),
    tracker: [],
  }),
  async mounted() {
      this.tracker = await GetTrackWall(session.user.handle)
  },
  methods: {
        async addNew(){
            //const response = await Update(this.tracker[0]._id, this.track);
            const response = await Add(this.track);
            console.log({response});

            if(response){
                this.track.unshift(this.track);
                this.track = track();
            }
        }
    }

}
</script>

<style>

</style>