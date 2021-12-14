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
            <th>Motivators</th>
            <th>Inspires</th>
          </tr>
        </thead>
        <tbody v-for="u in list.following" :key="u.handle">
            <tr>
                <td>@{{list.following[0].handle}}</td>
                <td>@{{list.followers[0].handle}}</td>
          </tr>
        </tbody>
      </table>
</div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import session from '../services/session'
import { GetByHandle } from '../services/users'

export default {
  components: { 
      Nav
    },
    data() {
        return {
            list: []
        }
    },
    async mounted(){
        this.list = await GetByHandle(session.user.handle);
    }

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