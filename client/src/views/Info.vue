<template>
<div class="page">
  <h1 class="title2 is-1"><span>Gainz</span></h1>
      <!--Main Content-->
      <div class="columns">
        <div class="column is-two-thirds">
            <div class="card card3">
                <div class="card-content">
                    <div class="media media3">
                        <div class="media-content">
                            <p class="title">Further Questions</p>
                        </div>
                    </div>
                    <div class="content">
                      <form action="/home" method="post">
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
.card3{
        margin-left: 400px;
        margin-top: 20px;
        width: 70%;
    }
    .title2{
        margin-top: 75px;
        text-align: center;
        font-family: cursive;
    }
    .title2 span{
      color: darkcyan;
      font-size: 60px;
    }
    .card3 .media3 p{
        font-family: 'Times New Roman', Times, serif;
        font-size: 35px;
    }
</style>