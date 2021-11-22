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
                              <input class="input" type="url" placeholder="Upload picture" v-model="post.src">
                            </div>
                          </div>

                          <div class="field">
                            <label class="label">Alt</label>
                              <div class="control">
                                <input class="input" type="text" placeholder="Some alternate text for this picture" v-model="post.alt">
                              </div>
                          </div>

                          <div class="field">
                            <label class="label">Caption</label>
                              <div class="control">
                                <textarea class="textarea" placeholder="Some text to explain this picture" v-model="post.src"></textarea>
                              </div>
                            </div>

                        <div class="field">
                            <label class="label">Category</label>
                            <div class="select">
                                <select v-model="post.category">
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
                              <input type="radio" name="question" v-model="post.isPublic" :value="true"/>
                                Public
                            </label>
                            <label class="radio">
                              <input type="radio" name="question" v-model="post.isPublic" :value="false"/>
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

const newPost = () =>({ user: session.user, user_handle: session.user.user_handle })

export default {
  components: { 
      Nav
    },
    data: ()=> ({
        posts: [],
        newPost: newPost()
    }),
    methods: {
        async Add(){
            const response = await Add(this.newPost);
            console.log({response});

            if(response){
                this.posts.unshift(this.newPost);
                this.newPost = newPost();
                this.$router.push('/home');
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