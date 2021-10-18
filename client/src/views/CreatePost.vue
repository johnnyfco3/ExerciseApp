<template>
  <div class="nav">
      <Nav />
      <div class="container">
        <h1 class="title is-8">Create Highlight</h1>
         <!--Main Content-->
          <div class="columns">
        <div class="column is-two-thirds">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <form action="userprofile.html" method="post">
                        <div class="field">
                            <label class="label">Highlight</label>
                            <div class="file has-name">
                                <label class="file-label">
                                  <input class="file-input" type="file" name="resume">
                                  <span class="file-cta">
                                    <span class="file-icon">
                                      <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                      Upload…
                                    </span>
                                  </span>
                                  <span class="file-name">
                                    Screen Shot 2017-07-29 at 15.54.25.png
                                  </span>
                                </label>
                              </div>
                        </div>

                        <div class="field">
                            <label class="label">Category</label>
                            <div class="select">
                                <select>
                                  <option>Chest/Triceps</option>
                                  <option>Back/Biceps</option>
                                  <option>Shoulders</option>
                                  <option>Legs</option>
                                  <option>Abs</option>
                                  <option>Cardio</option>
                                </select>
                              </div>
                          </div>
          
                        <div class="field">
                          <label class="label">Caption</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="comment">
                          </div>
                        </div>
                        
                        <div class="field is-grouped">
                          <div class="control">
                            <button class="button is-primary">Share</button>
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
export default {
  components: { 
      Nav
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
</style>