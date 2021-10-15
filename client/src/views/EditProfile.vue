<template>
<div class="nav">
    <Nav />
  <div class="container">
        <h1 class="title is-8">Edit Profile</h1>
         <!--Main Content-->
            <div class="card">
                <div class="card-content">
                    <div class="content">
                      <form action="userprofile.html" method="post">
                        <div class="field">
                            <label class="label">Profile Picture</label>
                            <div class="file has-name">
                                <label class="file-label">
                                  <input class="file-input" type="file" name="resume">
                                  <span class="file-cta">
                                    <span class="file-icon">
                                      <i class="fas fa-upload"></i>
                                    </span>
                                    <span class="file-label">
                                      Choose a file…
                                    </span>
                                  </span>
                                  <span class="file-name">
                                    Screen Shot 2017-07-29 at 15.54.25.png
                                  </span>
                                </label>
                              </div>
                        </div>

                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="username">
                            </div>
                          </div>
          
                        <div class="field">
                          <label class="label">Age</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="age">
                          </div>
                        </div>
                        
                        <div class="field">
                          <label class="label">Weight</label>
                          <div class="control">
                            <input class="input is-info" type="number" name="weight">
                          </div>
                       </div>

                       <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                          <input class="input is-info" type="email" name="email">
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