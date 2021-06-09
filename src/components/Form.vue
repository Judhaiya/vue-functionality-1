<template>
  <div class="form">
    <form action="">
      <label for="Hotel-name"> Hotel Name </label>
      <input v-model="hotel.hotelName" type="text" />
      <label for="feedback"> feedback </label>
      <input v-model="hotel.feedback" type="text" />
      <button v-on:click.prevent="store" class="add">Add</button>
    </form>
    <p>{{ hotel.hotelName }}</p>
    <p>{{ name }}</p>
    <p>{{ datahotel }}</p>
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
      datahotel: [],

      hotel: {
        hotelName: "",
        feedback: "",
      },
    };
  },
  methods: {
    store: function () {
      this.datahotel.push(this.hotel);
      this.hotel = {
        hotelName: "",
        feedback: "",
      };
    },
  },
};
</script>
