<template>
  <div class="default">
  <h2>Welcome to HotelFeedback Site</h2>
  <p>vist the below links to register your feedback</p>
  <p><router-link to="/home">View Feedback</router-link></p>
  <p><router-link to="/about">Admin</router-link></p>
  </div>
</template>

<script>

export default {
  name: 'Welcome',
 
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
