<template>

<div class="tour-card">
  <h2 class="f-heading">View feedback from regular customer</h2>
  <div class="display-grid">
    <div class="card" v-for ="(tour,i) in hotel" :key="i">
        <p >{{tour.HotelName}}</p>
        <p >{{tour.feedback}}</p>
       <p>{{price}}</p>
    
    </div>
    <!--
    <div v-for="(randomuser,i) in randomUsers" :Key="i" class="populate-random">
      <p>{{randomuser.gender}}</p>
      <p>{{randomuser.dob.date.toLocaleString()}}</p>
      <p>{{randomuser.location.street.number}}</p>
      <p>{{randomuser.email}}</p>
    </div>
    -->
    {{randomUsers}}
  </div>
</div>
</template>
<script>


export default {
    name:"tourcard",
    data(){
      return{
       
      }
    },
  computed:{
         hotel(){
           return this.$store.state.hotel
         },
         price(){
           return this.$store.state.hotel.price
         }
       },
      

}
</script>

<style>
.display-grid{
   
   display:grid;
   grid-template-columns: 1fr 1fr 1fr;
 
 }
 .card{
   background-color: rgba(255, 130, 242, 0.8);
  
   text-align: center;
   padding:20px;
   margin:2rem;
 }
 .f-heading{
     text-align: center;
 }
</style>