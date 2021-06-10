<template>
  <div id="app">

<div class="nav-links">
  <Welcome />
</div>
  
  
  
<router-view></router-view>



  </div>
</template>
     
 <script>
import Welcome from "./components/Welcome.vue"
export default {
  name:"App",
  component:{
    Welcome
  }
  

   
 
  }


 </script>
 
 
 

 
 <style>
 
 </style>    
    
    
 
<style>
.card-grid{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap:20px;
    color:white;
}
.showDiv{
  background:cornflowerblue ;
  padding:10px;
  width:300px;
  height:auto;
}

</style>
