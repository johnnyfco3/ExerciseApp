<template>
  <div class="nav">
      <Nav />
      <div class="main-content">
    <div class="searchbar">
        <input class="input is-rounded is-primary" name="search" type="text" placeholder="Search">
    </div>
    <table class="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>Motivators (Count)</th>
            <th>Inspires (Count)</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{users.handle}}</td>
          </tr>
        </tbody>
      </table>
</div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import { GetByHandle } from '../services/users'
import session from '../services/session'

export default {
  components: { 
      Nav
    },
    data: ()=> ({
    users: GetByHandle(session.user.handle).following
  })

}
</script>

<style>
.main-content{
      margin-left: 70px;
      width: 80%;
    }
    .searchbar{
        margin-top: 20px;
      width: 40%;
      margin-bottom: 20px;
    }
    .contents label{
      font-size: 30px;
      font-family: cursive;
    }
    table th{
        font-family: cursive;
        font-size: 25px;
    }
</style>