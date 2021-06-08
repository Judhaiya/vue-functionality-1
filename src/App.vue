<template>
  <div id="app">
    <div class="card-grid">
   <tourcard v-for="tour in TourList" v-bind:Key="tour.location" v-bind:tour ="tour"/>
    </div>

   <button  v-on:click="showDiv=true">pop-up</button>
   <div v-bind:class="{showDiv:showDiv}" v-if="showDiv">
     <button  v-on:click="showDiv=false">close</button>
     <div class="room-info">
     <label for="room-name">
     Room Name
     </label><br>
     
      <input ref="room" type="text"><br>
      <label for="description">
      Describe:
     </label><br>
     <textarea  name="description" id="" cols="30" rows="10"></textarea><br>
     <label for="location">
       location
    </label><br>
     <input type="text"><br>
     
     </div>
   </div>
  </div>
  
 
</template>

<script>


import tourcard from './components/tourcard.vue'

export default {
  components: { tourcard },
  name: 'App',
  data(){
    return {
    TourList:[{
      id:0,

      RoomName:"Deluxe",
      Describe:'mesmerzing and brings mushy memories',
      location:"Darjeeling"
    },
    {
      id:1,
      RoomName:"roof-top",
      Describe:'pleasant with moon and sun-light',
      location:"bali"
    },
    {
      id:2,
       RoomName:"seaFacing side",
      Describe:'lying on the bed and enjoying furious waves adds beauty',
      location:"maldives"
    }],
    
    showDiv:false,
     room:'',
     clear:function(){
       console.log(this.refs)
     }
    }
    
    }

    
  }

 

</script>

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
