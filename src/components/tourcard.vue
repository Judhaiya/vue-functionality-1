<template>


<div class="card-list">
    <div class="cards-item">
      <p>
       {{tour.RoomName}}
      </p>
      <p>{{tour.Describe}}</p>
      <p>{{tour.location}}</p>
      
       
     
    </div>
   <div class="to-div">
        
   </div>
   
    
</div>

</template>
<script>
export default {
    name:'tourcard',
    props:{
        tour:Object
    }
}
</script>
<style>
.card-grid{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.cards-item{
    background-color:cornflowerblue;
     min-height:200px;
    
    padding:20px;
    margin-bottom:40px ;
}

</style>