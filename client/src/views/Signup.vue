<template>
<div class="page">
  <h1 class="title1 is-1"><span>Gainz</span></h1>
      <!--Main Content-->
      <div class="columns">
        <div class="column is-two-thirds">
            <div class="card card2">
                <div class="card-content">
                    <div class="media media2">
                        <div class="media-content">
                            <p class="title">Sign up</p>
                        </div>
                    </div>
                    <div class="content">
                      <form action="/info">
                        <div class="field">
                            <label class="label">Full Name</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="name" required>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Email Address</label>
                            <div class="control">
                              <input class="input is-info" type="email" name="email" required>
                            </div>
                          </div>
          
                        <div class="field">
                          <label class="label">Username</label>
                          <div class="control">
                            <input class="input is-info" type="text" name="username" required>
                          </div>
                        </div>
                        
                        <div class="field">
                          <label class="label">Create a Password</label>
                          <div class="control">
                            <input class="input is-info" type="password" name="password" required>
                          </div>
                       </div>

                       <div class="field">
                        <label class="label">Match Password</label>
                        <div class="control">
                          <input class="input is-info" type="password" required>
                        </div>
                     </div>
                        
                        <div class="field">
                          <div class="control">
                            <label class="checkbox">
                              <input type="checkbox" required>
                              I agree to the <a>terms & conditions</a>
                            </label>
                          </div>
                        </div>
                        
                        <div class="field is-grouped">
                          <div class="control">
                            <button class="button is-link">Sign Up</button>
                          </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.card2{
        margin-left: 400px;
        margin-top: 20px;
        width: 70%;
    }
    .title1{
        margin-top: 75px;
        text-align: center;
        font-family: cursive;
    }
    .title1 span{
      color: darkcyan;
      font-size: 60px;
    }
    .card2 .media2 .media-content{
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
</style>