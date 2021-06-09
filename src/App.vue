<template>
  <div id="app">
<p>Hello</p>
<div class="nav-links">
  <p> <router-link to="/contact">Contact</router-link></p>

  <router-link to="/about">About</router-link>
</div>
  
  
  
<router-view></router-view>

<Form :name="hotel"/>

  </div>
</template>
     
 <script>

 import Form from "./components/Form"

 

 
  export default {
  components: { Form },
    name:"App",
   data(){
     return{
       hotel:[
         {
        HotelName:"Berzillus",
        feedback:"Good"
       },
         {
        HotelName:"Berzillus",
        feedback:"Good"
       },
         {
        HotelName:"Berzillus",
        feedback:"Good"
       }]
     }
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
