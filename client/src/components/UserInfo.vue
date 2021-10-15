<template>
<div class="page">
  <div class="columns is-multiline">
      <div class="column is-two-fifths">
        <div class="user-image">
            <figure class="image">
                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
            </figure>
        </div>
    </div>
    <div class="column is-one-third">
      <div class="features">
        <h1 class="subtitle is-3"><span1>@username</span1></h1>
        <div class="bio">
          <h1 class="subtitle">Age: N/A</h1>
          <h1 class="subtitle">Height: N/A</h1>
          <h1 class="subtitle">Weight: N/A</h1>
      </div>
        <p><span>0</span> Highlights</p>
        <a href="community.html"><span>0</span> Motivators</a>
        <a href="community.html"><span>0</span> Inspires</a>
    </div>
        <div class="options">
            <a class="button is-link" style="font-weight: 600;" href="createpost.html">
                Share Highlight
              </a>
            <a class="button is-warning" style="font-weight: 600;" href="editprofile.html">
                Edit Profile
            </a>
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
.page{
    margin-top: 20px;
    margin-bottom: 20px;
}
.bio{
      margin-bottom: 20px;
    }
    .bio h1{
      display: inline;
      margin-right: 40px;
    }
.image{
        width: 220px;
        margin-top: 10px;
        margin-left: 200px;
    }
    .column p{
        display: inline;
    }
    .features p{
        margin-right: 40px;
        font-size: 18px;
    }
    .features p span{
        font-size: 20px;
        margin-right: 5px;
    }
    .options{
        margin-top: 20px;
    }
    .options a{
        margin-right: 10px;;
    }
    .features p{
        margin-right: 40px;
        font-size: 18px;
        color: black;
    }
    .features p span{
        font-size: 20px;
        margin-right: 5px;
    }
    .features a{
        margin-right: 40px;
        font-size: 18px;
        color: black;
    }
    .features a span{
        font-size: 20px;
        margin-right: 5px;
    }
</style>