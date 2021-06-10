<template>
  <div class="form">
    <form class ="flex" action="">
      <label for="Hotel-name"> Hotel Name </label><br>
      <input v-model="hotel.HotelName" type="text" /><br>
      <label for="feedback"> feedback </label><br>
      <textarea v-model="hotel.feedback" rows="4" cols="50" /><br>
      <button v-on:click.prevent="store" class="add">Add</button>
    </form>
    
   

  </div>
</template>
<script>
export default {
  name: "Form",
  props: {
    name: Array,
  },
  data() {
    return {
     

      hotel: {
        HotelName: "",
        feedback: "",
      },
    };
  },
  methods: {
    
    store:function(){
      this.$store.state.hotel.push(this.hotel);
      this.hotel = {
        HotelName: "",
        feedback:  "",
      };
    }
    
  },
};
</script>
<style >
.form{
     display:flex;
    justify-content: center;
     align-items: center;
     margin-top:2rem;
}
</style>