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
                                        <input class="input is-info" type="text" name="max-bench" v-model="track.cBench" :placeholder="tracker.cBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Incline Bench</label>
                                        <input class="input is-info" type="text" name="max-incline" v-model="track.cIBench" :placeholder="tracker.cIBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label">Current Overhead Press</label>
                                        <input class="input is-info" type="text" name="max-over" v-model="track.cOPress" :placeholder="tracker.cOPress">
                                    </div>
                                </div>
                                <div class="column is-one-quarter">
                                    <div class="control">
                                        <label class="label">Current Deadlift</label>
                                        <input class="input is-info" type="text" name="max-dead" v-model="track.cDeadlift" :placeholder="tracker.cDeadlift">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Bench</label>
                                        <input class="input is-primary" type="text" name="g-bench" v-model="track.gBench" :placeholder="tracker.gBench">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Incline</label>
                                        <input class="input is-primary" type="text" name="g-incline" v-model="track.gIncline" :placeholder="tracker.gIncline">
                                    </div>
                                </div>
                                <div class="column is-one-fifth">
                                    <div class="control">
                                        <label class="label"> Goal for Overhead</label>
                                        <input class="input is-primary" type="text" name="g-over" v-model="track.gOPress" :placeholder="tracker.gOPress">
                                    </div>
                                </div>
                                <div class="column is-one-quarter">
                                    <div class="control">
                                        <label class="label"> Goal for Deadlift</label>
                                        <input class="input is-primary" type="text" name="g-dead" v-model="track.gDeadlift" :placeholder="tracker.gDeadlift">
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
                                        <input class="input is-info" type="text" name="max-bs" v-model="track.cBSquats" :placeholder="tracker.cBSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Split Squats</label>
                                        <input class="input is-info" type="text" name="max-ss" v-model="track.cSSquats" :placeholder="tracker.cSSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label">Current Glute Bridges</label>
                                        <input class="input is-info" type="text" name="max-gb" v-model="track.cGBridges" :placeholder="tracker.cGBridges">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Barbell Squats</label>
                                        <input class="input is-primary" type="text" name="g-bs" v-model="track.gBSquats" :placeholder="tracker.gBSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Split Squats</label>
                                        <input class="input is-primary" type="text" name="g-ss" v-model="track.gSSquats" :placeholder="tracker.gSSquats">
                                    </div>
                                </div>
                                <div class="column is-one-third">
                                    <div class="control">
                                        <label class="label"> Goal: Glute Bridges</label>
                                        <input class="input is-primary" type="text" name="g-gb" v-model="track.gGBridges" :placeholder="tracker.gGBridges">
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
                                        <input class="input is-info" type="text" name="max-miles" v-model="track.cMiles" :placeholder="tracker.cMiles">
                                    </div>
                                </div>
                                <div class="column is-half">
                                    <div class="control">
                                        <label class="label"> Goal: Miles</label>
                                        <input class="input is-primary" type="text" name="g-miles" v-model="track.gMiles" :placeholder="tracker.gMiles">
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
    track: []
  }),
  methods: {
        async add(){
            const response = await Add(this.track);
            console.log({response});

            if(response){
                this.track.unshift(this.track);
            }
        }
    }

}
</script>

<style>

</style>