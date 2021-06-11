<template>
  <div class="form-wrapper">
    <div class="form">
    <form class ="flex" action="">
      <label for="Hotel-name"> Hotel Name </label><br>
      <input v-model="hotel.HotelName" type="text" /><br>
      <label for="feedback"> feedback </label><br>
      <textarea v-model="hotel.feedback" rows="4" cols="50" /><br>
      <button v-on:click.prevent="store" class="add">Add</button>
    </form>
    </div>
    <div class="faq-wrapper">
    <div class="faq">
    <h2>Frequently Asked Question</h2>
    <div  class="e-question" v-for="(task,i) in tasks" :Key="i">
      <h2 class="category">Category:{{task.category}}</h2>
      <h3>{{i+1}}:{{task.question}}</h3>
      <p>{{task.correct_answer}}</p>
     
    </div>
    </div>
    </div>
   

  
  </div>
  
</template>
<script>
import axios from "axios";
export default {
  name: "Form",
  props: {
    name: Array,
  },
  data() {
    return {
    filternumbers:"",
    storeprice:"",
      hotel: {
        HotelName: "",
        feedback: "",
      },
      prizesArray:[],
      tasks:null
    };
  },
  
    
    
  
     
    
   
   
   
     mounted(){
      axios.get("https://opentdb.com/api.php?amount=10")
      .then(result=>{
      this.tasks=result.data.results
      })
    }

    
 
};
</script>
<style >
.form{
     display:flex;
    justify-content: center;
    flex-direction: row;
     align-items: center;
     margin-top:2rem;
}
.faq-wrapper{
  display:flex;
  align-items: center;
  justify-content: center;
}
.faq{
  display:grid;
  grid-template-columns:800px ;
  grid-row-gap:1rem;
  text-align: center;
}
.e-question{
  background:mediumpurple;
 
}
.category{
  color:white;
}
</style>