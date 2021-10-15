<template>
<div class="page">
  <h1 class="title is-1"><span>Gainz</span></h1>
      <!--Main Content-->
      <div class="columns">
        <div class="column is-two-thirds">
            <div class="card">
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-12">Further Questions</p>
                        </div>
                    </div>
                    <div class="content">
                      <form action="home.html" method="post">
                        <div class="field">
                            <label class="label">Age</label>
                            <div class="control">
                              <input class="input is-info" type="number" name="age" required>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Height</label>
                            <div class="control">
                              <input class="input is-info" type="text" name="height" placeholder="#'#" required>
                            </div>
                          </div>
          
                        <div class="field">
                          <label class="label">Weight</label>
                          <div class="control">
                            <input class="input is-info" type="number" name="weight">
                          </div>
                        </div>

                        <div class="field is-grouped">
                          <div class="control">
                            <button class="button is-link">Continue</button>
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
.card{
        margin-left: 400px;
        margin-top: 20px;
        width: 70%;
    }
    .title{
        margin-top: 75px;
        text-align: center;
        font-family: cursive;
    }
    .title span{
      color: darkcyan;
      font-size: 60px;
    }
    .media p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
</style>