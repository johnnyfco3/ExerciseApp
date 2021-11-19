<template>
  <div class="nav">
      <Nav />
      <div class="container">
        <h1 class="title is-8">Progress Goals</h1>
         <!--Main Content-->
            <div class="card card5">
                <div class="card-content">
                    <div class="content">
                      <form @submit.prevent="add()">
                        <h1 class="subtitle is-6">State the max weight for each:</h1>
                        <div class="field">
                            <h1 class="subtitle is-8">Upper Body</h1>
                            <div class="columns is-multiline">
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Bench</label>
                                        <input class="input is-info" type="text" name="max-bench" placeholder="lbs" v-model="tracker.cBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Incline Bench</label>
                                        <input class="input is-info" type="text" name="max-incline" placeholder="lbs" v-model="tracker.cIBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Overhead Press</label>
                                        <input class="input is-info" type="text" name="max-over" placeholder="lbs" v-model="tracker.cOPress">
                                    </div>
                                </div>
                                <div class="column is-one-quarter">
                                    <div class="control">
                                        <label class="label">Current Deadlift</label>
                                        <input class="input is-info" type="text" name="max-dead" placeholder="lbs" v-model="tracker.cDeadlift">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Bench</label>
                                        <input class="input is-primary" type="text" name="g-bench" placeholder="lbs" v-model="tracker.gBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Incline</label>
                                        <input class="input is-primary" type="text" name="g-incline" placeholder="lbs" v-model="tracker.gIncline">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Overhead</label>
                                        <input class="input is-primary" type="text" name="g-over" placeholder="lbs" v-model="tracker.gOPress">
                                    </div>
                                </div>
                                <div class="column is-one-quarter">
                                    <div class="control">
                                        <label class="label"> Goal for Deadlift</label>
                                        <input class="input is-primary" type="text" name="g-dead" placeholder="lbs" v-model="tracker.gDeadlift">
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
                                        <input class="input is-info" type="text" name="max-bs" placeholder="lbs" v-model="tracker.cBSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Split Squats</label>
                                        <input class="input is-info" type="text" name="max-ss" placeholder="lbs" v-model="tracker.cSSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Glute Bridges</label>
                                        <input class="input is-info" type="text" name="max-gb" placeholder="lbs" v-model="tracker.cGBridges">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Barbell Squats</label>
                                        <input class="input is-primary" type="text" name="g-bs" placeholder="lbs" v-model="tracker.gBSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Split Squats</label>
                                        <input class="input is-primary" type="text" name="g-ss" placeholder="lbs" v-model="tracker.gSSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Glute Bridges</label>
                                        <input class="input is-primary" type="text" name="g-gb" placeholder="lbs" v-model="tracker.cGBridges">
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
                                        <input class="input is-info" type="text" name="max-miles" placeholder="mi" v-model="tracker.cMiles">
                                    </div>
                                </div>
                                <div class="column is-half">
                                    <div class="control">
                                        <label class="label"> Goal: Miles</label>
                                        <input class="input is-primary" type="text" name="g-miles" placeholder="mi" v-model="tracker.gMiles">
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
</template>

<script>
import Nav from '../components/Nav.vue'
import session from '../services/session'
import { Add, GetTrackWall } from '../services/tracker'

export default {
  components: { Nav },
  data: ()=> ({
    tracker: GetTrackWall(session.user.handle),
    track: [],
    newTrack
  }),
  methods: {
        async add(){
            const response = await Add(this.newTrack);
            console.log({response});

            if(response){
                this.track.unshift(this.newTrack);
            }
        }
    }

}
</script>

<style>

</style>