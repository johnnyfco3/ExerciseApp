<template>
  <div class="nav">
      <Nav />
      <User-Info />
      <div class="columns is-multiline is-mobile">
      <div class="column is-half">
        <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Upper Body</p>
            </div>
          </div>
          <div class="content">
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
                    <td></td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div class="begin">
            <a class="button is-primary" style="font-weight: 600;" href="trackdtls.html">
                Edit
              </a>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-half">
        <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">Lower Body</p>
            </div>
          </div>
          <div class="content">
            <table class="table is-striped">
                <thead>
                  <tr>
                    <th>Barbell Squats</th>
                    <th>Split Squats</th>
                    <th>Glute Bridges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div class="begin">
            <a class="button is-primary" style="font-weight: 600;" href="trackdtls.html">
                Edit
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cardio">
    <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">Cardio</p>
        </div>
      </div>
      <div class="content">
        <table class="table is-striped">
            <thead>
              <tr>
                <th>Miles Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="begin">
        <a class="button is-primary" style="font-weight: 600;" href="trackdtls.html">
            Edit
          </a>
      </div>
    </div>
</div>
  </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import UserInfo from '../components/UserInfo.vue'
export default {
  components: { Nav, UserInfo },

}
</script>

<style>

</style>