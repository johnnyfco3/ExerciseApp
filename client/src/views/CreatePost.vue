<template>
  <div class="nav">
    <Nav />
      <div class="container">
        <h1 class="title is-8">Create Highlight</h1>
         <!--Main Content-->
          <div class="columns">
        <div class="column is-two-thirds">
            <div class="card card6">
                <div class="card-content">
                    <div class="content">
                      <form @submit.prevent="add()">
                          <div class="field">
                            <label class="label">Highlight</label>
                            <div class="control">
                              <input class="input" type="url" placeholder="Upload picture" v-model="newPost.src">
                            </div>
                          </div>

                          <div class="field">
                            <label class="label">Alt</label>
                              <div class="control">
                                <input class="input" type="text" placeholder="Some alternate text for this picture" v-model="newPost.alt">
                              </div>
                          </div>

                          <div class="field">
                            <label class="label">Caption</label>
                              <div class="control">
                                <textarea class="textarea" placeholder="Some text to explain this picture" v-model="newPost.caption"></textarea>
                              </div>
                            </div>

                          <div class="field">
                            <label class="label">Tag a Friend</label>
                            <o-autocomplete v-model="name" group-field="type" group-options="items" open-on-focus :data="filteredDataObj" field="user.first_name" @select="option => (selected = option)">
                            </o-autocomplete>
                          </div>

                        <div class="field">
                            <label class="label">Category</label>
                            <div class="select">
                                <select v-model="newPost.category">
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
                          <div class="control">
                            <label class="radio">
                              <input type="radio" name="question" v-model=" newPost.isPublic" :value="true"/>
                                Public
                            </label>
                            <label class="radio">
                              <input type="radio" name="question" v-model="newPost.isPublic" :value="false"/>
                                Private
                            </label>
                          </div>
                        </div>
                        
                        <footer class="card-footer">
                          <button class="button is-link card-footer-item" type="submit">Share</button>
                        </footer>

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
import { Add } from '../services/posts';
import session from '../services/session';
//import {GetFollowers} from '../services/users';

const newPost = () =>({ user: session.user, user_handle: session.user.handle });

export default {
  components: { 
      Nav
    },
    data() {
      return {
        newPost: newPost(),
        data: [
          {
            type: 'Fruit',
            items: ['Apple', 'Banana', 'Watermelon']
          },
          {
            type: 'Vegetables',
            items: ['Carrot', 'Broccoli', 'Cucumber', 'Onion']
          }
        ],
        name: '',
        selected: null
      }
    },
    computed: {
      filteredDataObj() {
        const newData = []
        this.data.forEach(element => {
          const items = element.items.filter(item => item.toLowerCase().indexOf(this.name.toLowerCase()) >= 0)
          if (items.length) {
            newData.push({ type: element.type, items })
          }
        })
        return newData
      }
    },
    methods: {
        async add(){
            const response = await Add(this.newPost);
            console.log({response});

            if(response){
                this.posts.unshift(this.newPost);
                this.newPost = newPost();
            }
        }
    }
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
    .card6{
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

</style>

